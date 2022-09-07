
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Css/AddToCart.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/action/index';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
function AddToCartComp() {
  const state = useSelector((state) => state.addItems);
  let total = 0;

  state.forEach((pro) => {
    total += pro.price;
  });

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product))
  }
  const delProduct = (isremoveItem = false, product) => {
    if (isremoveItem)
      product.qty = 1;
    dispatch(delItem(product))
  }

  const cartItems = (cartItem, i) => {
    return (
      <Card key={i} className="d-flex w-70">
        <Card.Img className='height-cs' variant="left" src={cartItem.productImg} />

        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button onClick={() => delProduct(true, cartItem)}>Remove Item <RemoveShoppingCartIcon /></Button>
        </Card.Body>
        <Card.Text>  <Button onClick={() => addProduct(cartItem)} variant="primary" className="add-btn" ><AddIcon /></Button>
        </Card.Text>

        <Card.Text>  <Button onClick={() => delProduct(false, cartItem)} variant="primary" className="add-btn" ><RemoveIcon /></Button>
        </Card.Text>
        <Card.Text>
          <CurrencyRupeeIcon />{cartItem.price}
        </Card.Text>
        <Card.Text>
          qty: {cartItem.qty}
        </Card.Text>
      </Card>
    )
  }

  return (
    <div>
      <div className="d-flex"><h2 >Shopping Cart</h2>
      </div>
      {state.length && state.map(cartItems)}

      <div className="d-flex"><h2 >Total : <CurrencyRupeeIcon /> {total}</h2>
      </div>

    </div >
  );

}

export default AddToCartComp;