import { Card, Container, Row, Col, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  
];

const ProductCards = (props) => {
  const cards = productsArr.map((product) => {
    return (
      <Col xs={3}>
        <Card>
          <Card.Header>{product.title}</Card.Header>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Footer className="d-flex justify-content-between">
            <p>&#8377;{product.price}</p>
            <Button variant="success">Add to cart</Button>
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
