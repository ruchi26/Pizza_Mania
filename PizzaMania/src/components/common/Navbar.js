import React from 'react';
import './Header.css'
import  './Table.css'
import {
    Button,
    Icon,
    Header,
    Container,
    Modal,
}from 'semantic-ui-react';
import axios from 'axios'

class Navbar extends React.Component {
    state = {
        items:[],
        isButtonDisabled:false
    }
    constructor(props) {
        super(props);
        window.addEventListener('cart_added', (e) => {
            console.log(e)
            this.setState({items: e.detail})
        })
    }
    func = (a,cost) => {
        alert('Order Placed!! Refresh the page to place a new order');
        var obj = {
            "table_no" : Math.floor(Math.random() * (+6 - +1)) + +1,
            "tot_unique" : a.length,
            "tot_price" : cost,
            "comments" : "Extra Sauce",
            "items" : a
        }
        console.log(a)
        console.log(obj)
        axios.post('http://localhost:4001/process',{
            obj
        })
        .then(function(result2){
            console.log("React ke andr Posted");
        })
        .catch(function(err){
            console.log('React ke andr error: ',err);
        })
        this.setState({isButtonDisabled:true});
    }
    render() {
        const {items} = this.state;
    console.log('items', items);
    var cost = 0
    var a = []
    items.map((item) =>(
        a.push({
            "name" : item[0].name,
            "amt" : item[1]
        })
    ))
    items.map((item) => (
        cost = cost + item[0].price*item[1]     
    ))
    return(
        <div>

            <Modal trigger={<Container textAlign = 'right'><Button positive size = 'huge' style = {{margin:'10px',color:'black'}}><Icon name = 'cart' size = 'big'></Icon></Button></Container>}>
                <Modal.Header align = 'middle'>GST Included Bill</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Header align = 'middle'>Your Selected Items</Header>
                    <table className = "Table">
                        <thead className = "Table-head">
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Quantity</th>
                                <th>Net Cost</th>
                            </tr>
                        </thead>
                        <tbody className = "Table-body">
                            { 
                                
                                items.map((item,e) => (

                                <tr key = {item[0].id}>
                                    <td>
                                        <span className = "Table-rank">{item[0].name}</span>
                                    </td>
                                    <td>
                                        <span className = "Table-dollar">₹ {item[0].price}</span>
                                    </td>
                                    <td>
                                        <span className = "Table-rank">{item[1]}</span>
                                    </td>
                                    <td>
                                        <span className = "Table-rank">₹ {item[0].price*item[1]}</span>
                                    </td>
                                </tr>
                     ))}
                        </tbody>
                        <thead className = 'Table-head'>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>
                                    <span>You Need To Pay:</span>
                                </th>
                                <th>₹ {cost}</th>
                            </tr>
                        </thead>
                    </table>
                </Modal.Description>
                <br></br>
                <Modal.Header align = 'middle'>
                    <Button disabled={this.state.isButtonDisabled} positive onClick = {() => this.func(a,cost)}>Place Your Order</Button>
                </Modal.Header>
                </Modal.Content>
            </Modal>
        </div>
        )
    }
}
export default Navbar;

