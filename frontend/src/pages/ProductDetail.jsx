import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Badge, Form } from 'react-bootstrap';

export default function ProductDetail({ cartItems, setCartItems }) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/product/' + id)
            .then(res => res.json())
            .then(res => setProduct(res.product))
    }, [id])

    function addToCart() {
        const itemExist = cartItems.find((item) => item.product._id == product._id)
        if (!itemExist) {
            const newItem = { product, qty };
            setCartItems((state) => [...state, newItem]);
            toast.success("Cart Item added successfully!");
        }
    }

    function increaseQty() {
        if (product.stock == qty) {
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1);
        }
    }

    return product && (
        <>
        <Container fluid className="py-4">
            <Row className="justify-content-center">
                
                <Col xs={12} lg={5} className="mb-4">
                    <div className="text-center">
                        <img 
                            src={product.images[0].image} 
                            alt={product.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: '500px', width: 'auto' }}
                        />
                    </div>
                </Col>

                
                <Col xs={12} lg={5}>
                    <div className="product-details">
                        <h2 className="h3 mb-2">{product.name}</h2>
                        <p className="text-muted mb-3">Product #{product._id}</p>

                        <hr />

                       
                        <h3 className="text-primary mb-4">${product.price}</h3>
                        

                     
                        <Row className="align-items-center mb-4">
                            <Col xs="auto">
                                <div className="d-flex align-items-center">
                                    <Button 
                                        variant="outline-danger" 
                                        size="sm"
                                        onClick={decreaseQty}
                                        disabled={qty <= 1}
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        type="number"
                                        value={qty}
                                        readOnly
                                        className="mx-2 text-center"
                                        style={{ width: '70px' }}
                                    />
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm"
                                        onClick={increaseQty}
                                        disabled={qty >= product.stock}
                                    >
                                        +
                                    </Button>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <Button className="amazon-product-btn"
                                    variant="primary" 
                                    onClick={addToCart}
                                    disabled={product.stock === 0}
                                    size="lg"
                                >
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>

                        <hr />

                       
                        <div className="mb-3">
                            <strong>Status: </strong>
                            <Badge bg={product.stock > 0 ? 'success' : 'danger'}>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                            {product.stock > 0 && (
                                <span className="text-muted ms-2">
                                    ({product.stock} available)
                                </span>
                            )}
                        </div>

                        <hr />

                        
                        <div className="mb-4">
                            <h4>Description</h4>
                            <p className="text-muted">{product.description}</p>
                        </div>

                        <hr />

                       
                        <div className="seller-info">
                            <p className="mb-0">
                                <strong>Sold by:</strong> {product.seller}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>



        </>
    )
}