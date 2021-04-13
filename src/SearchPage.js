import React, {Component} from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class SearchPage extends Component {
    static propTypes={
        books : PropTypes.array.isRequired
    }

    
    state={
        query :'',
        books:[]
    }

    updateSearch=(query)=>{
        this.setState(({
            query: query.trim()
        }))
    }
    clearSearch=()=>{
        this.setState({searchResult:[]})
    };
    searchBooks = (event)=>{
        // send a search request in the BooksAPI 
            BooksAPI.search(event.target.value)
            .then(books =>{
                // update the state with the search results
                if(('error' in books)|| (typeof books === 'undefined')){
                    this.setState(prevState => ({ books :[]}));
                }else{
                    this.setState(prevState => (({books}))
                    )}
            })
            // handle the errors if any
        .catch(error =>{
            console.log('error', error)
        })
    };

    render() {
        const {query}= this.state
        const {shelfChanger,books}= this.props; 
            
        return (
                <div className="search-books">
                    <div className="search-books-bar">

                        <Link className='close-serach-page'
                            to='/'><button
                            className="close-search"
                            onClick={() => this.setState({showSearchPage: false})}>Close</button>
                        </Link>

                        <div className="search-books-input-wrapper">
                            <input type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange ={this.searchBooks}/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        {(this.state.books.length >0) &&
                        <ol className="books-grid">
                        {this.state.books.map(book => <Shelf books={books} key={book.id} shelfChanger={shelfChanger} book ={book}/>)} </ol>}
                    </div>
                </div>
    
        
        )    
    
    
    }
}




export default SearchPage;


               {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                // state = {
                //     /**
                //  * TODO: Instead of using this state variable to keep track of which page
                //  * we're on, use the URL in the browser's address bar. This will ensure that
                //  * users can use the browser's back and forward buttons to navigate between
                //  * pages, as well as provide a good URL they can bookmark and share.
                //  */
                //     showSearchPage: false
                // }