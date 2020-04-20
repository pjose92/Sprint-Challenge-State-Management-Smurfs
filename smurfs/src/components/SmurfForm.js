import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../store/actions'

const SmurfForm = props => {
    const { addSmurf, isPosting } = props;
    const [smurf, setSmurf] = useState({name:'', age: '', height: '' });

    const handleChange = e => {
        console.log('change', e.target.value)
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
        console.log('smurf', smurf)
    };

    const handleSubmit = (e) => {        
        console.log('smurf', smurf)
        e.preventDefault();
        addSmurf(smurf);
        console.log('new new new', smurf)
        setSmurf({ name:'', age:'', height:'' });
    }

    if(isPosting) {
        return <h1>Adding Smurf....</h1>
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2>Add New Smurf</h2>
            <label>Smurf Name</label>
            <input 
                type='text'
                name='name'
                placeholder='Smurf!'
                value={smurf.name}
                onChange={handleChange}
            />
            
            <label>Age of the Smurf</label>
            <input
                type='number'
                name='age'
                placeholder='The Age?'
                value={smurf.age}
                onChange={handleChange}
            />

            <label>Smurf's height</label>
            <input
                type='text'
                name='height'
                placeholder='How Tall?'
                value={smurf.height}
                onChange={handleChange} 
            />

            <button type='submit'>Add The Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf})(SmurfForm);