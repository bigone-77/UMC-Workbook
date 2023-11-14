import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// import styled from 'styled-components';

const Card = ({ imgSrc, title, star, detail }) => {

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }
    const [showDetail, setShowDetail] = useState(false);
    const navigate = useNavigate();
    return (
        // <CardContentWrapper
        //     onMouseEnter={() => setShowDetail(true)}
        //     onMouseLeave={() => setShowDetail(false)}
            
        // >
        <div 
            onMouseEnter={() => setShowDetail(true)}
            onMouseLeave={() => setShowDetail(false)}
            className='relative z-10 w-full h-full bg-blue-900 rounded-sm'
            onClick={() => 
                navigate(`/movie/${title}`, {
                    state: { imgSrc, title, star, detail }
                })
            }
        >
            {/* <CardImage
                src={imgSrc}
                alt='movie-img'
            /> */}
            <img 
                className='object-cover h-[220px]'
                src={imgSrc}
                alt='movie-img'
            />
            {/* <CardContents> */}
            <div className='flex justify-between pb-2 mx-3 mt-10 text-sm text-white'>
                <div>
                    {title}
                </div>
                <div>
                    {star}
                </div>
            </div>
            {/* </CardContents> */}

            {/* {showDetail && <CardModal> */}
            {showDetail && <div className='absolute top-0 z-20 w-full h-[330px] px-2 py-4 text-white bg-opacity-50 bg-zinc-600'>
                <h1 className='font-bold '>
                    {title}
                </h1>
                <p className='mt-4'>
                    {truncate(detail,50)}
                </p>
        
            </div>}
        </div> 
        // </CardContentWrapper>
    )
}

export default Card

