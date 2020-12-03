import React from "react";

import AboutImage from "../assets/about.webp"
import AboutImage2 from "../assets/about2.webp"

const AboutPage = () => {
    return (
        <div className="book_page about_page">
                <div className="about_page_warp">
                  <h1 className="page_heading">About Us</h1>
                  <p>Knowledge is priceless and books are the best means from which you can attain this knowledge. Reading is believed to empower people, offer them education, and give them an opportunity to live for a moment in someone else’s shoes. Books are also a critical asset to improvement in one’s life while it also offers an occasional escape to fictional worlds inhabited by interesting characters of the books.</p>
                  <img src={AboutImage} alt="Book" />
                  <blockquote>
                “Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”
                <br /><em>_Charles W. Eliot</em>
                </blockquote>
                  <img src={AboutImage2} alt="Book" />
                  <p>Mini Book Store is an exceptional website where you can find hundreds of interesting novels and used online books. One of the best features of this website is that you can pick any novel and buy it for just ₹99. You can find almost every bestseller here but if your favorite novel isn’t there in the inventory, you can request that novel and it’ll be made available to you. Another unique service that you get here is that you can exchange your novels with the ones present in the inventory.</p>
                  </div>
                  </div>
                  
                      )
}

export default AboutPage;