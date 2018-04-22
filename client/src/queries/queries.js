import {gql} from 'apollo-boost';

const getAuthorsQuery=gql`
{
  authors{
    name 
    age
    id
  }
}
`;

const getBooksQuery=gql`
{
  books
  {
    name 
    genre
    id
  }
}
`;
const addBookMutation=gql`
mutation($name:String!,$genre:String!,$authorid:ID!,){
  addBook(
    name: $name,
    genre:$genre,
    authorid:$authorid
  ){
    id
    name
  }
}
`;
const getBookQuery=gql`
query($id:ID){
  book(id:$id)
  {
    name 
    genre
    id
    author{
      id,
      name,
      age,
      books{
        name,
        id
      }
    }
  }
}
`;

export{
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
  getBookQuery
};