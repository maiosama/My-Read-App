import React, {Component} from 'react'

class Shelf extends Component {
    // state={
    //     value:this.props.books.shelf
    // }
 
changeShelf =(event) =>{
    this.state.props.shelfChanger(this.props.books , event.target.value)
}

selectShelf =(book)=>{
    const findBook = [...this.props.books].filter((bk) =>bk.id === book.id);
    if(findBook.len>0){
        return findBook[0].shelf;
    }
    return 'none'
};
    
    render() {
        const books  = this.props;
        const book=this.props;
        const shelf = 'shelf' in book ? book.shelf : this.selectShelf(book);

        
        return (
            <div className="list-books">

                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                                   <h2 className="bookshelf-title">
                                       {this.props.shelfTitle}                            
                                    </h2> 
                                   < div className = "bookshelf-books" > 
                                    <ol className="books-grid">
                                    { books.length > 0 && books.map(book => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div
                                                        className="book-cover"
                                                        style={{
                                                        width: 128,
                                                        height: 193,
                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                    }}></div >
                                                    <div className="book-shelf-changer">
                                                        <select 
                                                        onChange={this.changeShelf}
                                                        shelf={shelf}> 
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div >
                                            <div className="book-authors">{book.authors}</div>
                                        </li >))}
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
