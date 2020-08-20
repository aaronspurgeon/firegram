import React from 'react'
import img from '../0.jpeg'
import { BsHouseDoor, BsCompass } from 'react-icons/bs'
import { HiOutlineHashtag } from 'react-icons/hi'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdPeopleOutline } from 'react-icons/md'
import { IoIosNotificationsOutline, IoMdPaperPlane } from 'react-icons/io'
import { FiPieChart, FiSettings } from 'react-icons/fi'

export default function SideBar() {
    // const [selected, setSelected] = useState('selected')

    return (
        <div className='side'>
            <h1>FireGram</h1>
            <div className='user-info'>
                <img src={img} alt="" />
                <h3>Aaron Spurgeon<br /><span className='location'>New Hampshire</span></h3>
                <div className='stats'>
                    <div className="stats-info">
                        <p>
                            Post
                        </p>
                        <p>38</p>
                    </div>
                    <div className="stats-info">
                        <p>Followers</p>
                        <p>100</p>
                    </div>
                    <div className="stats-info">
                        <p>Following</p>
                        <p>100</p>
                    </div>
                </div>
            </div>
            <nav className="side_nav">
                <div className='link'> <BsHouseDoor size='1.8em' /><p>Feed</p></div>
                <div className="link"><BsCompass size='1.8em' /><p>Explore</p></div>
                <div className="link"><HiOutlineHashtag size='1.8em' /><p>Trending Tags</p></div >
                <div className="link"><AiOutlineCheckCircle size='1.8em' /><p>Top Post</p></div >
                <div className="link"><MdPeopleOutline size='1.8em' /><p>People</p></div >
                <div className="link"><IoIosNotificationsOutline size='1.8em' /><p>Notification</p></div >
                <div className="link"><IoMdPaperPlane size='1.8em' /><p>Direct</p></div >
                <div className="link"><FiPieChart size='1.8em' /><p>Stats</p></div >
                <div className="link"><FiSettings size='1.8em' /><p>Settings</p></div >
            </nav >
        </div >
    )
}
