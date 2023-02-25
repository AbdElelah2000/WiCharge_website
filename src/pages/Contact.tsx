import { Link } from 'react-router-dom';
import './contact.css';
import { url } from 'inspector';

export default function Contact () {
    return (
        <main className="contact">
                <div className='contact-text'>
                    <span className='big-text'>CONTACT US</span>
                    <p className='small-text'>We would love to hear from you! If you have any questions, comments, or feedback about our products or our company, please don't hesitate to get in touch.</p>
                </div>

                <a className="yerrr" href="mailto:arafaha@mcmaster.ca"><button className='button-loadmore'><span className='contact-button'>CONTACT</span></button></a>
        </main>
    )
}
