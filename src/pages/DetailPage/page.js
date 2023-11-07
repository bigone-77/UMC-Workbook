import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailPage = () => {
    const { movieId } = useParams();
    // App.js 에서 설정한 동적 url params 뱉기
    const { state } = useLocation();
    
    return (
        <div className='w-full mt-20'>
            <div className='flex items-start justify-start ml-56'>
                <img 
                    className='object-cover h-[220px]'
                    src={state.imgSrc}
                    alt='movie-img'
                />
                <p className='ml-5 text-lg font-bold'>{movieId}</p>
            </div>
        </div>
    )
}

export default DetailPage