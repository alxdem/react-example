import React from 'react';
import { Link } from 'config/routes';
import { graphql, compose } from 'react-apollo';

import Block from './Page404.style';
import { Header, PageHeader, WrapperContent } from 'components';

import { GET_PAGE404_DATA } from 'graphql/query';

@compose(graphql(GET_PAGE404_DATA, { name: 'pageData' }))
export default class Page404 extends React.Component {
  render() {
    const { pageData } = this.props;
    const { NotFoundStatic: dataCurrent } = pageData || {};
    const { title, text, button } = dataCurrent || {};

    return (
      <Block.Root as={'section'}>
        <WrapperContent width={'800'}>
          <Block.Content>
            {(title || text) && (
              <PageHeader title={title} description={text} align={'center'}>
                {button && (
                  <Link route='index' passHref>
                    <Block.Link>{button}</Block.Link>
                  </Link>
                )}
              </PageHeader>
            )}
          </Block.Content>
        </WrapperContent>
      </Block.Root>
    );
  }
}
