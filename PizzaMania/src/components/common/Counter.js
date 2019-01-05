import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends Component {
 constructor(props){
     super(props);
     this.state={
         number:0,
         steps:1,
         items : props.items,
         menu : props.menu
     }
 }

 decrementHandler = ()=> {
    const{menu,items} = this.state
     this.setState((setState,props)=>{                                  
        for (var i = items.length - 1; i >= 0; --i) {      
            if (items[i][0] === menu) {
                if(items[i][1] === 1){
                    items.splice(i,1)
                }
                else{
                    items[i][1] = items[i][1] - 1;
                }
            }
        }
        console.log(items)
        return{
        number:setState.number-this.props.steps
     }    
 }, () => {
     window.dispatchEvent(new CustomEvent('cart_added', {detail:this.state.items}));
 })      
}
   incrementHandler = ()=> {
    const{menu,items,number} = this.state
    console.log(number)
        this.setState((prevState,props)=>{                                 
            for (var i = items.length - 1; i >= 0; --i) {      
                if (items[i][0] === menu) {
                    items.splice(i, 1);
                }
            }
            items.push([menu,number+1])
            console.log(items)
            return{
                number:prevState.number+this.props.steps
        }
    }, () => {
        window.dispatchEvent(new CustomEvent('cart_added', {detail:this.state.items}));
    })
}
  buttonStyles={width:"15px",height:"15px"}
 render() {
   return (
     <div>
        <Button icon = 'minus' onClick={this.decrementHandler} disabled={this.state.number<=0} negative/>
        <Button>{this.state.number}</Button>
       <Button icon = 'add' onClick={this.incrementHandler} positive/>
     </div>
   );
 }
}

export default Counter;