import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ProductDetail=props=>{
    const params = useParams()
    return(
        <Container>
            <h3>Product detail</h3>
            <p>{params.productId}</p>
        </Container>
    )
}

export default ProductDetail