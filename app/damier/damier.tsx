import damierIcon from '@/public/damier_icon.png';
import Image from "next/image";
import damierStack from '@/public/damier_stack.png';
import Button from "@/app/components/Button";

export default function Damier() {
    return (
        <div className="flex flex-col w-4/5 mx-auto py-10 sm:space-y-5 justify-end">
            <div className="flex flex-col-reverse md:flex-row h-fit">
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                    <Image src={damierStack.src} alt="" width={300} height={300}/>
                    <p className="google-sans-flex-text text-[#326941] mt-5 text-center w-4/5 text-sm">App screenshots represent a work-in-progress version. Final release may differ</p>
                </div>
                <div className="md:w-1/2 flex flex-col py-10 justify-center items-center content-center md:py-0">
                    <Image src={damierIcon.src} width={70} height={70} alt="damier icon" className="rounded-full"/>
                    <h1 className="google-sans-flex-title text-4xl md:text-6xl mt-10 text-[#326941] font-semibold">Damier</h1>
                    <p className="google-sans-flex-text text-[#326941] mt-5 text-center w-4/5">Damier is an Android habit tracker, with a Material 3 Expressive design. It is currently in development.</p>
                    <Button className="bg-[#566435] text-[#f1ffcb] mt-5" href="/damier/">
                        More about Damier
                    </Button>
                </div>
            </div>
    </div>
)
}