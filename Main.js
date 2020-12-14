import {Component} from 'react'
import Head from './head'
import Home from './home'
import Login from './login.js'
import {Route} from 'react-router-dom'


class Main extends Component{

    constructor(){
        super();

        this. state={
            name:"Anish"
        }
        this.setname=this.setname.bind(this);
    }
  

   setname(x){
       this.setState((state)=>{name:state.name=x})
   }
    render()
    {
    return(
        <div>
        <Route exact path="/" render={()=>
        (<div>
        <Head val={"login"} user={this.state.name}/>
        <Login />
        <Head val={"footer"}/>
        </div>)
        }/>
        
        <Route exact path="/Profile" render={()=>
        (
        <div>
        <Head val={"header"}/>
        <Home/>
        <Head val={"footer"}/>
        </div>)}/>
        </div>
    )
    }
}
export default Main