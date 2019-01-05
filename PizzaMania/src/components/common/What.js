import React from 'react';
import {
Header,Container
} from 'semantic-ui-react';


const What = () => {
    return (

        <Container text style = {{margin: '50px'}} textAlign = 'center'>
        <Header as='h3' style={{ fontSize: '2em',color:'teal'}}>
            Breaking The Grid, Grabbing Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on the general way of serving you food we have tried to implement an automated system. Order from your own device without any
            issues and problems.
        </p>
        </Container>
    )
}

export default What