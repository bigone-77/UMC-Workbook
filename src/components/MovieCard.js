import React, { useState } from 'react'
import styled from 'styled-components';

const MovieCard = ({ imgSrc, title, star, detail }) => {

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }
    const [showDetail, setShowDetail] = useState(false);
    return (
        <CardContentWrapper
            onMouseEnter={() => setShowDetail(true)}
            onMouseLeave={() => setShowDetail(false)}
            
        >
            <CardImage
                src={imgSrc}
                alt='movie-img'
            />
            <CardContents>
                <div>
                    {title}
                </div>
                <div>
                    {star}
                </div>
            </CardContents>

            {showDetail && <CardModal>
                <h1 className='font-bold '>
                    {title}
                </h1>
                <p className='mt-4'>
                    {truncate(detail,50)}
                </p>
            </CardModal>}
        </CardContentWrapper>
    )
}

export default MovieCard

const CardContentWrapper = styled.div`
    position: relative;
    z-index: 10;
`;

const CardImage = styled.img`
    object-fit: cover;
    height: 220px;
`;

const CardContents = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    margin: 10px 3px;
    font-size: 14px;
    color: white;
`;

const CardModal = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 330px;
    padding: 4px 2px;
    color: white;
    background-color: rgba(223, 223, 223, 0.5);
`;

