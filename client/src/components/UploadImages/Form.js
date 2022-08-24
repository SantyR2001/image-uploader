import React from "react";

const GetImage = ({ changeImage, wasSent }) => {
    return(
      <form style={{ width: '90%'}} className="p-4 h-auto bg-white shadow-lg rounded-3 mt-3">
        <h1 className="text-white text-center fs-3 bg-success rounded-pill mt-2 p-2">Upload your image</h1>
        <p className='text-center text-secondary mt-2'>File should be Png, Jpeg...</p>
        <div 
        className='container bg-light h-75 mt-3 text-secondary fs-6 rounded border border-gray-100'>
          <input 
            style={{ 
              margin: '0',
              padding: '0',
              width: '50%',
              height: '50%',
              opacity: '0',
              position: 'absolute'}}
            type='file'
            accept="image/*"
            multiple
            onChange={(e) => {changeImage(e)}}
          />
          <p className="text-center fs-5 mt-5">Drag & drop image here</p>
          <h3 className='mt-4 text-center'>or</h3>
          <button
            style={{ marginLeft: '25%' }}
            className='btn w-50 btn-secondary fs-5 mt-4'
          >
            Choose a file
          </button>
        </div>
        {!wasSent? 
        ''
        : <p className="text-center text-success">Imagen enviada con éxito</p>}
      </form>
    )
}

export default GetImage;