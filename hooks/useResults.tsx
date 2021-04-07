import { DocumentNode } from 'graphql';

import {getApolloClient} from '../tools/apollo';

export const useResults= async (vars:{  filter?: { name: String },  page: number,},dataQuery: any) =>{

  type Info={
		count: number,
		pages: number,
		next: number,
		prev: any
	}
  type Results={
    name:String,
    image:String,
    id:number
  }
	type data = {
		characters:characters
	}
  type characters={
    info:Array<Info>,
		results:Array<Results>
  }
  interface Variables {
      filter?: { name: String },
      page: number
  };
  // interface Variables {
  //   vars:vars
  // }
    const apolloClient=getApolloClient();
    //console.log("vars",vars)
    // const {data : dataCharacters}= <Query<Chars, Variables> query={ALL_PEOPLE_QUERY}></Query>
    const {data : dataCharacters}=  await apolloClient.query<data, Variables>({
        query: dataQuery, variables:vars,
      });

    return dataCharacters;
} 