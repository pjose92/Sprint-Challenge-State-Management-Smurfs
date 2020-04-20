import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import SmurfCard from './SmurfCard';

import { getSmurf } from '../store/actions'

const SmurfList = props => {
    console.log('jp: line9 smurflist.js', props)
    const { getSmurf, smurfs, isFetching } = props;

    useEffect(() => {
        getSmurf()
    },[getSmurf])

    if(isFetching) {
        return <h1>Smurfs Are Loading !</h1>
    }

    return (
        <div>
            {smurfs.map(item => 
                <SmurfCard
                key={item.id}
                item={item}
                />
                )}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('jp: smurflist.js line 32 initial the inital', state)
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (mapStateToProps, {getSmurf})(SmurfList)