import React from 'react'
import { Card, Feed} from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
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
    fetch("http://localhost:4001/orders")
    .then(handleResponse)
    .then(data=>{
      //console.log(data);
      this.setState(
        {
          orders: data.table_orders
        }
      )
    })
  }
  func = (no) => {
   

    axios.delete(`http://localhost:4001/deltab${no}`)
    .then(function(result2){
        console.log("React ke andr Orders Posted");
    })
    .catch(function(err){
        console.log('React ke andr Orders error: ',err);
    })
}
  render() {
    
  
    return(
  <center><Card>
    <Card.Content>
      <Card.Header>Up For Cooking</Card.Header>
    </Card.Content>
    <Card.Content>

      {
        this.state.orders.map((order,i)=>(
          
          <Feed>
          <Feed.Event>
            <Feed.Label image={this.imgs[order.table_no-1]} />
            <Feed.Content>
              <ul>
                <Feed.Summary>
                  {order.items.map((item,j)=>(<li>{item.name} - {item.amt}</li>))}
                </Feed.Summary>
              </ul>
              
          
              <Button positive onClick = {() => this.func(order.table_no)}>Order Ready</Button>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      
          
                  ))}
    </Card.Content>
  </Card></center>
     )

    }
    }

export default CardExampleContentBlock