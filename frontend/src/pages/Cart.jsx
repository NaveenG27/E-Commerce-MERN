import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';

export default function Cart({ cartItems, setCartItems }) {
    const [complete, setComplete] = useState(false);

    // Customer details state
    const [customer, setCustomer] = useState({
        name: "",
        mail: "",
        mobile: "",
        address: ""
    });

    const getItemData = (item) => item.product;

    function increaseQty(item) {
        const data = getItemData(item);
        if (!data || data.stock === undefined) return;
        if (data.stock == item.qty) return;

        const updatedItems = cartItems.map((i) => {
            const iData = getItemData(i);
            if (iData && iData._id == data._id) {
                return { ...i, qty: i.qty + 1 };
            }
            return i;
        });
        setCartItems(updatedItems);
    }

    function decreaseQty(item) {
        const data = getItemData(item);
        if (item.qty > 1) {
            const updatedItems = cartItems.map((i) => {
                const iData = getItemData(i);
                if (iData && iData._id == data._id) {
                    return { ...i, qty: i.qty - 1 };
                }
                return i;
            });
            setCartItems(updatedItems);
        }
    }

    function removeItem(item) {
        const data = getItemData(item);
        if (!data) return;

        const updatedItems = cartItems.filter((i) => {
            const iData = getItemData(i);
            return !iData || iData._id !== data._id;
        });
        setCartItems(updatedItems);
    }

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    function placeOrderHandler() {
        if (!customer.name || !customer.mail || !customer.mobile || !customer.address) {
            toast.error("Please fill all details before placing order.");
            return;
        }

        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

        const totalPrice = cartItems.reduce((acc, item) => {
            const data = getItemData(item);
            if (!data) return acc;
            const price = parseFloat(String(data.price || 0).replace(/,/g, ''));
            return acc + (isNaN(price) ? 0 : price * item.qty);
        }, 0).toFixed(2);

        const orderData = {
            cartItems,
            amount: totalPrice,
            status: "Pending",
            name: customer.name,
            mail: customer.mail,
            mobile: customer.mobile,
            address: customer.address,
            createdAt: new Date()
        };

        fetch(apiUrl + '/order/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to place order");
                setCartItems([]);
                setCustomer({ name: "", mail: "", mobile: "", address: "" });
                setComplete(true);
                toast.success("Order placed successfully!");
            })
            .catch((error) => {
                console.error("Order failed:", error);
                toast.error("Order failed. Please try again.");
            });
    }

    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cartItems.reduce((acc, item) => {
        const data = getItemData(item);
        if (!data) return acc;
        const priceString = String(data.price || 0).replace(/,/g, '');
        const price = parseFloat(priceString);
        return acc + (isNaN(price) ? 0 : price * item.qty);
    }, 0).toFixed(2);

    return cartItems.length > 0 ? (
        <Container fluid className="py-4">
            <Row>
                <Col>
                    <h2 className="mb-4">
                        Your Cart: <Badge bg="dark">{cartItems.length} items</Badge>
                    </h2>
                </Col>
            </Row>

            <Row>
                {/* Cart Items */}
                <Col xs={12} lg={7}>
                    {cartItems.map((item) => {
                        const data = getItemData(item);
                        if (!data) return null;
                        const linkPath = item.product ? "/product/" : "/offer/";

                        return (
                            <Card key={data._id} className="mb-3">
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col xs={4} md={3} className="text-center">
                                            <img
                                                src={data.images && data.images[0] ? data.images[0].image : 'placeholder_image_url'}
                                                alt={data.name}
                                                className="img-fluid rounded"
                                                style={{ maxHeight: '100px', width: 'auto' }}
                                            />
                                        </Col>

                                        <Col xs={8} md={3} className="mt-3 mt-md-0">
                                            <Link
                                                to={linkPath + data._id}
                                                className="h6 text-decoration-none"
                                            >
                                                {data.name}
                                            </Link>
                                            {item.offers && <Badge bg="info" className="ms-2">Offer</Badge>}
                                        </Col>

                                        <Col xs={6} md={2}>
                                            <h6 className="text-primary mb-0">${data.price}</h6>
                                        </Col>

                                        <Col xs={6} md={3}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => decreaseQty(item)}
                                                    disabled={item.qty <= 1}
                                                >
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="number"
                                                    value={item.qty}
                                                    readOnly
                                                    className="mx-2 text-center"
                                                    style={{ width: '60px' }}
                                                />
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    onClick={() => increaseQty(item)}
                                                    disabled={item.qty >= data.stock}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={1} className="text-center">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeItem(item)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Col>

                {/* Customer Details Form */}
                <Col xs={12} lg={5}>
                    <Card>
                        <Card.Body>
                            <h4>Enter Delivery Details</h4>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={customer.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="mail"
                                        value={customer.mail}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="mobile"
                                        value={customer.mobile}
                                        onChange={handleInputChange}
                                        placeholder="Enter mobile number"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="address"
                                        value={customer.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter full address"
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3 sticky-top" style={{ top: '20px' }}>
                        <Card.Body>
                            <h4>Order Summary</h4>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <strong>{totalItems} (Units)</strong>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Est. total:</span>
                                <strong className="h5 text-primary">${totalPrice}</strong>
                            </div>
                            <Button
                                variant="warning"
                                size="lg"
                                className="w-100"
                                onClick={placeOrderHandler}
                            >
                                Place Order
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    ) : (
        <Container className="text-center py-5">
            {!complete ? (
                <div>
                    <h2 className="mb-3">Your Cart is Empty!</h2>
                    <p className="text-muted mb-4">Add some products or offers to your cart to get started.</p>
                    <Button as={Link} to="/" variant="warning">
                        Continue Shopping
                    </Button>
                </div>
            ) : (
                <div>
                    <h2 className="mb-3 text-success">Order Complete!</h2>
                    <p className="text-muted mb-4 w">Your order has been placed successfully.</p>
                    <Button  as={Link} to="/" variant="warning">
                        Continue Shopping
                    </Button>
                </div>
            )}
        </Container>
    );
}
