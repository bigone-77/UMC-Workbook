import React, { useCallback, useEffect, useState } from 'react'
// import styled from 'styled-components';
import instance from '../../api/axios'
import MovieCard from '../MovieCard';

const MovieContents = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovieData = useCallback(async () => {
        const response = await instance.get("/discover/movie?with_genres=28");
        setMovies(response.data.results.slice(1,17));
    }, []);

    useEffect(() => {
        fetchMovieData()
    }, [fetchMovieData])

    return (
        <div>
            <div className='w-full h-5' />
            <div className='grid items-center grid-cols-8 gap-5 mx-2'>
            {/* <Wrapper/> */}
            {/* <Rows> */}
                {movies?.map(movie => (
                    // <CardWrapper>
                    <div className='w-full h-full bg-blue-900 rounded-sm '>
                        <MovieCard 
                            key={movie.id}
                            imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            title={movie.title || movie.name || movie.original_name}
                            star={movie.vote_average}
                            detail={movie.overview}
                        />
                    </div>
                )) }
            </div>
        </div>
    )
}

export default MovieContents

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