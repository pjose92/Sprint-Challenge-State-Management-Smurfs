import React from 'react';

import { Card } from 'semantic-ui-react';

const SmurfCard = props => {
    const { name, age, height } = props.item;

    return (
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Age: {age} <br /> Height: {height}</Card.Description>
        </Card>
    )
}

export default SmurfCard;