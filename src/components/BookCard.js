import React from "react";

const BookCard = (props) => {
    return (
        <div className="bookcard">
            <a href={`/book/${props.id}`} >
            <div className="bookcard_inner">
                <img src={`https://mini-book-store-backend.herokuapp.com/${props.BookCover}`} alt={props.BookName} title={props.BookName} />
                {/* <h2>{props.BookName}</h2> */}
                <p className="book_author">by {props.BookAuthor}</p>
                {/* <h2 className="book_name">{props.BookName}</h2> */}
                <h4 className="book_price">₹ {props.BookPrice}</h4>
                
            </div>
            </a>
            <div className="wishlist_icon" onClick={() => props.action(props.id)}>
                    {
                    props.wishlist ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
                    }
                
                </div>
        </div>
    )
}

export default BookCard;