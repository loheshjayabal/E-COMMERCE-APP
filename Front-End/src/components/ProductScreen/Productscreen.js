import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "../../Rating";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import LodingBox from "../../LodingBox";
import { getError } from "../util";
import MessageBox from "../MessageBox";
import Product from "../../Product";
import { Helmet } from "react-helmet-async";
import { Store } from "../store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === products._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${products._id}`);
    if (data.countinStock < quantity) {
      window.alert("Sorry! product is out stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...Product, quantity: 1 },
    });
    navigate("/cart");
  };

  return loading ? (
    <LodingBox />
  ) : error ? (
    <MessageBox varient="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={Product.image}
            alt={Product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup varient="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{Product.name}</title>
              </Helmet>
              <h1>{Product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={Product.rating}
                numReviews={Product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>{" "}
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${Product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {Product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {Product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add To Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
  //   <div>
  //     <h1>{slug}</h1>
  //   </div>
  // );
}

export default ProductScreen;
