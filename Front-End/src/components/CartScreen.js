import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Store } from "./store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countinStock < quantity) {
      window.alert("Sorry! product is out stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}></Col>
        {cartItems.lenght === 0 ? (
          <MessageBox>
            Cart is Empty.<Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ListGroup>
            {cartItems.map((item) => {
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col md={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    ></img>{" "}
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                  </Col>

                  <Col md={3}>
                    <Button
                      variant="light"
                      onClick={() => updateCartHandler(item, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </Button>{" "}
                    <span>{item.quantity}</span>{" "}
                    <Button
                      variant="light"
                      onClick={() => updateCartHandler(item, item.quantity + 1)}
                      disabled={item.quantity === 1}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </Col>

                  <Col md={3}>${item.price}</Col>
                  <Col md={2}>
                    <Button variant="light">
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>;
            })}
          </ListGroup>
        )}
      </Row>

      <Col md={4}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items) : $
                  {cartItems.reduce((a, c) => c.price * c.quantity, 0)}
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={checkoutHandler}
                    disabled={cartItems.lenght === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
