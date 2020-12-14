import react,{Component} from 'react';
import clogo from './images/clogo.jpeg'
import profile from './images/profile.png'
import {Link} from 'react-router-dom'


class Head extends Component{
    
   

render()
{
if(this.props.val=="header")
    {return (
    <div className="top">
    <div className="left">
    <img className="photo" src={profile} alt="profile" id="profile"/> 
    <h2>{this.props.user}</h2>
    </div>

    <h1>Welcome to your Profile!</h1>
    <div className="right">
    <Link to="/" className="logout">Logout</Link>
    <img className="logo" src={clogo} alt="Logo" id="logo"/>
    </div>   
    </div>)
}
if(this.props.val=="footer")
    {
        return (
            <div className="footer"></div>
        )
    }
    if(this.props.val=="login")
    {
        return (
            <div className="login">
            <img className="logo" src={clogo} alt="cLogo" id="logo"/>
            </div>
        )
    }
}
}

export default Head