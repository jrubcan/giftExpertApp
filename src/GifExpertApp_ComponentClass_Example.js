import React, { Component } from 'react';

class GifExpertApp extends Component {
    constructor(props) {
        super(props);
        this.state = {cat: ['One Punch1', 'Samurai', 'Dragon Ball']};
      }
       

    handleAdd = ()=>{
        this.setState({cat: [...this.state.cat, 'New Element']});
        //setcategories([...categories, 'New Element']);
    }
    render() {
        

       
        return (
            <>
                <h2>GifExpertApp</h2>
                <hr />

                <button onClick={this.handleAdd}>Agregar</button>

                <ol>
                    {
                        this.state.cat.map(category=>{
                            return <li key= {category}>{category}</li>
                        })
                    }
                </ol>
            </>
        );
    }
}

export default GifExpertApp;