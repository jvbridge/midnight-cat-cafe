import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './homes.css'


function Carousels() {
    return(
        <center>

        <Carousel>
        <div>
            <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image1" />
            <p className="legend-1">Let us make your day!
            </p>
        </div>   
        <div>
            <img src="https://media.istockphoto.com/photos/interior-of-cozy-caf-coffee-shop-small-business-at-counter-artisanal-picture-id1326498175?k=20&m=1326498175&s=612x612&w=0&h=d2xbNQ8Z58LoPphvppaBGAJbDoEn3oxaj4CZ3XZ7WD4=" alt="image1" />
            <p className="legend-1">A 100% plant-based cafe with non-dairy options available.</p>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/another-one-thank-you-picture-id1139917357?k=20&m=1139917357&s=612x612&w=0&h=8SqSPuRl6OGEF7rNJc4rIqt7zZp87z9kG7toloM2jF4=" alt="image1" />
            <p className="legend-1">Connected. Organic. Alive. Natural.</p>
        </div>
        <div>
            <img src="https://media.istockphoto.com/photos/young-man-sitting-in-coffee-shop-and-using-laptop-picture-id1177375625?k=20&m=1177375625&s=612x612&w=0&h=_RmM1Xnv3ExaKMO6bYUS_-Sr1PlGz8ZQoXJHxRcbc4I=" alt="image1" />
            <p className="legend-1">Vegan-friendly.</p>
        </div>
        <div>
            <img src="https://www.westend61.de/images/0001180580pw/two-happy-young-women-with-cell-phone-meeting-in-a-cafe-AHSF00129.jpg" alt="image1" />
            <p className="legend-1">It’s the coffee that makes the neighborhood.</p>
        </div>
    </Carousel></center>
    )
}

export default Carousels