import React, { Component } from 'react'

export default class Staff extends Component {

  state={
    currentUser:'',
    currentUserEmail:''
  }

  componentDidMount(){
    console.log(JSON.parse(localStorage.getItem('okta-token-storage')))
    const user = JSON.parse(localStorage.getItem('okta-token-storage'))
    console.log(user.claims)
    this.setState({
      currentUser:user.idToken.claims.name,
      currentUserEmail:user.idToken.claims.email
    })
  }
  render() {
    
  
    return (
      <div>
        <p>Your Email:<b>{this.state.currentUserEmail}</b></p>
        <p>username:{this.state.currentUser}</p>
        You reached to the authorized staff page.
      </div>
    )
  }
}
