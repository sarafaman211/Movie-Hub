import Pagination from '@mui/material/Pagination';
import React from 'react';

function Pageination(props) {

    const { setPage, pages } = props;
    const handlePage = (page) => {
        setPage(page)
        window.scroll(0, 0)

    }
    return (
        <div className="page">
            <Pagination count={pages} color='primary' onChange={(e) => handlePage(e.target.textContent)} />
        </div>
    );
}

export default Pageination;
