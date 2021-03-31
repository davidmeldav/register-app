import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

export const getApolloClient=(args) => {
const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({headers})=>{
    return {
        headers:{
            ...headers,
            autthorization:"123",
        }
       
    }
  });

  return forward(operation);
})

return new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  
});
}