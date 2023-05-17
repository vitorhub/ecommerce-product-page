import { Suspensa, Overlay } from "./MainContent.styles"
import Image from "next/image"


const SuspendedContent = () => {
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