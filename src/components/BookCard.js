import React from "react";

const BookCard = (props) => {
    return (
        <div className="bookcard">
            <a href={`/book/${props.id}`} >
            <div className="bookcard_inner">
                <img src={`http://localhost:5000/${props.BookCover}`} alt={props.BookName} title={props.BookName} />
                {/* <h2>{props.BookName}</h2> */}
                <p className="book_author">by {props.BookAuthor}</p>
                {/* <h2 className="book_name">{props.BookName}</h2> */}
                <h4 className="book_price">₹ {props.BookPrice}</h4>
            </div>
            </a>
        </div>
    )
}

export default BookCard;