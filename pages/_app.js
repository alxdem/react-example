import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';

import { ApolloProvider } from 'react-apollo';
import nextWithApollo from 'config/next-with-apollo';
import { initStore } from 'store';
import { Layout } from 'containers';

import { GET_CURRENT_CITY_DATA, GET_FOOTER_DATA } from 'graphql/query';

import reducers from 'store/reducers.js';
import { Footer } from 'components';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'styles/reset.css';
import 'styles/fonts.css';

const store = createStore(reducers);

store.subscribe(() => {});

@withRedux(initStore)
@nextWithApollo
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const client = ctx.apolloClient;

    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
      location: await client.query({
        query: GET_CURRENT_CITY_DATA
      }),
      footerData: await client.query({
        query: GET_FOOTER_DATA
      })
    };
  }

  render() {
    const { Component, pageProps, apollo, initialName, footerData } = this.props;
    const { data: footerInfo } = footerData || {};
    const { rights: footerRights, contraindications: footerText } =
      (footerInfo && footerInfo.CommonFooterStatic) || {};

    return (
      <>
        <Provider store={store}>
          <ApolloProvider client={apollo}>
            <Layout>
              <Component {...pageProps} initialName={initialName} />
              <Footer rights={footerRights} text={footerText} />
            </Layout>
          </ApolloProvider>
        </Provider>
      </>
    );
  }
}
