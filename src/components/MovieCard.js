import React, { useState } from 'react'

const MovieCard = ({ imgSrc, title, star, detail }) => {

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div
            onMouseEnter={() => setShowDetail(true)}
            onMouseLeave={() => setShowDetail(false)}
            className='relative z-10'
        >
            <img 
                className='object-cover h-[220px]'
                src={imgSrc}
                alt='movie-img'
            />
            <div className='flex justify-between mt-10 mx-3 text-white text-sm pb-2'>
                <div>
                    {title}
                </div>
                <div>
                    {star}
                </div>
            </div>

            {showDetail && <div className='absolute top-0 z-20 bg-zinc-600 bg-opacity-50 h-full w-full px-2 py-6 text-white'>
                <h1 className='font-bold text-lg'>
                    {title}
                </h1>
                <p className='mt-4'>
                    {truncate(detail,50)}
                </p>
            </div>}
        </div>
    )
}

export default MovieCard
