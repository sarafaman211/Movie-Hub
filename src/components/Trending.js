import React, {useContext, useEffect, useRef} from 'react'
import FetchContext from '../contexts/fetchContext';
import CardItems from './CardItems';
import Pageination from './Pageination';

const Trending = () => {
    const context = useContext(FetchContext)
    const {data, Trending, page, setPage, noOfPages} = context;

    useEffect(() => {
       Trending();
    //    console.log(setPage())
    }, [page])

    // const ref = useRef(null)

    // const updateModal = ()=>{
    //     ref.current.click();
    // }

    return (
        <div>
           <h1 className="heading text-center">Trending Movies & Shows <i className="fab fa-hotjar text-danger"></i></h1> 
           <div className="row">
               {data && data.map((trend)=>{
                   return(
                       <CardItems key={trend.id} id={trend.id} title={trend.title || trend.name} description={trend.overview.slice(0, 105)} poster={trend.poster_path} vote={trend.vote_average} release={trend.release_date || trend.first_air_date} media={trend.media_type}/>
                       )
                    })}
           </div>
           <Pageination setPage={setPage} pages={noOfPages}/>
        </div>
    )
}

export default Trending;
