const ImagePost = ({ image }) => {
    return(
        <div style={{ width: '90%'}} className="container text-center">
            <img
            className="img-fluid rounded"
            src={image}/>
        </div>
    )
}

export default ImagePost;