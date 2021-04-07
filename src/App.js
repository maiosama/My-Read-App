import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom'
import addButton from './addButton'


class BooksApp extends React.Component {
    state ={
        books:[]
    }
    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(()=>({
                books
            }))
        })
    }
    render() {
        return (
            <div>
                <SearchPage/>
                :
                <BookShelves/>
                :
                <addButton/>   
          </div>
        )
    }
}

export default BooksApp
