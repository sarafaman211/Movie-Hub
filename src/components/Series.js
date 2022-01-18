import React, { useContext, useEffect } from 'react'
import FetchContext from '../contexts/fetchContext'
import CardItems from './CardItems';
import Genres from './Genres';
import Pageination from './Pageination';

const Series = () => {
    const context = useContext(FetchContext);
    const {data, Series, setPage, page, noOfPages, genreURL} = context 

    useEffect(() => {
       Series()
    }, [page, genreURL])

    return (
        <div>
           <h1 className="heading text-center"> Shows <i className="fas fa-tv text-primary"></i></h1> 
           <Genres  type={"tv"}/>
           <div className="row">
               {data && data.map((Series)=>{
                   return(
                        <CardItems key={Series.id} title={Series.title || Series.name} description={Series.overview ? Series.overview.slice(0, 105) : "No Overview Found"} poster={Series.poster_path} vote={Series.vote_average} release={Series.release_date || Series.first_air_date } media={"TV-SERIES"}/>
                   )
               })}
           </div> 
           <Pageination setPage={setPage} pages={noOfPages}/>
        </div>
    )
}

export default Series
