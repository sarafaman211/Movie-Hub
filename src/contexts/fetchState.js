import React, { useEffect, useState } from "react";
import FetchContext from "./fetchContext";
import axios from "axios"
import useGenre from "../hook/useGenre";

const FetchState = (props) => {
    const [data, setData] = useState([]);
    const [noOfPages, setNoOfPages] = useState()
    const [page, setPage] = useState(1)
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const genreURL = useGenre(selectedGenres)

    const Trending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=4873d74336a275fddfc1456a899d89ed&page=${page}`)
        // console.log(data.results)
        setData(data.results);
        setNoOfPages(data.total_pages);
    }

    const Movie = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4873d74336a275fddfc1456a899d89ed&language=en-US&sort_by=popularity.desc&include_adult=true&page=${page}&with_genres=${genreURL}`)
        // console.log(data.results)
        setData(data.results)
        setNoOfPages(data.total_pages);

    }

    const Series = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=4873d74336a275fddfc1456a899d89ed&language=en-US&sort_by=popularity.desc&include_adult=true&page=${page}&with_genres=${genreURL}`)
        console.log(data)
        setData(data.results)
        setNoOfPages(data.total_pages);

    }

    // useEffect(() => {
    //     Search()
    // }, [])

    return (
        <FetchContext.Provider value={{ data, Trending, Movie, Series, page, setPage, noOfPages, setNoOfPages, genres, setGenres, selectedGenres, setSelectedGenres , genreURL }}>
            {props.children}
        </FetchContext.Provider>
    )
}

export default FetchState;