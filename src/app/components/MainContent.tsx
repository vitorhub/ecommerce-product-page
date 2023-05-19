"use client"

import React from "react";
import { useState } from "react";
// import React, { useState } from 'react'

import {
    SecaoImagens, SecaoValores, MainImage, SecondImage,
    Suspensa, Overlay
} from "./MainContent.styles";
import SuspendedContent from "./SuspendedContent";
import Image from "next/image"

import { useDispatch, useSelector } from "react-redux";  // aki
import { RootState } from "../redux";
import { increment, alteraIndice } from '../redux/store'

const MainContent = () => {
    const dispatch = useDispatch();
    const stock = useSelector((state: RootState) => state.stock);

    const arr = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ]

    const [altera, setAltera] = useState(0);
    const [renderiza, setRenderiza] = useState(false);

    function ChangeImg(e: number) {
        setAltera(e)
        dispatch(alteraIndice())}
    };

    function suspendImage() {
        setRenderiza(!renderiza );
    };

    return (
        <>
            <SecaoImagens>

                <MainImage>
                    { stock.counter }
                    <Image src={arr[altera]} alt="img" fill onClick={suspendImage} />
                    <button onClick={()=> {dispatch(increment())}} />
                </MainImage>
                {renderiza ? (
                    <SuspendedContent/>
                ) : ""}

                <SecondImage>
                    <Image width={80} height={80} src="/images/image-product-1-thumbnail.jpg" alt="" onClick={() => ChangeImg(0)} />
                    <Image width={80} height={80} src="/images/image-product-2-thumbnail.jpg" alt="" onClick={() => ChangeImg(1)} />
                    <Image width={80} height={80} src="/images/image-product-3-thumbnail.jpg" alt="" onClick={() => ChangeImg(2)} />
                    <Image width={80} height={80} src="/images/image-product-4-thumbnail.jpg" alt="" onClick={() => ChangeImg(3)} />
                </SecondImage>
            </SecaoImagens>

            <SecaoValores>
                <h3>Sneaker Company</h3>

                <h2>Fall Limited Edition Sneakers</h2>

                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div>
                    <small>$125.00</small> <span>50%</span>
                </div>
                <div>
                    $250.00
                </div>

                <button>-</button><p>{ }</p><button>+</button><button>Add to cart</button>

            </SecaoValores>
        </>
    )
}

export default MainContent;