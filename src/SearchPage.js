import React, {Component} from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
    state={
        books:[]
    }

    searchBooks = (event)=>{
        // send a search request in the BooksAPI 
        BooksAPI.search(event.target.value)
        .then(books =>{
            // update the state with the search results
            if(('error' in books)|| (typeof books === 'undefined')){
                this.setState(prevState => ({ books :[]}));
            }else{
                this.setState(prevState => (({books: books}))
                )}
                console.log("serachpage", this.state.books)
        })
        // handle the errors if any
    .catch(error =>{
        console.log('error', error)
    })
    };

    render() {
        const {shelfChanger,books}= this.props; 
            
        return (
                <div className="search-books">
                    <div className="search-books-bar">

                        <Link className='close-serach-page'
                            to='/'>
                            <button className="close-search">Close</button>
                        </Link>

                        <div className="search-books-input-wrapper">
                            <input type="text" 
                            placeholder="Search by title or author"
                            onChange ={this.searchBooks}/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        {(this.state.books.length >0) &&
                        <ol className="books-grid">
                        {this.state.books.map(book => <Book books={books} key={book.id} shelfChanger={shelfChanger} book ={book}/>)} </ol>}
                    </div>
                </div>
        )    
    }
}
 SearchPage.propTypes={
    books : PropTypes.array.isRequired
}




export default SearchPage;


               