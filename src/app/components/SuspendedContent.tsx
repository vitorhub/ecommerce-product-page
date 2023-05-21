import { Suspensa, Overlay } from "./MainContent.styles"
import Image from "next/image"


const SuspendedContent = () => {

    const arr = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ]

    return (
        <>
            <Suspensa>
                <Image src={"arr[altera]"} alt="img" fill />
            </Suspensa>
            <Overlay onClick={ ()=>"suspendImage"} />
        </>
    )
}

export default SuspendedContent