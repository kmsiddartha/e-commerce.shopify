import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import {ShoppingCart} from "@material-ui/icons";
import useStyle from './styles';
import logo from "../../assets/images.png";
import {Link,useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes=useStyle();
    const location=useLocation();
    return (
        <>
         <AppBar position="fixed" className={classes.appBar} color='inherit'>
           <Toolbar>
               
               <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                   <img src={logo} alt='' height='25px' className={classes.image}/>
                   SHOPIFY
               </Typography>
               
               <div></div>
               {location.pathname==='/' &&(
               <div>
              <Link to='/cart'>
              <IconButton>
                   <Badge badgeContent={totalItems} color='secondary'>
                       <ShoppingCart/>
                   </Badge>
               </IconButton>
              </Link>
               </div>)}
           </Toolbar>
        </AppBar>   
        </>
    )
}

export default Navbar
