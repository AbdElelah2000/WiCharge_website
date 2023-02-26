import './features.css';
import data from '../data.json';
import { useState } from 'react';

export default function Features() {
    const [featureIndex, setFeatureIndex] = useState(0);
    const getFeatureIndex = (e: any, value: number) => setFeatureIndex(value);
    return (
        <main className='features'>
            <div className='content'>
                <span className='page-title'><span className='page-number'>02</span> ELECTRIC CHARGING 101</span>
                <div className='features-wrapper'>
                    <section className='features-info'>
                        <nav className='features-nav'>
                        {
                            data.features.map((feat, index) => {
                                if (index === featureIndex) {
                                    return (
                                        <div onClick={ (event) => getFeatureIndex(event, index) } key={index} className='features-nav-button-active'>{index}</div>
                                        )
                                    }
                                    return (
                                        <div onClick={ (event) => getFeatureIndex(event, index) } key={index} className='features-nav-button'>{index}</div>
                                        )
                                    })
                        }
                        </nav>

                        <div className='features-text'>
                            <span className='terminology'>THE FEATURES…</span>
                            <span className='features-name'>{data.features[featureIndex].name}</span>
                            <span className='features-description'>{data.features[featureIndex].description}</span>
                        </div>
                    </section>
                    <picture>
                        <source media='(max-width:1020px)' srcSet={data.features[featureIndex].images.landscape}/>
                        <img className='features-image' src={data.features[featureIndex].images.portrait}/>
                    </picture>

                </div>
            </div>

        </main>
    )
}