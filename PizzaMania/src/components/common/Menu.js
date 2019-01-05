import React from 'react'
import { Grid} from 'semantic-ui-react'
import Cardmaker from './CardMaker';
import axios from 'axios';
class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
       items : props.items
      
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    axios.get("http://localhost:4001/menu")
    // .then(handleResponse)
    .then((data => {
      data = data.data;
      // console.log(data);
      this.setState({
        menu:data.menu_items
      }, () => this.renderGrid()) 
    })
    )
    .catch((error) => {
      console.log(error)
    })
  }
  renderGrid() {
    // console.log(this.state)
    let m = this.state.menu;
    let n = [];
    for(let q in m) {
      // console.log(q);
      if(q % 4 !== 0) {
        n[n.length - 1].push(m[q]);
      } else {
        n.push([m[q]]);
      }
    }
    return n;
  }
  render(){
    const {items}=this.state
    return(
        <div>
          <Grid columns={4} stackable textAlign='center'>
            {
              this.renderGrid().map((e, i) => {
                return (
                
                  <Grid.Row verticalAlign='middle' key={i}>
    
                        {e.map((f, k) => (
                          
                           <Cardmaker key={k} menu={f} items = {items}/>
                        ))}
        
                  </Grid.Row>
                )
              })
            }
          </Grid>
          {
            
          }
        </div>
    )
  }
}
export default Menu