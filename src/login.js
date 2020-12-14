import react,{Component} from 'react'
import { Link, NavLink } from 'react-router-dom';

class Login extends Component{
    constructor() {
        super()
        this.press = this.press.bind(this)
        }

    press(event){
        event.preventDefault();
        const email = event.target.elements.Email_Id.value
        const password = event.target.elements.Password.value
        const name1=event.target.elements.Name.value
        if(name1&&email&&password){
           //this.props.setname(name1);
         window.open("/Profile","_self")
         
        }
    }


    render()
    {
        return (
            <div>
            
            <h3>Login Page</h3>
            <form  className="Form" onSubmit={this.press}> 
            <input className="Input" type ="text" placeholder="Name" name="Name"/>
            <input className="Input" type ="text" placeholder="Email_Id" name="Email_Id"/>
            <input className="Input" type="password" placeholder="Password" name="Password"/>
            <button className="Button">Login</button>
            </form>
            </div>
        )
    }
} 

export default Login