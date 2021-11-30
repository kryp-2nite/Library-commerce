import React from 'react'
import Books from "../UI/Book/Book"
import books from "../../data"

const Featured = () => {
    console.log("data: ", books)
    
    return (
        <section id="Features">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2>
                        Featured <span className="purple">Books</span>
                        </h2>
                    </div>
                    <div className="books">
                        {
                            books
                            .filter(book => book.rating === 5)
                            .slice(0, 4)
                            .map((book) => (
                            <Books 
                            book={book}
                            key={book.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured
