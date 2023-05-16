"use client"

import {  useState } from "react";
import { SecaoImagens, SecaoValores } from "./MainContent.styles";
import Image from "next/image"

const MainContent = () => {
    const arr = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ]
    
    const [altera, setAltera ] = useState(0);
    function ChangeImg(e: number){
        setAltera(e)
    }

    return (
        <>
            <SecaoImagens>
                <div>
                    <Image width={300} height={300} src={arr[altera]} alt="img" />
                </div>
                <div>
                    <Image width={80} height={80} src="/images/image-product-1-thumbnail.jpg" alt="" onClick={()=>ChangeImg(0)}/>
                    <Image width={80} height={80} src="/images/image-product-2-thumbnail.jpg" alt="" onClick={()=>ChangeImg(1)}/>
                    <Image width={80} height={80} src="/images/image-product-3-thumbnail.jpg" alt="" onClick={()=>ChangeImg(2)}/>
                    <Image width={80} height={80} src="/images/image-product-4-thumbnail.jpg" alt="" onClick={()=>ChangeImg(3)}/>
                </div>
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