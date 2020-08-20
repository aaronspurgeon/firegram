import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useState } from 'react';


// { <div className="smooth-image-wrapper">
// <img
//   src={src}
//   alt={alt}
//   className={`smooth-image image-${
//     imageLoaded ? 'visible' :  'hidden'
//   }`}
//   onLoad={()=> setImageLoaded(true)}}
// />
// {!imageLoaded && (
//   <div className="smooth-preloader">
//     <span className="loader" />
//   </div>
// )}
// </div> */}

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images')
    const [imageLoaded, setImageLoaded] = useState(false)
    console.log(docs)
    return (
        <div className='img-col'>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    <motion.div className='img-wrap-col' onClick={() => setSelectedImg(doc.url)} whileHover={{ opacity: 1 }} layout>
                        <motion.img src={doc.url}
                            alt="firestore things"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className={`smooth-image image-${
                                imageLoaded ? 'visible' : 'hidden'
                                }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        {!imageLoaded && (
                            <div className="smooth-preloader">
                                <span className="loader" />
                            </div>
                        )}

                    </motion.div>
                    <div style={{ textAlign: 'center' }}>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>{doc.caption}</motion.p>
                    </div>
                </div>
            ))}
        </div>

    )
}
