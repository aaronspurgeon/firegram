import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    <motion.div className='img-wrap' onClick={() => setSelectedImg(doc.url)} whileHover={{ opacity: 1 }} layout>
                        <motion.img src={doc.url} alt="firestore things" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />

                    </motion.div>
                    <div style={{ textAlign: 'center' }}>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>{doc.caption}</motion.p>
                    </div>
                </div>
            ))}
        </div>
    )
}
