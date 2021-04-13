import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'
import {Route, Link} from 'react-router-dom'



class BooksApp extends React.Component {
    state ={
        books:[],
        showSearchPage: false
    };
    // call the BookAPI backend to have a book array
    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(({books}));
            console.log ("apps page books: ", books)
        })
    };
    // send a request to the BookAPI to update the book shelf in the back end
    shelfChanger= (book,changedShelf)=>{
        BooksAPI.update(book,changedShelf);
        book.shelf=changedShelf;
        const books=[...this.state.books].filter((each)=> each.id!==book.id).concat(book);
        this.setState(({books}));
    };

    render() {
        return (
            <div className="app">
              {/* the main book shelf page */}
                <Route path ='/search' 
                render={()=>(<SearchPage 
                books ={this.state.books}
                shelfChanger={this.shelfChanger}/>
                )}/>

              {/* search page */}
                <Route exact path ='/' 
                render={()=>(
                <BookShelves 
                books ={this.searchResult}
                shelfChanger={this.shelfChanger}/>
                )}/>

                {/* Add book button  */}
                <div className="open-search">
                   <Link to='search'> 
                        <button onClick={() => this.setState({showSearchPage: true})}>
                         Add a book
                        </button>
                    </Link>
                </div>   
            
          
            </div>
        )
    }
}

export default BooksApp
