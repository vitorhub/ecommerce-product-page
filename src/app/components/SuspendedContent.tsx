import { Suspensa, Overlay, SecondImageSuspensa } from "./MainContent.styles"
import Image from "next/image"
import { SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";

interface Boleano {
    set: boolean;
    metodo: React.Dispatch<SetStateAction<boolean>>
}


const SuspendedContent = (props: Boleano) => {

    const cars = useSelector((state: any) => state.estados)
    let img = cars[cars.length - 1].number_image

    { props.metodo }

    const arr = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
    ]

    function suspendImage() {
        props.metodo(!props.set)
    }

    return (
        <>
            <Suspensa>
                <Image src={arr[img]} alt="img" fill />
                <SecondImageSuspensa>
                    <Image width={80} height={80} src="/images/image-product-1-thumbnail.jpg" alt="" onClick={() => ChangeImg(0)} />
                    <Image width={80} height={80} src="/images/image-product-2-thumbnail.jpg" alt="" onClick={() => ChangeImg(1)} />
                    <Image width={80} height={80} src="/images/image-product-3-thumbnail.jpg" alt="" onClick={() => ChangeImg(2)} />
                    <Image width={80} height={80} src="/images/image-product-4-thumbnail.jpg" alt="" onClick={() => ChangeImg(3)} />
                </SecondImageSuspensa>
            </Suspensa>
            <Overlay onClick={() => suspendImage()} />
        </>
    )
}

export default SuspendedContent