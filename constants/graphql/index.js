import {gql,apolloClient,query} from '@apollo/client';

export const GET_CHARACTERS = gql`
query getCharacters( $filter: FilterCharacter,$page: Int) {
    characters(filter:$filter,page:$page) {
        info {
        count
          pages
          next
          prev
        }
        results {
          name
          image
          id
        }
    }

}`

export const CHARACTER = gql`
query getCharacter( $id: ID!) {
    character(id:$id) {
        name,
        id,
        image,
        species,
        type,
        gender,
        created, episode   {
            id
            name
            episode
          }
        
    }

}`