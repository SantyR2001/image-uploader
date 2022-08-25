import axios from "axios";
import React, { useState } from "react";
import { Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import './Image.css'

const Image = ({ img, id, setUpdate, update }) => {
    const [show, setShow] = useState(false);
    const numberImage = `ìmage ${id} selected`;

    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = (id) => {
        console.log(id)
        try {
            axios.delete(`http://localhost:3050/delete/image/${id}`)
            .then(res => {})
        } catch (error) {
            alert(error)
        }finally {
            setShow(false)
            setUpdate(update+1)
        }
    }

    return(
        <Col className="m-0 p-0" sm={6} lg={4} key={id}>
            <div className="img-container p-2 m-2">
                <img className="w-100 rounded" onClick={() => {setShow(true)}} src={img} alt='' />
            </div>
            <Modal show={show}>
                <ModalHeader>
                    <ModalTitle>
                        {numberImage}
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div className="img-container p-2 m-2">
                        <img className="w-100 rounded" src={img} alt='' />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant='danger' onClick={() => handleDelete(id)}>
                        Delete
                    </Button>
                    <Button variant='secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Col>
    )
}

export default Image;