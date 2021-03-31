import {getApolloClient} from '../tools/apollo';

export const useResults= async (vars,dataQuery) =>{

    const apolloClient=getApolloClient();
    //console.log("vars",vars)
    const {data:dataCharacters}=  await apolloClient.query({
        query: dataQuery, variables:vars,
      });

    return dataCharacters;
} 