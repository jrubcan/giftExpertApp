import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import GrifGrid from './components/GrifGrid';


const GifExpertApp = ()=>{

    //const categories = ['One Punch', 'Samurai', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch']);

    const handleAdd = ()=>{
        setcategories((c)=>{return [...c, 'New Element']});
        //setcategories([...categories, 'New Element']);
    }

    
        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setcategories={setcategories}/>
                <hr />               

                <ol>
                    {
                        categories.map((category)=>{
                            return (
                            <GrifGrid 
                                key = {category} 
                                category = {category}
                            />)
                        })
                    }
                </ol>
            </>
        );

}

GifExpertApp.propTypes = {

};

export default GifExpertApp;