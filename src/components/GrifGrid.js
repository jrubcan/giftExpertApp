import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import getGrif from '../helper/getGrif';


const GrifGrid = ({category})=> {

    const [myImages, setMyImages]=useState([]);
    useEffect(()=>{
       getGrif(category).then(setMyImages);
    }, [])

    

    //getGrif();

        return (
            <>
                <h3>{category}</h3>
                <div className='card-grid'>                  
                
                    {
                            myImages.map((myImage)=>{
                                return (
                                <GifGridItem 
                                    key ={myImage.id}
                                    {...myImage}
                                />                              
                                )
                            })
                        }
                
                </div>
            </>
            
        );
   
}

GrifGrid.propTypes = {

};

export default GrifGrid;