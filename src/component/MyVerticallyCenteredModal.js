import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Rating } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Css/Modal.css'
function MyVerticallyCenteredModal(props) {
    const currentItem = props.data;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {currentItem.brand}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex w-100'>
                    <div className='w-50'>
                        <img className='height-modal-cs' src={currentItem.productImg} />
                    </div>

                    <div className='w-50 modal-info' >
                        <p> {currentItem.brand}</p>
                        <p>{currentItem.info} </p>
                        <p>Ratings -</p>

                        <Rating name="read-only" value={currentItem.ratings} precision={0.5} readOnly />

                        <p> Price- <CurrencyRupeeIcon/>{currentItem.price} </p>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;