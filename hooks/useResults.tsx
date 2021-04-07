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
    const apolloClient=getApolloClient();
    const {data : dataCharacters}=  await apolloClient.query<data, Variables>({
        query: dataQuery, variables:vars,
      });

    return dataCharacters;
} 