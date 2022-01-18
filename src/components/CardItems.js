import { Badge } from '@mui/material'
import React from 'react'
import { image_300, noImage } from '../config/Config'

const CardItems = (props) => {
    const { title, description, poster, vote, release, media } = props
    return (
        <div className="col-md-3 g-4" >
            <div className="card">
                <Badge badgeContent={vote} color={vote > 6 ? "primary" : "secondary"} />
                <img src={poster ? image_300 + poster : noImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary text-center">{title}</h5>
                    <p className="card-text text-secondary overflow-hidden">{!description ? " " :  description + "..."}</p>
                    <div className="box">
                        <span className="details text-primary">{media}</span>
                        <span className="details text-secondary">{release}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems;
