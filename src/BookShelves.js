import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import { FaBook} from 'react-icons/fa';


//
class BookShelves extends Component {
    static propTypes={
        books : PropTypes.array.isRequired
    }

    render() {
        const {books, shelfChanger} =this.props;
        console.log(this.props);
        // const shelfChanger = this.props
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        // const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        // const read = books.filter(book => book.shelf === 'read');
        console.log('book shelves:', books)

        return (
            <div>
                <div className="list-books-title">
                    {/* App title */}
                    <h1>MyReads <FaBook/></h1>
                    <blockquote>
                        “We may sit in our library and yet be in all quarters of the earth.”
                        – John Lubbock
                    </blockquote>
                </div>

                {/* Currently Read Shelf */}
                <Shelf 
                    books={currentlyReading}
                    shelf='currentlyReading'
                    shelfTitle={ "Currently Reading"}
                    shelfChanger={shelfChanger}
                /> 
                    
                    {/* Read Shelf */}
                <Shelf 
                    books= {books} 
                    shelf='read'
                    shelfTitle={"Read"} 
                    shelfChanger={shelfChanger}
                /> 
                
                
                   {/* Want to Read Shelf */}
                <Shelf
                    books={books}
                    shelf='wantToRead'
                    shelfTitle={"Want to Read"}
                    shelfChanger={shelfChanger}
                />

            </div>
        )
    }
}

export default BookShelves
