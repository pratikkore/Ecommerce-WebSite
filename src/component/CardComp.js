import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
// import logo from '../logo.svg'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action/index';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Css/cartComp.css'
import React from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal.js';


function CardComp({ data }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [currentItem, seCurrentItem] = React.useState({});

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addItem(product))
    }
    return (
        <div className='d-flex-row'>
            <Row xs={1} md={3} className="g-4 pt-4 t-center">
                {data.map((d, idx) => (
                    <Col >
                        <Card>
                            <div onClick={() =>{ setModalShow(true); seCurrentItem(d)}}>
                                <div>
                                    <Card.Img className='height-cs' variant="top" src={d.productImg} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{d.brand}</Card.Title>
                                    <Card.Title><CurrencyRupeeIcon />{d.price}</Card.Title>
                                    <Card.Text>
                                        {d.info}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            <Card.Body>

                                <Button variant="primary" onClick={() => addProduct(d)}><AddShoppingCartIcon /></Button>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
            <MyVerticallyCenteredModal
        show={modalShow}
        data={currentItem}
        onHide={() => setModalShow(false)}
      />
        </div>
    );
}


export default CardComp;