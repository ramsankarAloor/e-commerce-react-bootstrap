import { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductCards = (props) => {
  const cartcontext = useContext(CartContext);

  function addToCartHandler(item) {
    cartcontext.addToCart(item);
  }

  const cards = productsArr.map((product) => {
    return (
      <Col xs={3} key={product.key}>
        <Card>
          <Card.Header>{product.title}</Card.Header>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Footer className="d-flex justify-content-between">
            <p>&#8377;{product.price}</p>
            <Button variant="success" onClick={() => addToCartHandler(product)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
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
