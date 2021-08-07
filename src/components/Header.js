import React from 'react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/outline'
import Button from './Button'

const navItems = [
    { name: "Collections" },
    { name: "Gifts" },
    { name: "Our magazine" }

]
function Header() {
    return (
        <div className="px-12 py-10 bg-white">
            <div className="flex justify-between items-center">
                <div className="">
                    <ul className="list-none flex">
                        <li className="flex items-center text-gray-800 text-[13px] font-bold pr-3 mr-2">Products <ChevronDownIcon className="h-5 pl-2" /></li>
                        {navItems.map((itmes) => (
                            <li className="px-3 font-bold text-gray-500 text-[13px] ml-4">{itmes.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="mr-4">
                        <SearchIcon className="h-6 font-semibold text-gray-600" />
                    </div>
                    <div className="px-6 mr-4 text-[14px] text-gray-600 font-bold">Log In</div>
                    <Button className="bg-gradient-to-r from-red-500 to-yellow-600 text-white font-medium text-xs py-2.5">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
