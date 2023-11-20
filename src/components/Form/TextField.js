import React from 'react'

const TextField = ({...rest}) => {
    return <input {...rest} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
}

export default TextField
