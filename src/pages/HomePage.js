import React from "react";
import BookCard from '../components/BookCard'
import BookImage1 from '../assets/books/book1.jpg'
import BookImage2 from '../assets/books/book2.jpg'
import BookImage3 from '../assets/books/book3.jpg'
import BookImage4 from '../assets/books/book4.jpg'
import BookImage5 from '../assets/books/book5.jpg'
import BookImage6 from '../assets/books/book6.jpg'

const HomePage = () => {
    return (
        <main>
            <div className="books_warp">
            <BookCard
            BookImage={BookImage1}
            BookName={"The Thirty Names of Night"}
            BookAuthor={"Zeyn Joukhadar"}
            BookPrice={"1,988.00"}
            />
            <BookCard
            BookImage={BookImage2}
            BookName={"White Ivy"}
            BookAuthor={"Susie Yang"}
            BookPrice={"1,500.00"}
            />
            <BookCard
            BookImage={BookImage3}
            BookName={"The Office of Historical Corrections - A Novella and Stories"}
            BookAuthor={"Danielle Evans "}
            BookPrice={"2,299.00"}
            />
            <BookCard
            BookImage={BookImage4}
            BookName={"The Orchard"}
            BookAuthor={"David Hopen"}
            BookPrice={"800.00"}
            />
            <BookCard
            BookImage={BookImage5}
            BookName={"The Harpy"}
            BookAuthor={"Megan Hunter"}
            BookPrice={"1,250.00"}
            />
            <BookCard
            BookImage={BookImage6}
            BookName={"Seven Kinds of People You Find in Bookshops"}
            BookAuthor={"Shaun Bythell"}
            BookPrice={"1,888.00"}
            />
            </div>
        </main>
    )
}

export default HomePage;