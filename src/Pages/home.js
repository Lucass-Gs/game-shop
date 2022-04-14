import React from 'react';
import { useSelector } from 'react-redux';
import { Grid,  makeStyles } from '@material-ui/core/';
import Card from '../components/Card';
import styled from 'styled-components';

const Grids = styled(Grid)`
    background-color: lightgray;    
    border-radius: 4px;
    margin-left: 10px;
    margin-top:4px;`


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
      display: 'flex',
      justifyContent: 'center',
    }   
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();   
    return(
        <Grid  className={classes.root}>            
            <Grids container xs={8} spacing={4} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id}
                            product={item}
                        >
                            {item.name}
                        </Card>
                    )
                })}
            </Grids>
        </Grid>
    )
}

export default HomePage;
