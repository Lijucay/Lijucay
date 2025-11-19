import Image from "next/image";
import damierIcon from '@/public/damier_icon.png';
import Button from "../components/Button";
import damierOverview from '@/public/damier_overview.png';
import damierDetails from '@/public/damier_details.png';
import {TwoPaneImageLayout, TwoPaneImageLayoutReversed} from "@/app/components/TwoPaneImageLayout";

export default function Page() {
    return (
        <div className="bg-[#f6fbf3] flex flex-col h-full">
            <header className="flex flex-row items-center space-x-5 w-4/5 mx-auto mt-5">
                <Image src={damierIcon.src} width={40} height={40} alt="logo" className="rounded-full"/>
                <p className="google-sans-flex-title text-3xl font-bold text-[#326941]">Damier</p>
            </header>
            <div className="bg-[#ffdad6] py-7 mt-5">
                <div className="w-4/5 mx-auto flex flex-col items-center">
                    <p className="google-sans-flex-text text-[#93000a] text-center font-bold w-full">Damier is currently in development. Features and designs are not guaranteed to be the same on release</p>
                </div>
            </div>
            <TwoPaneImageLayout image={damierOverview}>
                <p className="google-sans-flex-title font-semibold text-3xl md:text-5xl mt-10 text-[#326941]">Quick check in</p>
                <p className="google-sans-flex-text mt-5 text-[#326941]">You can quickly check into your habits and track your progress on the overview page.</p>
            </TwoPaneImageLayout>
            <TwoPaneImageLayoutReversed image={damierDetails}>
                <p className="google-sans-flex-title font-semibold text-3xl md:text-5xl mt-10 text-[#326941]">Get details</p>
                <p className="google-sans-flex-text mt-5 text-[#326941]">On the details screen, you can check the progress based on the day by tapping on each cell.</p>
            </TwoPaneImageLayoutReversed>
        </div>
    )
}