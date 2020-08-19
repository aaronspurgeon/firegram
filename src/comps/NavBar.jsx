import React from 'react';
import { VscMail, VscHeart } from 'react-icons/vsc'
import img from '../0.jpeg'

export default function NavBar() {
    return (

        <div className="nav">
            <h1>FireGram</h1>
            <div className='items'>
                <button>+ Create new post</button>
                <p><VscMail size='2em' /></p>
                <p><VscHeart size='2em' /></p>
                <img src={img} alt="my face" style={{ height: '75%', borderRadius: '50%' }} />
            </div>
        </div>
    )
}
