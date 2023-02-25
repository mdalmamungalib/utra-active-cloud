import React from 'react';
import './PageCart.css'


const PageCart = ({ cartData, handaleAddToCart }) => {
    const { name, about, timeRequired, age, picture } = cartData;
    return (
        <div className=''>
            {/*=======================================
                          Body-Cart-Here              
               =======================================*/}
            <div className='mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='card-img' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{about.slice(0, 100)}...</p>
                        <h3 className='text-lg font-semibold'>For Age : {age}</h3>
                        <h3 className='text-lg font-semibold'>Time required : {timeRequired}s</h3>
                        <div className="card-actions justify-center mt-5">
                            <button onClick={() => handaleAddToCart(cartData)} className="btn btn-wide btn-primary">Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCart;