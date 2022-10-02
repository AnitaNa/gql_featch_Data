import React, { useState, useEffect } from 'react';
import { Box,TextField, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';

import { Country } from '../../interface';
import { GET_COUNTRIES } from '../../graphql/getQueries';
import { theme } from '../../theme';
import ListCard from '../../common/ListCard';

const Countries = () =>  {

    const { data, error, loading } = useQuery(GET_COUNTRIES);
    const [_countryData, setCountryData] = useState([])
    const [searchText, setSearchText] = useState<string>('');
    
    useEffect(() => {
        if(!loading && data){
            setCountryData(data);
        }
    }, [loading, data])

    if(loading) return <Typography>Loading...</Typography>
    if(error) return <Typography color={theme.status.error}>Error loding data</Typography>
    return (
        <div>
            <Box 
            display="flex"
            justifyContent="center"
            margin={"20px"}
            >
            <TextField
            label="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            inputProps={{min: 0, style: { textAlign: 'center', width: '300px' }}}
            />
            </Box>
             { data && data?.countries.filter((val: Country) => {
                 if(searchText === ''){
                     return val
                 } else if(val.name
                .toLowerCase().includes(searchText.toLowerCase())){
                    return val
                }
             }).map((count: Country) => (
                <ListCard 
                code={count.code} 
                name={count.name} 
                capital={count.capital} 
                 />
            ))}
        </div>
    )
}

export default Countries