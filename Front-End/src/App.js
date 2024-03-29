import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProductScreen from "./components/ProductScreen/Productscreen";
import HomeScreen from "./components/Homescreen/Homescreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "./components/store";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import CartScreen from "./components/CartScreen";
import SigninScreen from "./components/SignInScreen";

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container ">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Shopiest</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.lenght > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}:
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
            </Routes>
          </container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
