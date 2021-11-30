import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from "../UI/Highlight/Highlight"

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span> ?
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                         icon={<FontAwesomeIcon icon="bolt" />}
                         title="Easy and Quick"
                         para="Get access to the book you purchased online instantly!"
                         />
                        <Highlight
                         icon={<FontAwesomeIcon icon="book-open" />}
                         title="10,000+ Books"
                         para="Library has books in all your favorite categories."
                         />
                        <Highlight
                         icon={<FontAwesomeIcon icon="tags" />}
                         title="Affordable"
                         para="Get your hands on some of the most popular books for as little as $10.00"
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights
