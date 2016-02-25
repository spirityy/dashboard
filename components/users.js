import React from 'react'

//data
import datausers from '../data/users.js'

export default class Users extends React.Component {
  constructor() {
    super()
    this.state =  { datausers:datausers }
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
                      <th>sex</th>
                      <th>operate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.datausers.map(function (user,i) {
                      return <User user={user} key={i} />
                    })}
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
  handleRemove(e) {
    if (window.confirm('是否删除'+ this.props.user.name +'?')) {
      alert(e.target.value);
    }
  }
  render() {
    return(
      <tr>
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.sex}</td>
        <td><button onClick={this.handleRemove.bind(this)} value={this.props.user.id}>delete</button></td>
      </tr>
    )
  }
}
