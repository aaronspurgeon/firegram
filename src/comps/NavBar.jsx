import React from 'react';
import { VscMail, VscHeart } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'
import img from '../0.jpeg'

export default function NavBar({ handleFormView }) {


    return (
        <div className="nav">
            <p className='empty'></p>
            <div className='items'>
                <div onClick={handleFormView} className='btn' style={{ cursor: 'pointer' }}><AiOutlinePlus size='1.5em' /> <p>Create new post</p></div>
                <p style={{ cursor: 'pointer' }}><VscMail size='2em' /></p>
                <p style={{ cursor: 'pointer' }}><VscHeart size='2em' /></p>
                <img src={img} alt="my face" style={{ height: '50%', borderRadius: '50%', cursor: 'pointer' }} />
            </div>
        </div>
    )
}