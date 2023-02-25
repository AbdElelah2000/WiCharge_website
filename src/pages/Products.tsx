import './products.css';
import data from '../data.json';
import { useState } from 'react';


export default function Products() {
    const [ProdIndex, setProdIndex] = useState(0);
    const getProdIndex = (e: any, value: number) => setProdIndex(value);

    return (

        <main className="destination">
            <div className='content dest'>
                <span className='page-title'><span className='page-number'>01</span> LEARN MORE ABOUT OUR CHARGERS</span>
                <div className='img-wrapper'>
                    <img src={data.prod[ProdIndex].images.png} className='destination-image' alt="img"/>
                </div>

                <section className='destination-info'>

                    <nav className='destination-nav'>
                        {
                            data.prod.map((product, index) => {
                                if (index === ProdIndex) {
                                    return (
                                        <span onClick={(event) => { getProdIndex(event, index); }} key={index} className='nav-item active-destination' data-index={index}>{product.name}</span>
                                    )
                                }
                                return (
                                    <span onClick={(event) => { getProdIndex(event, index); }} key={index} className='nav-item' data-index={index}>{product.name}</span>
                                )
                            })
                        }
                    </nav>

                    <span className='destination-name'>{data.prod[ProdIndex].name}</span>

                    <p className='destination-description'>{data.prod[ProdIndex].description}</p>

                    <hr className='dest-line'/>
                    
                    <div className='destination-time-wrapper'>
                        <div className='destination-time'>
                            <div>
                                <p className='destination-time-title'>Dist. After 20 mins</p>
                                <p className='destination-time-info'>{data.prod[ProdIndex].distance}</p>
                            </div>
                            <div>
                                <p className='destination-time-title'>Power</p>
                                <p className='destination-time-info'>{data.prod[ProdIndex].power}</p>
                            </div>
                        </div>
                        <div className='test'></div>
                </div>
            </section>

            </div>
        </main>
    )
}