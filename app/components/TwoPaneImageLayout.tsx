import React from "react";
import Image, { StaticImageData } from "next/image";

export function TwoPaneImageLayout({image, children} : {image: StaticImageData, children: React.ReactNode}) {
    return (
        <div className="flex flex-col md:flex-row h-fit w-4/5 mx-auto mt-10">
            <div className="md:w-1/2 flex flex-col justify-center items-center content-center">
                {children}
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center py-10 md:py-0">
                <Image src={image.src} width={300} height={300} alt=""/>
            </div>
        </div>
    )
}

export function TwoPaneImageLayoutReversed( { image, children } : { image: StaticImageData, children: React.ReactNode }) {
    return (
        <div className="flex flex-col-reverse md:flex-row w-4/5 h-fit mt-10 mx-auto">
            <div className="md:w-1/2 flex flex-col justify-center items-center">
                <Image src={image.src} alt="" width={300} height={300}/>
            </div>
            <div className="md:w-1/2 flex flex-col py-10 justify-center items-center content-center md:py-0">
                {children}
            </div>
        </div>
    )
}
