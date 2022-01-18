import { Chip } from '@mui/material';
import React, { useEffect, useContext } from 'react'
import axios from "axios"
import FetchContext from '../contexts/fetchContext';

const Genres = (props) => {
    const context = useContext(FetchContext)
    const { setPage, genres, setGenres, selectedGenres, setSelectedGenres } = context

    const { type } = props

    const Genres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=4873d74336a275fddfc1456a899d89ed&language=en-US`)
        // console.log(data.genres)
        setGenres(data.genres);
    }

    useEffect(() => {
        Genres()
        return () => {
            setGenres({})
        }
    }, [])

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    }
    const handleDelete = (genre) => {
        setGenres([...genres, genre])
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id))
        setPage(1)
    }

    return (
      
        <div className="p-3">
            {selectedGenres && selectedGenres.map((genre) => {
                return (
                    <Chip key={genre.id} color='primary' label={genre.name} style={{ margin: "5px" }} clickable onDelete={(e) => handleDelete(genre)} />
                )
            })}
            {genres && genres.map((genre) => {
                return (
                    <Chip key={genre.id} label={genre.name} color="secondary" style={{ margin: "5px" }} clickable onClick={(e) => handleAdd(genre)} />
                )
            })}
        </div>
    )
}

export default Genres;
