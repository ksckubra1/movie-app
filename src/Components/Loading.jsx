import React from 'react'
import { Riple } from 'react-loading-indicators'


const Loading = () => {
    return (
        <div className='text-white h-screen justify-center items-center flex'>
            <Riple color="#d89008" size="medium" text="...Loading..." textColor="" />
        </div>
    )
}

export default Loading
