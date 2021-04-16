import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
    changeShelf =(event) =>{
        this.props.shelfChanger(this.props.book , event.target.value)
    }
    
    selectShelf =(book)=>{
        const findBook = [...this.props.books].filter((bk) =>bk.id === book.id);
        if(findBook.len>0){
            return findBook[0].shelf;
        }
        return "none"
    };

    render(){
        const {book }= this.props;
        const {title} =book;
        // to display the book image if available, otherwise displays an empty string not an error
        const bookThumbnail = "imageLinks" in book ?book.imageLinks.thumbnail : "";
        // to display the book author's name(s) if available, otherwise displays an empty string not an error
        const authors = "authors" in  book ? book.authors : "";
        const shelf = "shelf" in book ?book.shelf :this.selectShelf(book);


        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${bookThumbnail})`
                        }}></div >
                        <div className="book-shelf-changer">
                            <select 
                            onChange={this.changeShelf}
                            value={shelf}> 
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="book-title">{title}</div >
                <div className="book-authors">{authors}</div>
            </li >


        )
    }

}
Book.propTypes={
    book : PropTypes.object.isRequired
}

export default Book;