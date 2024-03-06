import { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import ProductsContext from "../../store/products-context";

const ProductCards = (props) => {
  const cartcontext = useContext(CartContext);
  const productscontext = useContext(ProductsContext)

  const productsArr = productscontext.products

  function addToCartHandler(item) {
    cartcontext.addToCart(item);
  }

  const cards = productsArr.map((product, index) => {
    return (
      <Col xs={3} key={index}>
        <Link to={`/products/${product.id}`} style={{textDecoration : "none"}}>
          <Card>
            <Card.Header>{product.title}</Card.Header>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Footer className="d-flex justify-content-between">
              <p>&#8377;{product.price}</p>
              <Button
                variant="success"
                onClick={() => addToCartHandler(product)}
              >
                Add to cart
              </Button>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Container className="mt-4">
      <Row>{cards}</Row>
    </Container>
  );
};

export default ProductCards;
