import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GalleryImg from './images/GalleryImage.png';
import UploadImg from './images/UploadImages.png'

const Home = () => {
    const imageSize = { maxHeight: '15rem', maxWidth: '15rem' };
    const linkSize = { width: '18rem', height: '20rem' }
    return(
        <div className="container-fluid d-flex align-items-center h-100 bg-dark">
            <div className="container text-center">
                <span className="text-white fs-1 bg-success rounded-pill p-4"> What you wanna do? </span>
                <div className="container d-flex mt-5 justify-content-around">
                    <Link 
                        to='/gallery' 
                        style={ linkSize }
                    >
                        <Button variant='secondary'>
                            <img style={ imageSize } className="rounded img-fluid m-2" src={GalleryImg}/>
                            <br/>
                            <p className="fs-4 mt-2">Go to gallery</p>
                        </Button>
                    </Link>
                    <Link 
                        to='/select-image' 
                        style={ linkSize }
                    >
                        <Button variant='secondary'>
                            <img style={ imageSize } className="rounded img-fluid m-2" src={UploadImg}/>
                            <br/>
                            <p className="fs-4 mt-2">Upload new image</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;