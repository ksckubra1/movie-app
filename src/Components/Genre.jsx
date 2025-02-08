import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../redux/slices/genreSlice'
import { Link } from 'react-router-dom'

const Genre = () => {

    const { genres } = useSelector((store) => store.genre)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenre())
    }, [])

    return (
        <div className='xl:flex gap-5 items-center h-16 hidden justify-center bg-[#d89008]'>

            {
                genres && genres.map((genre, index) => {
                    return (
                        <Link key={index}>
                            <div className='font-semibold hover:scale-110 hover:text-red-800 transform duration-200 ease-in'>{genre.name}</div>
                        </Link>

                    )
                })
            }

        </div>
    )
}

export default Genre
