import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = () => {
    const [ images, setImages ] = useState();
    const axiosApi = async () => {
        let res = await axios.get('http://localhost:3050/images');
        setImages(res.data)
    }

    useEffect(() => {
        axiosApi()
    }, [])

    return(
        <div className="container-fluid h-auto bg-dark">
            <Link to='/' className="ms-3">
                <Button variant="secondary" className="mt-3 fs-4"> Go back </Button>
            </Link>
            <div className="container text-center">
                <div className="w-100 d-flex justify-content-center">
                    <h1 className="text-white text-center w-50 fs-3 bg-success rounded-pill p-2"> My gallery </h1>
                </div>
                <Row>
                    {
                        !images? 
                        <p className="text-center fs-5 text-white"> Sorry, you don't have any pictures yet...</p>
                        :
                        (images.map((img) => {
                            return(
                                <Image img={img.image} id={img.id.toString()} />    
                            )
                        })) 
                    }
                </Row>
            </div>
        </div>
    )
}

export default Gallery;