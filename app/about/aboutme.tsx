import Image from "next/image";
import profilePicture from '../../public/profile.webp'

export default function AboutMe() {
    return (
        <div className="flex flex-col md:flex-row w-4/5 mx-auto mt-30 content-center justify-center md:items-center">
            <div className="block md:w-1/2">
                <Image src={profilePicture.src} alt="" width={50} height={50} className="rounded-full h-[50px]" style={{objectFit: "none"}}/>
                <h1 className="text-4xl md:text-6xl mt-10">Hello! I&#39;m Luca</h1>
            </div>
            <div className="block md:w-1/2">
                <h1 className="text-3xl md:text-4xl mt-10 md:mt-0 leading-10">Hobby developer and CS student at Carl von Ossietzky University Oldenburg</h1>
                <p className="mt-3">I develop apps for Android</p>
            </div>
        </div>
    )
}