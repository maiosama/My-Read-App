import React, {Component} from 'react'
import Book from './Book'
import { FaBookReader} from 'react-icons/fa';


class Shelf extends Component {
    // state={
    //     value:this.props.books.shelf
    // }

    render() {
        const {books, shelf, shelfChanger}  = this.props;
        // const book = this.props;
        // const shelf = this.props
        // const shelfChanger=this.props;
        const shelfBooks= books.filter(book =>book.shelf ===shelf);
        // console.log("shelf page", this.props)

        return (
            <div className="list-books">

                <div className="list-books-content">

                    <div>

                        <div className="bookshelf">

                            <h2 className="bookshelf-title">
                               <FaBookReader/> {this.props.shelfTitle}                            
                            </h2> 

                            < div className = "bookshelf-books" > 
                                <ol className="books-grid">
                                    { shelfBooks.map(book => 
                                    (<Book key={book.id} shelfChanger={shelfChanger} book={book}/>)
                                    )}
                                    
                                </ol>

                            </div>

                        </div> 

                    </div>

                </div>

            </div>
        )
    }
}
export default Shelf;
