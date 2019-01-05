import React from 'react';
import Header from './Header';
import Dividerh from './Dividerh';
import Menu from './Menu';
import What from './What' ;
import {Button} from 'semantic-ui-react';
import Bill from './Bill';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          items : []
        }
      }
    render(){
        const {items} = this.state;
        return(
            <div>
                <What/>
                <Dividerh/>
                <Menu items={items}/>
                <Bill/>
          </div>
        )
    }
}
export default Home;