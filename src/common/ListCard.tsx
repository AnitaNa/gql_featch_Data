import { Grid, Typography, styled, Box } from '@mui/material';
import React from 'react';
import { Country } from '../interface';

const SingleCountry = styled(Box)(({ theme }) => ({
    height: '150px',
    width: '350px',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
    backgroundColor: theme.background.light
}))

const ListCard: React.FC<Country> = ({ name, code, capital }: Country) => {
    return (
        <Grid
        key={code}
        xs={2}
        sm={4}
        md={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        >
         <SingleCountry>
          <Typography variant='h6'>{name}</Typography>
          <p>{capital}</p>
          <p>{code}</p>
          </SingleCountry>
        </Grid>
    )
}

export default ListCard;