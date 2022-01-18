import React, { useContext, useEffect } from 'react'
import FetchContext from '../contexts/fetchContext'
import CardItems from './CardItems'
import Genres from './Genres'
import Pageination from './Pageination'

const Movie = () => {
    const context = useContext(FetchContext)
    const {data, Movie, page, setPage, noOfPages, genreURL} = context

    useEffect(() => {
       Movie()
    }, [page, genreURL])

    return (
        <div>
            <h1 className="heading text-center">Movies <i className="fas fa-video text-secondary"></i></h1>
            <Genres type={"movie"}/>
            <div className="row">
                {data && data.map((movie)=>{
                    return(
                        <CardItems key={movie.id} title={movie.title || movie.name} description={movie.overview.slice(0, 105)} poster={movie.poster_path} vote={movie.vote_average} release={movie.release_date} media={"Movie"}/>
                    )
                })}
            </div>
            <Pageination setPage={setPage} pages={noOfPages}/>
        </div>
    )
}

export default Movie
