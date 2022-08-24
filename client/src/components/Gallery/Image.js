import React from "react";
import { Col } from "react-bootstrap";
import './Image.css'

const Image = ({ img, id }) => {
    return(
        <Col className="m-0 p-0" sm={6} lg={4} key={id}>
            <div className="img-container p-2 m-2">
                <img className="w-100 rounded" src={img} alt='' />
            </div>
        </Col>
    )
}

export default Image;