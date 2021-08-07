import React from 'react'
import Button from './Button'

const card = [
    { title: "Ready for autumn collection", description: "Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.", image: "/images/Rectangle2.png" },
    { title: "Ready for autumn collection", description: "Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.", image: "/images/Rectangle1.png" },
]
function Tiles() {
    return (
        <>
            <div className="max-w-4xl my-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
                    {card.map((items) => (
                        <div className="bg-white">
                            <div className="py-10 px-14 flex flex-col justify-center relative">
                                <h1 className="text-2xl font-semibold font-serif mx-4 text-center leading-9">{items.title}</h1>
                                <p className="text-center pt-6 text-sm leading-7 font-semibold">{items.description}</p>
                                <div className="text-center mt-7">
                                    <Button className="text-gray-800 font-semibold border-2 text-sm border-gray-500">purchase now</Button>
                                </div>
                            </div>
                            <img src={items.image} alt="" className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tiles
