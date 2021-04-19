import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import './Collection.css';
const Collection = ({data}) => {
 


    return(
        <div className={`main`}>
        <div className={`container`}>
        {data.map((element)=>(
        <Card className={`card`}>
          <div className={`bookdetails`}>
             <CardContent style={{flex: '1 0 auto',size:"small"}}>
                 <Typography component="h5" variant="h5">{element.volumeInfo.title}</Typography>
                 <Typography variant="subtitle1" color="textSecondary">{element.volumeInfo.authors}</Typography>
             </CardContent>
  
          </div>
          <div className={`image`}>
              <img src={element.volumeInfo.imageLinks?element.volumeInfo.imageLinks.thumbnail:""} alt="Image Not Available"/>
           </div>
                
        </Card>))}
        </div>
            </div>)
};

export default Collection;

