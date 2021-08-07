import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <div className="relative h-96 overflow-hidden" style={{ backgroundImage: "/images/heroImage.png" }}>
            <img src="/images/heroImage.png" alt="" className="object-cover contrast-50 absolute top-0 bottom-0 left-0 right-0 object-center" style={{ zIndex: "-1" }} />
            <div className="mx-auto" style={{ width: "fit-content" }}>
                <div className="my-12 py-10 px-12 bg-blue-900 bg-opacity-40 max-w-xl">
                    <h1 className="text-4xl text-white font-medium tracking-wide font-serif my-3 text-center">The gift of happiness</h1>
                    <p className="my-4 text-gray-200 text-base font-normal tracking-wide leading-7">Show your gratitude with one of our gift sets, large and small,
                        specially designed to spread joy to someone you love.</p>
                    <div className="pt-5 pb-2 flex justify-center">
                        <Button className="bg-gradient-to-r from-red-500 to-yellow-600 text-white font-medium text-xs py-2.5">Shop Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
