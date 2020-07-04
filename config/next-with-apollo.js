import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { API_URL } from 'Constants';
import { getCookie } from 'utils';

const API_CURRENT =
  process.env.NODE_ENV === 'development' ? process.env.API_URL_LOCAL : process.env.API_URL;

const url = (API_CURRENT || '') + API_URL;

const httpLink = new HttpLink({ uri: url, credentials: 'include' });

export default withApollo(({ ctx, headers, initialState }) => {
  let city = '';

  if (headers && headers.cookie) {
    const store = headers.cookie || '';
    city = getCookie('LOCATION_SELECTED', store);
  }
  if (process.browser) {
    city = getCookie('LOCATION_SELECTED');
  }

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({});

    return forward(operation);
  });

  return new ApolloClient({
    request: async operation => {
      operation.setContext({
        headers: {
          city: city
        }
      });
    },
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
    getDataFromTree: 'always'
  });
  {
    getDataFromTree: 'ssr';
  }
});
