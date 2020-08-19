import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion'

export default function ProgressBar({ file, setFile, setUploading }) {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null)
            setUploading(false)
        }
    }, [url, setFile, setUploading])
    return (
        <motion.div className='progress-bar' initial={{ width: 0 }} animate={{ width: progress + '%' }} >

        </motion.div>
    )
}
