import React, { Component } from 'react';
import {graphql} from 'react-apollo'
import{getBooksQuery}from '../queries/queries'

import BookDetails from './BookDetails';

class BookList extends Component {
  displayBooks(){
    var data=this.props.data;
    if(data.loading){
      return(<div>Loading books ...</div>);
    }
    else{            
      return data.books.map(book=>{
        return(
          <li key={book.id}>{book.name}</li>
        );
      });
      
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        
        <ul id="booklist">
        {this.displayBooks()}
        </ul>
        <BookDetails/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
