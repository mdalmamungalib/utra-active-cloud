import React, { useEffect, useState } from 'react';
import PageCart from '../PageCart/PageCart';
import { FaDumbbell } from "react-icons/fa";
import "./PageBody.css"
import SideCart from '../SideCart/SideCart';
import { addToDb, getStoredCard } from '../../utilities/fakedb';

const PageBody = () => {
    const [cartData, setCartData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCartData(data))
    }, []);

    useEffect(() => {
        const storedCard = getStoredCard();
        const savedCart = [];
        for (const id in storedCard) {
            const addedCard = cartData.find(products => products.id === id)
            if (addedCard) {
                const timeRequired = storedCard[id];
                addedCard.timeRequired = timeRequired;
                savedCart.push(addedCard);
            }
        }
        setCart(savedCart)
    }, [cartData]);

   

    const handaleAddToCart = (carts) => {
        const newCart = [...cart, carts];
        setCart(newCart);
        addToDb(carts.id)
    }
    return (
        <div className='page-body'>
            {/*==========================
                 card-sectione-here 
              ===========================*/}
            <div className='cart-heder  mt-20 pl-16 mb-9 gap-5'>
                {/*======================================
               body-cart-herd-text-here
               ====================================== */}
                <div className='cart-text'>
                    <div className='flex text-4xl font-medium text-blue-800'>
                        <span className='mr-3'><FaDumbbell /></span>
                        <h1>UTRA-ACTIVE-CLUB</h1>
                    </div>
                    <div className='mt-14 text-3xl font-semibold'>
                        <h1>Select today’s exercise</h1>
                    </div>
                </div>
                <div className='pageCart'>
                    {
                        cartData.map(cartData => <PageCart
                            key={cartData.id}
                            handaleAddToCart={handaleAddToCart}
                            cartData={cartData}
                        ></PageCart>)
                    }
                </div>

            </div>
            {/*===========================
                side-card-sectione-here
              ============================*/}
            <div className='min-w-[25%] bg-white p-5 row-span-2'>
                <SideCart cart={cart} cartData={cartData}></SideCart>
            </div>
        </div>
    );
};

export default PageBody;