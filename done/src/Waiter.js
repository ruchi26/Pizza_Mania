import React from 'react'
import { Card, Feed, Segment,Button } from 'semantic-ui-react'
import handleResponse from './helpers'
import axios from 'axios'

class CardExampleContentBlock extends React.Component{
  constructor(){
    super()
    this.state= {
      orders:[],
      flag:0
    }
    this.imgs= ['https://i.ibb.co/JtnrBx0/1.jpg','https://i.ibb.co/HNstJd1/2.jpg' ,'https://i.ibb.co/YXCGgHy/3.jpg', 'https://i.ibb.co/vYW5R1Z/4.jpg' , 'https://i.ibb.co/1r4VLLT/5.jpg' ]
  }
  componentDidMount(){
    setInterval(()=>{
      this.fetchData();
    },3000)
  }
  fetchData(){
    fetch("http://localhost:4001/waiter")
    .then(handleResponse)
    .then(data=>{
      //console.log(data);
      this.setState(
        {
          orders: data.waiter_orders
        }
      )
    })
  }
  
  func = () => {
   

    axios.delete(`http://localhost:4001/clearAll`)
    .then(function(result2){
        console.log("Success at last");
    })
    .catch(function(err){
        console.log('Ekdum last error hai...Ho jaega  : ',err);
    })
}

  render() {

  
    return(
      <center>
  <Card>
    <Card.Content>
      <Card.Header>To Be Delivered</Card.Header>
    </Card.Content>
    <Card.Content>

      {
        this.state.orders.map((order,i)=>(
          
          <Feed>
          <Feed.Event>
            <Feed.Label image={this.imgs[order.table_no-1]} />
            <ul>
                <Feed.Summary>
                {order.items.map((item,j)=>(<b><li>{item.name} - {item.amt}</li></b>))}
                </Feed.Summary>
             </ul>           
          </Feed.Event>
        </Feed>
      
          
                  ))}
    <Button positive onClick = {() => this.func()}>Delivered All</Button>
    </Card.Content>
  </Card>
  </center>
     )
    }
    }

export default CardExampleContentBlock