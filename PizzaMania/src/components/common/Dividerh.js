import React from 'react';
import {
    Divider
} from 'semantic-ui-react';

const Dividerh = () => {
    return(
        <div style = {{margin : '100px 100px'}}>
            <Divider horizontal><h1 style = {{fontSize : '2.5em',color:'teal'}}>On Menu Today</h1></Divider>
        </div>
    )
}

export default Dividerh