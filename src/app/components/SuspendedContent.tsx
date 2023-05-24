import {
    Suspensa, Overlay, ImageAnterior, WrapImages,
    ImageProxima, SecondImageSuspensa, ImageB, WrapArrowPrevious, WrapArrowNext
} from "./SuspendedContent.styles";
import Image from "next/image"
import { SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux"; // modelo redux
import { addCar } from "../redux/store"

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

    const dispatch = useDispatch()
    function ChangeImg(e: number) {
        // setAltera(e)
        dispatch(addCar({ number_image: e }))
        // setTimeout(() => { dispatch(addCar({ number_image: e })) }, 2000);
    }

    function increase(){
        if(img <= 2 ){
            let aumenta = img + 1
            dispatch(addCar({ number_image: aumenta }))
        }
    }
    function decrease(){
        if(img >= 1){
            let diminui = img - 1
            dispatch(addCar({ number_image: diminui }))
        }
    }

    return (
        <>
            <Suspensa>
                <WrapImages>
                    <WrapArrowPrevious onClick={()=>decrease()}>
                        <ImageAnterior width={30} height={30} src="/images/icon-previous.svg" alt="previous" />
                    </WrapArrowPrevious>
                    <Image src={arr[img]} alt="img" fill />
                    <WrapArrowNext onClick={()=>increase()}>
                        <ImageProxima width={30} height={30} src="/images/icon-next.svg" alt="next" />
                    </WrapArrowNext>
                </WrapImages>
                <SecondImageSuspensa>
                    <ImageB src="/images/image-product-1-thumbnail.jpg" 
                    enviaBol={img === 0? true : false}
                    alt="" onClick={() => ChangeImg(0)} />
                    <ImageB src="/images/image-product-2-thumbnail.jpg"
                    enviaBol={img === 1? true : false}
                    alt="" onClick={() => ChangeImg(1)} />
                    <ImageB src="/images/image-product-3-thumbnail.jpg"
                    enviaBol={img === 2? true : false}
                    alt="" onClick={() => ChangeImg(2)} />
                    <ImageB src="/images/image-product-4-thumbnail.jpg"
                    enviaBol={img === 3? true : false}
                    alt="" onClick={() => ChangeImg(3)} />
                </SecondImageSuspensa>
            </Suspensa>
            <Overlay onClick={() => suspendImage()} />
        </>
    )
}

export default SuspendedContent