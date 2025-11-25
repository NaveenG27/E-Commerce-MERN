import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

import { useSearchParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



//images import
import img1 from "../assets/images/samsungCar1.webp"
import img2 from "../assets/images/boatCar2.webp"
import img3 from "../assets/images/saleCar3.webp"
import img4 from "../assets/images/newimg.jpg"



export default function Home(){
    const [products, setProducts] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
         fetch(import.meta.env.VITE_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[searchParams])

    return <Fragment>


        <Carousel>
      <Carousel.Item>
        <img src={img1}
        className="d-block w-100 img-fluid"
        style={{objectFit:"cover"}}
        alt="slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} 
        className="d-block w-100 img-fluid"
        style={{objectFit:"cover"}}
        alt="slide"  />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} 
        className="d-block w-100 img-fluid"
        style={{objectFit:"cover"}}
        alt="slide"  />
        
      </Carousel.Item>
    </Carousel>

            <h1 id="products_heading" className="mt-4 ms-2">Latest Products</h1>

            <section id="products" className="container mt-5">
            
            <div className="row">
                {products.map(product => <ProductCard product={product}/>)}
                 

        
      </div>
            </section>
            
            

            
    </Fragment>
}