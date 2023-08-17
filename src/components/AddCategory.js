import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setcategories})=>{


    const [inputvalue, setinputvalue] = useState('')
    const handleInputChange = (e)=>{
       // console.log(e.target.value);
        setinputvalue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputvalue.trim().length >2)
            setcategories((c)=>{return [inputvalue, ...c]});
        //console.log('Submit realizado');
         
     }
        
    return (
     
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={inputvalue}
                onChange={handleInputChange}
            /> 
        </form>
           
   );

}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
};

export default AddCategory;