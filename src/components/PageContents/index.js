import React, { useCallback, useEffect, useState } from 'react'
// import styled from 'styled-components';
import instance from '../../api/axios'
import MovieCard from '../MovieCard';

const PageContents = ({ url }) => {

    const [contents, setContents] = useState([]);


    const fetchMovieData = useCallback(async (url) => {
        const response = await instance.get(url);
        setContents(response.data.results.slice(1,17));
    }, []);

    useEffect(() => {
        fetchMovieData(url)
    }, [fetchMovieData, url])

    return (
        <div>
            <div className='w-full h-5' />
            <div className='grid items-center grid-cols-8 gap-5 mx-2'>
            {/* <Wrapper/> */}
            {/* <Rows> */}
                {contents?.map(c => (
                    // <CardWrapper>
                    // <div className='w-full h-full bg-blue-900 rounded-sm '>
                        <MovieCard 
                            key={c.id}
                            imgSrc={`https://image.tmdb.org/t/p/original/${c.backdrop_path}`}
                            title={c.title || c.name || c.original_name}
                            star={c.vote_average}
                            detail={c.overview}
                            
                        />
                    // </div>
                )) }
            </div>
        </div>
    )
}

export default PageContents

// const Wrapper = styled.div`
//     height: 20%;
//     width: 100%;
// `;

// const Rows = styled.div`
//     display: grid;
//     grid-template-columns: repeat(8, 1fr);
//     gap: 5px;
//     align-items: center;
//     margin: 2px;
// `;

// const CardWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: #0D47A1; 
//     border-radius: 5px; 
// `;