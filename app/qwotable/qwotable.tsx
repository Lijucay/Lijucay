import qwotableIcon from '@/public/qwotable_icon.png';
import qwotableStack from '@/public/qwotable_stack.png';
import Image from "next/image";
import Button from "@/app/components/Button";

export default function Qwotable() {
    return (
        <div className="flex flex-col w-4/5 mx-auto py-10 sm:space-y-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center content-center py-10 md:py-0">
                    <Image src={qwotableIcon.src} width={70} height={70} alt="qwotable icon" className="rounded-full"/>
                    <h1 className="google-sans-flex-title text-4xl md:text-6xl mt-10 text-[#274777] font-semibold">Qwotable</h1>
                    <p className="google-sans-flex-text w-4/5 text-[#274777] mt-5 text-center">Qwotable is an Android application for storing quotes. Its development has ended and it will soon be replaced by another application.</p>
                    <Button href="/qwotable/" className="bg-[#41446c] text-[#cccefe] mt-5">
                        More about Qwotable
                    </Button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <Image src={qwotableStack.src} alt="qwotable mobile" width={300} height={200}/>
                </div>
            </div>
        </div>
    )
}