import qwotableIcon from '@/public/qwotable_icon.png';
import qwotableMobile from '@/public/qwotable_mobile.png';
import qwotableMobile1 from '@/public/qwotable_mobile_1.png';
import qwotableMobile2 from '@/public/qwotable_mobile_2.png';
import qwotableStack from '@/public/qwotable_stack.png';
import Image from "next/image";

export default function Qwotable() {
    return (
        <div className="flex flex-col w-4/5 mx-auto py-10 sm:space-y-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center content-center py-10 md:py-0">
                    <Image src={qwotableIcon.src} width={70} height={70} alt="qwotable icon" className="rounded-full"/>
                    <h1 className="text-4xl md:text-6xl mt-10 text-[#274777]">Qwotable</h1>
                    <p className="w-4/5 text-[#274777] mt-5 text-center">Qwotable is an Android application for storing quotes. Its development has ended and it will soon be replaced by another application.</p>
                    <div className="flex mt-5 justify-end">
                        <a className="rounded-full bg-[#f9d8fd] text-[#563e5c] py-2 px-4 w-fit">More about Qwotable</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <Image src={qwotableStack.src} alt="qwotable mobile" width={300} height={200}/>
                </div>
            </div>
        </div>
    )
}