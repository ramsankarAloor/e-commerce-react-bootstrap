import { useContext} from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductsContext from "../store/products-context";

const ProductDetail = (props) => {
  const productscontext = useContext(ProductsContext);
  const params = useParams();

  const productArr = productscontext.products.filter((item) => {
    return item.id === Number(params.productId);
  });
  const product = productArr[0];

  return (
    <Container className="mt-3">
      <h3>Product detail</h3>
      <h4>{product.title}</h4>
      <img src={product.imageUrl} alt="product"/>
      <h4>&#8377;{product.price}</h4>
    </Container>
  );
};

export default ProductDetail;
