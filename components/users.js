import React from 'react'
import $ from 'jquery'

//import simulate data
import datausers from '../data/users.js'

export default class Users extends React.Component {
  constructor() {
    super()
    this.state =  { datausers:datausers }
  }
  componentDidMount() {
    console.info($)
  }
  addUser() {
    //add User

  }
  deleteUser(e) {
    //delete User
    /*
    const todel_user = this.state.datausers.find(function (data) {
      return data.id === parseInt(e.target.value,10)
    }.bind(e))
    */
    if (window.confirm('确定删除'+e.target.name+'?')) {
      this.state.datausers.splice(this.state.datausers.findIndex(data => data.id === parseInt(e.target.value,10)),1)
      this.setState({ datausers:this.state.datausers })
    }
  }
  render() {
    return(
      <main>
        <div className="main-wrapper">
          <div className="users-wrapper">
              <h2>Users</h2>
              <div className="main users-main">
                <table>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>age</th>
                      <th>sex</th>
                      <th>operate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.datausers.map(function (user,i) {
                      return <User user={user} key={i} deleteUser={this.deleteUser.bind(this)}/>
                    }.bind(this))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </main>
    )
  }
}

class User extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <tr>
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.sex}</td>
        <td><button onClick={this.props.deleteUser} name={this.props.user.name} value={this.props.user.id}>delete</button></td>
      </tr>
    )
  }
}
