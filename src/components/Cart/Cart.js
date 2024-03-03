import { useContext, useState } from 'react'
import {Modal, Button, Table} from 'react-bootstrap'
import CartContext from '../../store/cart-context'

const Cart=props=>{
    const cartcontext = useContext(CartContext)

    

    const cartArray = cartcontext.cart.map((item)=>{
        return (
            <tr key={item.id}>
                <td><img src={item.imageUrl} alt="product" width='50px'></img>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><Button variant='danger' onClick={()=>cartcontext.removeFromCart(item.id)}>Delete</Button></td>
            </tr>
        )
    })

    console.log(cartArray)

    return(
        <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    {cartArray}
                </thead>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Cart