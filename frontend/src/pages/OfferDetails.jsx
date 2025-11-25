import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Badge, Form } from 'react-bootstrap';

export default function OfferDetail({ cartItems, setCartItems}) {

    const [offers, setoffers] = useState(null);
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/offer/' + id)
            .then(res => res.json())
            .then(res => setoffers(res.offers))
    }, [id])

    function addToCart(){
        const itemExist = cartItems.find((item)=>item.offer._id==offers._id)
        if(!itemExist){
            const newItem = {offers, qty};
            setCartItems((state)=> [...state, newItem]);
            toast.success("successful");
        }
    }
   
    function increaseQty(){
        if(offers.stock == qty) {
            return;
        }
        setQty((state)=> state+1)
    }
   
    function decreaseQty(){
        if(qty>1){
            setQty((state)=> state-1);
        }
    }
    
    
    return offers && (
        <Container fluid className="py-4">
            <Row className="justify-content-center">
               
                <Col xs={12} lg={5} className="mb-4">
                    <div className="text-center">
                        <img 
                            src={offers.images[0].image} 
                            alt={offers.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: '500px', width: 'auto' }}
                        />
                    </div>
                </Col>

                
                <Col xs={12} lg={5}>
                    <div className="offers-details">
                        <h2 className="h3 mb-2">{offers.name}</h2>
                        <p className="text-muted mb-3">offers #{offers._id}</p>

                        <hr />

                      
                        <div style={{display:"flex"}}>
                        <h3 className="text-danger mb-4" style={{textDecoration:"line-through"}}>${offers.price}</h3>
                        <span>
                        <h3 className="text-success ms-3 mb-4">${offers.offer_price}</h3>
                        </span>
                        </div>

                        <Row className="align-items-center mb-4">
                            <Col xs="auto">
                            <div className="d-flex align-items-center">
                                <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={decreaseQty}
                                disabled={qty <=1}> -
                                    </Button>
                                    <Form.Control
                                    type="number"
                                    value={qty}
                                    readOnly
                                    className="mx-2 text-center"
                                    style={{width:"70px"}}/>
                                    <Button
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={increaseQty}
                                    disabled={qty >= offers.stock}>
                                        +
                                    </Button>
                                    
                                    </div>
                                    </Col>
                                    <Col xs="auto">
                                    <Button className="amazon-product-btn"
                                    variant="primary"
                                    onClick={addToCart}
                                    disabled={offers.stock === 0}
                                    size="lg">
                                        Add to cart
                                    </Button>
                                    </Col>
                        </Row>
                        
                        
                       

                        <hr />

                      
                        <div className="mb-3">
                            <strong>Status: </strong>
                            <Badge bg={offers.stock > 0 ? 'success' : 'danger'}>
                                {offers.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                            {offers.stock > 0 && (
                                <span className="text-muted ms-2">
                                    ({offers.stock} available)
                                </span>
                            )}
                        </div>

                        <hr />

                      
                        <div className="mb-4">
                            <h4>Description</h4>
                            <p className="text-muted">{offers.description}</p>
                        </div>

                        <hr />

                        
                        <div className="seller-info">
                            <p className="mb-0">
                                <strong>Sold by:</strong> {offers.seller}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}