import React from 'react'

function Button(props) {
    return (
        <>
            <a className={(props.className !== undefined) ? `px-6 py-2 ${props.className} uppercase rounded-full tracking-wider` : `uppercase px-6 py-2 text-sm tracking-wide font-semibold border-2 rounded-full border-gray-600`}>
                {props.children}
            </a>
        </>
    )
}

export default Button
