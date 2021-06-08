import React from 'react'
import {Card,CardMedia,CardActions,Typography,Button, CardContent} from '@material-ui/core';
import useStyle from './styles';

const CartItem = ({item,handleUpdateCartQty, handleRemoveFromCart}) => {
    const classes=useStyle();
    return (
       <Card className={classes.root}>
          <CardMedia image={item.media.source} className={classes.media}></CardMedia>
          <div className={classes.box}>
          <CardContent className={classes.cardContent}>
              <Typography variant='h4'>{item.name}</Typography>
              <Typography variant='h4'>{item.price.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <div className={classes.buttons}>
              <Button type='button' size='small' onClick={()=>handleUpdateCartQty(item.id,item.quantity-1)}>-</Button>
              <Typography>{item.quantity}</Typography>
              <Button type='button' size='small' onClick={()=>handleUpdateCartQty(item.id,item.quantity+1)}>+</Button>
              </div>
              <Button variant="contained" type='button' color='secondary' onClick={()=>handleRemoveFromCart(item.id)}>Remove</Button>
          </CardActions>
          </div>
       </Card>
    )
}

export default CartItem
