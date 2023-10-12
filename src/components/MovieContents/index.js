import React, { useCallback, useEffect, useState } from 'react'
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
        <div className=''>
            <div className='h-[20vh] w-full'>

            </div>
            <div className='grid grid-cols-8 items-center mx-2 gap-5'>
                {movies?.map(movie => (
                    <div className='w-full h-full rounded-sm bg-blue-900 '>
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