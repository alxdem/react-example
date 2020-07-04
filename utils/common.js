import React from 'react';

export const getLast = array => {
  return array && Array.isArray(array) && !!array.length && array[array.length - 1];
};

export const dateFormate = date => {
  let dd = date.getDate();
  dd = dd < 10 ? '0' + dd : dd;

  let mm = date.getMonth();
  mm = mm + 1;
  mm = mm < 10 ? '0' + mm : mm;

  let yy = date.getFullYear();

  return `${dd}.${mm}.${yy}`;
};

export const imageSourceGenerate = (array, params) => {
  let lazyImg;
  let counter = 0;

  const sourceData =
    Array.isArray(params) &&
    params.map(item => {
      counter++;
      if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
          if ('lazy' === array[i].key) {
            lazyImg = array[i].src;
          } else if (item[0] === array[i].key) {
            return (
              <source key={counter} srcSet={array[i].src} media={`(max-width: ${item[1]}px)`} />
            );
          }
        }
      }
    });

  const data = {
    lazy: lazyImg ? lazyImg : null,
    source: array ? sourceData : null
  };

  return data;
};
