import { UseDispatch, useSelector } from "react-redux/es/hooks/useSelector";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {remove} from '../store/cartSlice';
import { useDispatch } from "react-redux";
import './Cart.css';

const Cart=()=>{

    const products=useSelector(state=>state.cart);

    const dispatch=useDispatch();

    const removeToCart=(id)=>{
        dispatch(remove(id));
    }


    const cards=products.map(product=>(
        <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">

                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
                </div>
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
                </Card.Footer>
             </Card>
        </div>
    ))

    const cartProducts=useSelector(state=>state.cart);

    //total of cart
    let sum=0;

     for (let i = 0; i < cartProducts.length; i++) {
         sum += cartProducts[i].price;
     }

    return(
        <div className="row">
            {cards}
            <div className="totalcartvalue">
                <h2>Total Value of Cart</h2>
                <p>Number of items in your Cart: {cartProducts.length}</p>
                <p>Total Amount: <strong>${sum}</strong></p>
             </div>

        </div>
        
    )

}


export default Cart;