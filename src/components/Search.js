import React, { useState, useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Pagination, Tab, Tabs } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FetchContext from '../contexts/fetchContext'
import axios from "axios";
import CardItems from './CardItems';
import Pageination from './Pageination'


const Search = () => {
    const context = useContext(FetchContext)
    const { setPage, page, noOfPages, setNoOfPages } = context;

    const [data, setData] = useState([])
    const [type, setType] = useState(0)
    const [searchText, setSearchText] = useState("")

    const Search = async () => {
       const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?query=${searchText}&api_key=4873d74336a275fddfc1456a899d89ed&page=${page}`)
       console.log(data.results)
       setData(data.results)
       setNoOfPages(data.total_pages)
    }

    useEffect(() => {
        Search()
    }, [type, page])
    
    const handleClick = ()=>{
        Search()
    }
    return (
        <div>
            <h1 className="heading text-center"><i className="fas fa-search text-secondary"></i> Search Here !!!</h1>
            <div style={{ display: "flex", justifyContent: "center", padding: "15px 0px" }}>
                <TextField
                    style={{ flex: "1" }}
                    id="standard-search"
                    label="Search"
                    type="search"
                    variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button onClick={handleClick} variant='contained' style={{ marginLeft: 10 }}><SearchIcon /></Button>
            </div>
            <Tabs value={type} indicatorColor="primary" textColor='primary' onChange={(event, newValue) => { setType(newValue), setPage(1) }}>
                <Tab style={{ minWidth: "50%" }} label="Search Movie" />
                <Tab style={{ minWidth: "50%" }} label="Search Series" />
            </Tabs>

            <div className="row">
                {searchText ? data && data.map((search) => {
                    return (
                        <CardItems key={search.id} title={search.title || search.name} description={search.overview ? search.overview.slice(0, 105) : <h2 className='text-center fw-bolder'>No Overview Available</h2> } poster={search.poster_path} vote={search.vote_average} release={search.release_date || search.first_air_date} media={type === 0 ? "movie" : "tv"} />
                    )
                }) : (type ? <h2 className="text-center p-3">No Series Found</h2 > : <h2 className="text-center p-3">No Movies Found</h2>)}
            </div>
           {searchText && noOfPages > 1 && <Pageination setPage={setPage} pages={noOfPages} />}
        </div>
    )
}

export default Search;
