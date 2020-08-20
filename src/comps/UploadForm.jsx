import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion'

export default function UploadForm({ uploading, setUploading, handleFormView }) {
    const [file, setFile] = useState({
        caption: '',
        image: null
    });
    const [error, setError] = useState(null);
    const [placeHolder, setPlaceHolder] = useState({
        caption: '',
        image: null
    });

    const types = ['image/png', 'image/jpeg']


    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setPlaceHolder({ ...placeHolder, image: selected });
            setError('')
        } else {
            setPlaceHolder(null);
            setError('Select an image files (png or jpeg)')
        }
        // console.log('hey')
    }

    const handleCaption = (e) => {
        setPlaceHolder({ ...placeHolder, caption: e.target.value })
    }

    const handleSubmit = (e) => {
        // let selected = e.target.files[0];
        e.preventDefault()
        if (placeHolder.image && types.includes(placeHolder.image.type)) {
            setFile(placeHolder);
            setError('')
            // setUploading(!uploading)
        } else {
            setFile(null);
            setError('Select an image files (png or jpeg)')
            // setUploading(!uploading)
        }
        // setFile(placeHolder)
        console.log(placeHolder)
    }



    return (
        <div style={{ textAlign: 'center' }}>
            {uploading && (
                <motion.form className='form' onSubmit={handleSubmit} initial={{ opacity: 0, y: '-100vh' }} animate={{ opacity: 1, y: 0 }} >
                    <input onChange={handleCaption} type="text" name="caption" placeholder='Add a caption' value={placeHolder.caption} />
                    <label>
                        <input type="file" onChange={changeHandler} />
                        <span>+</span>
                    </label>
                    <div className="output">
                        {error && <div className='error'>{error}</div>}
                        {file && <div className='filename'>{file.name}</div>}
                        {file && <ProgressBar file={file} setFile={setFile} setUploading={setUploading} />}
                    </div>
                    <button type='submit'>submit</button>
                    <button onClick={handleFormView}>Cancel</button>
                </motion.form>
            )
            }
        </div >

    )
}
