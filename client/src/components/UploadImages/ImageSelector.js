import { useState } from 'react';
import { Spinner, Col, Row, Modal, ModalTitle, ModalBody, Button, ModalFooter, ModalHeader } from 'react-bootstrap';
import GetImage from './Form';
import ImagePost from './PostImage';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SelectorImage = () => {
  const [wasSent, setWasSent] = useState(false)
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  //Function for select the image and open the modal
  const changeImage = (e) => {
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImage(e.target.result);
      };
    }
    setShow(true)
  };

  const handleClose = () => {
    setShow(false)
  }

  //Post request
  const handlePost = () => {
    setIsLoading(true)
    axios.post('http://localhost:3050/add/image', { image: image })
    .catch(error => {
      alert(error.message)
    })
    setIsLoading(false)
    setShow(false)
    setWasSent(true)
  }

  return (
    <div className='h-100 bg-dark'>
      <Link to='/' className="ms-3">
        <Button variant="secondary" className="mt-3 fs-4"> Go back </Button>
      </Link>
      <Row className='d-flex h-75 justify-content-center'>
        <Col sm={10} xs={12} md={8} lg={6} >
          <div className='container h-100 w-100 d-flex justify-content-center'>
            <GetImage wasSent={wasSent} changeImage={changeImage}/>
          </div>
          <Modal show={show} >
            <ModalHeader>
              <ModalTitle>
                Do you want save this image?
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <ImagePost image={image}/>
            </ModalBody>
            <ModalFooter>
              <Button variant='secondary' onClick={handlePost}>
                { !isLoading? 
                'Send to gallery' : 
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                }
              </Button>
              <Button variant='danger' onClick={handleClose}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default SelectorImage;