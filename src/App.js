import React from 'react';
import axios from 'axios';

class App extends React.Component{

    constructor(){
        super(); //it is to access the components in react class
        this.state={  //state means data
            email:"",
            pwd:"",
            cpwd:"",
            ph:""
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value //this will change the this.stage entirely
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const newCustomer={
            email:this.state.email,
            pwd:this.state.pwd,
            cpwd:this.state.cpwd,
            ph:this.state.ph
        }
        axios
        .post("/users",newCustomer)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
    }

    render(){
        return(
            <div>
                <h2>Sign Up Form</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                 <label htmlFor="pwd">Password:</label>
                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={this.state.pwd} onChange={this.onChange} />
                </div>
                    <div className="form-group">
                <label htmlFor="pwd"> confirm Password:</label>
                 <input type="password" className="form-control" id="cpwd" placeholder="Enter password" name="cpwd" value={this.state.cpwd} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="email">PH:</label>
                <input type="text" className="form-control" id="ph" placeholder="Enter phone no" name="ph" value={this.state.ph} onChange={this.onChange} />
                </div>

                <div className="checkbox">
                <label><input type="checkbox" name="remember" /> Remember me</label>
                 </div>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                </form>
             </div>
        )
    }
}
export default App;