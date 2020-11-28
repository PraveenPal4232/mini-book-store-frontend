import React from "react";

const BookCard = (props) => {
    return (
        <div className="bookcard">
            <div className="bookcard_inner">
                <img src={props.BookImage} alt="Book" />
                {/* <h2>{props.BookName}</h2> */}
                <p>by {props.BookAuthor}</p>
                <h3>₹ {props.BookPrice}</h3>
            </div>
        </div>
    )
}

export default BookCard;