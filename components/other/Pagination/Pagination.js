import React, { Component } from 'react';
import { Link } from 'config/routes';

import Block from './Pagination.style.js';
import { Icon } from 'components';

export default class Pagination extends Component {
  render() {
    const { lastPage, path, currentPage } = this.props;
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < lastPage ? currentPage + 1 : null;
    const prevPageUrl = prevPage === 1 ? path : `${path}?page=${prevPage}`;

    return (
      <Block>
        {lastPage && path && currentPage && lastPage > 1 && (
          <>
            <Block.Pagination>
              {currentPage > 1 && (
                <Link route={path} passHref>
                  <Block.PaginationLink as='a' isCurrent={currentPage === 1}>
                    01
                  </Block.PaginationLink>
                </Link>
              )}

              {currentPage === 1 && (
                <Block.PaginationLink as='span' isCurrent={true}>
                  01
                </Block.PaginationLink>
              )}

              {currentPage >= 1 && currentPage <= lastPage && (
                <>
                  {currentPage - 2 > 1 && currentPage > 4 && (
                    <Block.PaginationText>...</Block.PaginationText>
                  )}

                  {currentPage === lastPage && currentPage - 4 > 1 && (
                    <Link route={`${path}?page=${currentPage - 4}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage - 4 < 10 ? `0${currentPage - 4}` : currentPage - 4}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage - 3 > 1 && currentPage - 3 >= lastPage - 4 && (
                    <Link route={`${path}?page=${currentPage - 3}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage - 3 < 10 ? `0${currentPage - 3}` : currentPage - 3}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage - 2 > 1 && (currentPage <= 4 || currentPage > lastPage - 3) && (
                    <Link route={`${path}?page=${currentPage - 2}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage - 2 < 10 ? `0${currentPage - 2}` : currentPage - 2}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage - 1 > 1 && (
                    <Link route={`${path}?page=${currentPage - 1}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage - 1 < 10 ? `0${currentPage - 1}` : currentPage - 1}
                      </Block.PaginationLink>
                    </Link>
                  )}
                </>
              )}

              {currentPage > 1 && currentPage < lastPage && (
                <Block.PaginationLink as='span' isCurrent={true}>
                  {currentPage < 10 ? `0${currentPage}` : currentPage}
                </Block.PaginationLink>
              )}

              {currentPage <= lastPage && currentPage >= 1 && (
                <>
                  {currentPage + 1 < lastPage && (
                    <Link route={`${path}?page=${currentPage + 1}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage + 2 < lastPage &&
                    (currentPage === lastPage - 3 || currentPage <= 3) && (
                      <Link route={`${path}?page=${currentPage + 2}`} passHref>
                        <Block.PaginationLink as='a' isCurrent={false}>
                          {currentPage + 2 < 10 ? `0${currentPage + 2}` : currentPage + 2}
                        </Block.PaginationLink>
                      </Link>
                    )}

                  {currentPage + 3 < lastPage && currentPage + 3 <= 5 && (
                    <Link route={`${path}?page=${currentPage + 3}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage + 3 < 10 ? `0${currentPage + 3}` : currentPage + 3}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage === 1 && currentPage + 4 < lastPage && (
                    <Link route={`${path}?page=${currentPage + 4}`} passHref>
                      <Block.PaginationLink as='a' isCurrent={false}>
                        {currentPage + 4 < 10 ? `0${currentPage + 4}` : currentPage + 4}
                      </Block.PaginationLink>
                    </Link>
                  )}

                  {currentPage + 2 < lastPage && currentPage < lastPage - 3 && (
                    <Block.PaginationText>...</Block.PaginationText>
                  )}
                </>
              )}

              {currentPage < lastPage && (
                <Link route={`${path}?page=${lastPage}`} passHref>
                  <Block.PaginationLink as='a' isCurrent={false}>
                    {lastPage < 10 ? `0${lastPage}` : lastPage}
                  </Block.PaginationLink>
                </Link>
              )}

              {currentPage === lastPage && (
                <Block.PaginationLink as='span' isCurrent={true}>
                  {lastPage < 10 ? `0${lastPage}` : lastPage}
                </Block.PaginationLink>
              )}
            </Block.Pagination>

            <Block.Nav>
              {prevPage && (
                <Link route={prevPageUrl} passHref>
                  <Block.Prev as={'a'} isActive={true} onClick={this.prevBtnClick}>
                    <Block.Icon>
                      <Icon name={'arrow2'} size={'fit'} />
                    </Block.Icon>
                  </Block.Prev>
                </Link>
              )}

              {!prevPage && (
                <Block.Prev as={'span'} isActive={false}>
                  <Block.Icon>
                    <Icon name={'arrow2'} size={'fit'} />
                  </Block.Icon>
                </Block.Prev>
              )}

              {nextPage && (
                <Link route={`${path}?page=${nextPage}`} passHref>
                  <Block.Next as={'a'} isActive={true}>
                    <Block.Icon>
                      <Icon name={'arrow2'} size={'fit'} />
                    </Block.Icon>
                  </Block.Next>
                </Link>
              )}

              {!nextPage && (
                <Block.Next as={'span'} isActive={false}>
                  <Block.Icon>
                    <Icon name={'arrow2'} size={'fit'} />
                  </Block.Icon>
                </Block.Next>
              )}
            </Block.Nav>
          </>
        )}
      </Block>
    );
  }
}
