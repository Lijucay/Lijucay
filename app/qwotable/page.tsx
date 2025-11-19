import Image from "next/image";
import qwotableIcon from '@/public/qwotable_icon.png';
import Button from "../components/Button";
import qwotableOverview from '@/public/qwotable_screenshot_4.png';
import qwotableRandomAndFavorites from '@/public/qwotable_screenshot_1.png';
import qwotableOwnQuotes from '@/public/qwotable_screenshot_2.png';
import {TwoPaneImageLayout, TwoPaneImageLayoutReversed} from "@/app/components/TwoPaneImageLayout";

export default function Page() {
    return (
        <div className="bg-[#f9f9ff] flex flex-col h-full">
            <header className="flex flex-row items-center space-x-5 w-4/5 mx-auto mt-5">
                <Image src={qwotableIcon.src} width={40} height={40} alt="logo" className="rounded-full"/>
                <p className="google-sans-flex-title text-3xl font-bold text-[#274777]">Qwotable</p>
            </header>
            <div className="bg-[#ffdad6] py-7 mt-5">
                <div className="w-4/5 mx-auto flex flex-col items-center">
                    <p className="google-sans-flex-text text-[#93000a] text-center font-bold w-full">Qwotable's development has
                        officially ended. It will soon be replaced by a newer, more future proof app.</p>
                    <Button href="https://blog.lijucay.de/blog/future-of-qwotable" className="bg-[#93000a] text-[#ffdad6] mt-5">
                        Read more
                    </Button>
                </div>
            </div>
            <TwoPaneImageLayout image={qwotableOverview}>
                <p className="google-sans-flex-title font-semibold text-3xl md:text-5xl mt-10 text-[#274777]">Read quotes from a big datasource</p>
                <p className="google-sans-flex-text mt-5 text-[#274777]">Qwotable's datasource contains 78 quotes from movies, TV-shows, books, speeches and songs</p>
            </TwoPaneImageLayout>
            <TwoPaneImageLayoutReversed image={qwotableRandomAndFavorites}>
                <p className="google-sans-flex-title font-semibold text-3xl md:text-5xl mt-10 text-[#274777]">Favoritize the quotes you love</p>
                <p className="google-sans-flex-text mt-5 text-[#274777]">You can add quotes you love to your favorites. They will show up when you open the app, prominently on the home-page.</p>
            </TwoPaneImageLayoutReversed>
            <TwoPaneImageLayout image={qwotableOwnQuotes}>
                <p className="google-sans-flex-title font-semibold text-3xl md:text-5xl mt-10 text-[#274777]">Add your own quotes</p>
                <p className="google-sans-flex-text mt-5 text-[#274777]">Qwotable lets you add your own quotes to your app. And if you want to, you can include them at the random-quotes-card.</p>
            </TwoPaneImageLayout>
            <div className="w-4/5 mx-auto my-10 justify-end space-x-5 flex flex-row">
                <Button className="bg-[#41446c] text-[#cccefe]" href="https://github.com/Lijucay/Qwotable/releases/latest">Get on GitHub</Button>
                <Button className="bg-[#41446c] text-[#cccefe]" href="https://f-droid.org/de/packages/com.lijukay.quotesAltDesign/">Get on FDroid</Button>
            </div>
        </div>
    )
}