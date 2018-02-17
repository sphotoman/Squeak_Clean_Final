import React, {Component } from 'react';
import Jumbotron from './jumbotron/jumbotron';
import axios from 'axios';

class Contact extends Component {
constructor(props){
    super(props);
    this.state={
      email: null, 
      body: null
    }
    this.handleInputChange=this.handleInputChange.bind(this);
     this.formSubmit=this.formSubmit.bind(this);
  }
  handleInputChange(event) {
    const name=event.target.name
    const value=event.target.value
    this.setState({
      [name]: value
    })
  }

    formSubmit() {
    axios.post("/service",this.state).then(
        (res)=>{
            alert(res.data)
        }
      );
  }  

  render() {
    return (
      <section className="contact page">

              <h1>Contact Us</h1>
              <div className="">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email"
                      value={this.state.email}
                        className=""
                        name="email"
                        id="exampleFormControlInput1"
                        onChange={this.handleInputChange}
                        placeholder="name@example.com" />
              </div>
              <div className="">
                <label for="exampleFormControlTextarea1">Enter your comment here.</label>
                <textarea className=""
                          name="body"
                          value={this.state.body}
                          id="exampleFormControlTextarea1"
                          onChange={this.handleInputChange}
                          rows="3"></textarea>
              </div>
              <button  onClick={this.formSubmit}>Submit</button>
            
          </section>
    );
  }
}

export default Contact;