import './features.css';
import data from '../data.json';
import { useState } from 'react';

export default function Features() {
    const [featureIndex, setFeatureIndex] = useState(0);
    const getFeatureIndex = (e: any, value: number) => setFeatureIndex(value);
    return (
        <main className='technology'>
            <div className='content'>
                <span className='page-title'><span className='page-number'>02</span> ELECTRIC CHARGING 101</span>
                <div className='technology-wrapper'>
                    <section className='technology-info'>
                        <nav className='technology-nav'>
                        {
                            data.technology.map((feat, index) => {
                                if (index === featureIndex) {
                                    return (
                                        <div onClick={ (event) => getFeatureIndex(event, index) } key={index} className='technology-nav-button-active'>{index}</div>
                                        )
                                    }
                                    return (
                                        <div onClick={ (event) => getFeatureIndex(event, index) } key={index} className='technology-nav-button'>{index}</div>
                                        )
                                    })
                        }
                        </nav>

                        <div className='technology-text'>
                            <span className='terminology'>THE FEATURES…</span>
                            <span className='technology-name'>{data.technology[featureIndex].name}</span>
                            <span className='technology-description'>{data.technology[featureIndex].description}</span>
                        </div>
                    </section>
                    <picture>
                        <source media='(max-width:1020px)' srcSet={data.technology[featureIndex].images.landscape}/>
                        <img className='technology-image' src={data.technology[featureIndex].images.portrait}/>
                    </picture>

                </div>
            </div>

        </main>
    )
}