import { Fragment, useEffect, useState } from "react";
import OfferCard from "../components/OfferCard"
import { useSearchParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



//images import
import img1 from "../assets/images/samsungCar1.webp"
import img2 from "../assets/images/boatCar2.webp"
import img3 from "../assets/images/saleCar3.webp"

export default function Offers() {

    const [offers, setOffers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
         fetch(import.meta.env.VITE_API_URL+'/offers?'+searchParams)
        .then(res => res.json())
        .then(res => setOffers(res.offers))
    },[searchParams])

    return <Fragment>


        <Carousel>
      <Carousel.Item>
        <img src={img1} height="300px" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} height="300px" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} height="300px" />
        
      </Carousel.Item>
    </Carousel>

            <h1 id="products_heading" className="mt-4">Latest Offers</h1>

            <section id="products" className="container mt-5">
            
            <div className="row">
                {offers.map(offer => <OfferCard offer={offer}/>)}
                 

        
      </div>
            </section>

            
    </Fragment>
}