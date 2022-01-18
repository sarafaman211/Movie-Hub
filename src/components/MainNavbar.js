import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useHistory } from 'react-router-dom';

function MainNavbar() {
    const [value, setValue] = React.useState(0);
    const history = useHistory()

    useEffect(() => {
       if(value === 0)history.push('/')
       else if(value === 1)history.push('/movie')
       else if(value === 2)history.push('/series')
       else if(value === 3)history.push('/search')
    }, [value])

    return (
        <Box sx={{ width: "100%", position: "fixed", bottom: "0", zIndex: "100" }}>
            <BottomNavigation sx={{backgroundColor: "#141e30"}}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction style={{color: "#fff"}} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Tv-Series" icon={<TvIcon />} />
            <BottomNavigationAction style={{color: "#fff"}} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
        </Box >
    );
}

export default MainNavbar;