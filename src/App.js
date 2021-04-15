import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'
import {Route, Link} from 'react-router-dom'



class BooksApp extends React.Component {
    state ={
        books:[],
    };
    // call the BookAPI backend to have a book array
    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState({books});
        })
        .then(()=> {console.log ("apps page books: ", this.state.books)
    })
    };
    // send a request to the BookAPI to update the book shelf in the back end
    shelfChanger= (book,updatedShelf)=>{
        BooksAPI.update(book,updatedShelf)
        .then(response=>{book.shelf=updatedShelf;});
        
        const books=[...this.state.books].filter((each)=> each.id!==book.id).concat(book);
        this.setState({books});
    };
    

    render() {
        return (
            <div className="app">
              {/* the main book shelf page */}
               <Route path= '/search'>
               <SearchPage 
                books ={this.state.books}
                shelfChanger={this.shelfChanger}/>
                </Route>
                
              {/* search page */}
                <Route exact path='/'>
                <BookShelves 
                books ={this.state.books}
                shelfChanger={this.shelfChanger}/>
              </Route>

                {/* Add book button  */}
                <div className="open-search">
                   <Link to='search'> 
                        <button>
                         Add a book
                        </button>
                    </Link>
                    
                </div>   
            
          
            </div>
        )
    }
}

export default BooksApp
