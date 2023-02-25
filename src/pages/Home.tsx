import { Link } from 'react-router-dom';
import './home.css';
export default function Home() {
    return (
        <main className="homepage">
                <div className='info'>
                    <span className='first-phrase'>WELCOME TO:</span>
                    <span className='space-text'>WICHARGE</span>
                    <p className='space-paragraph'>We are dedicated to developing cutting-edge technology for wireless charging solutions, so that our customers can enjoy fast, efficient, and convenient charging for Electric Vehicles.</p>
                </div>

                <div id='circle'><span className='explore'><Link to='/products'>EXPLORE</Link></span></div>
        </main>
    )
}