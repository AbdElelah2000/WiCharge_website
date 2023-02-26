import './products.css';
import data from '../data.json';
import { useState } from 'react';


export default function Products() {
    const [ProdIndex, setProdIndex] = useState(0);
    const getProdIndex = (e: any, value: number) => setProdIndex(value);

    return (

        <main className="product">
            <div className='content dest'>
                <span className='page-title'><span className='page-number'>01</span> LEARN MORE ABOUT OUR CHARGERS</span>
                <div className='img-wrapper'>
                    <img src={data.prod[ProdIndex].images.png} className='product-image' alt="img"/>
                </div>

                <section className='product-info'>

                    <nav className='product-nav'>
                        {
                            data.prod.map((product, index) => {
                                if (index === ProdIndex) {
                                    return (
                                        <span onClick={(event) => { getProdIndex(event, index); }} key={index} className='nav-item active-product' data-index={index}>{product.name}</span>
                                    )
                                }
                                return (
                                    <span onClick={(event) => { getProdIndex(event, index); }} key={index} className='nav-item' data-index={index}>{product.name}</span>
                                )
                            })
                        }
                    </nav>

                    <span className='product-name'>{data.prod[ProdIndex].name}</span>

                    <p className='product-description'>{data.prod[ProdIndex].description}</p>

                    <hr className='dest-line'/>
                    
                    <div className='product-time-wrapper'>
                        <div className='product-time'>
                            <div>
                                <p className='product-time-title'>Dist. After 20 mins</p>
                                <p className='product-time-info'>{data.prod[ProdIndex].distance}</p>
                            </div>
                            <div>
                                <p className='product-time-title'>Power</p>
                                <p className='product-time-info'>{data.prod[ProdIndex].power}</p>
                            </div>
                        </div>
                        <div className='test'></div>
                </div>
            </section>

            </div>
        </main>
    )
}