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
    //console jquery
    console.info($)
  }
  editUser(user) {
    //updated User
    const updateUser = {
      id:user.uid,
      name:user.uname,
      age:user.uage,
      sex:user.usex
    }
    this.state.datausers[this.state.datausers.findIndex(data => data.id === user.uid)] = updateUser
    //ending editing
    user.setState({ editing:false })
    //update parent data
    this.setState({ datausers:this.state.datausers })
  }
  deleteUser(e) {
    //delete User
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
                      <th width="15%">id</th>
                      <th width="20%">name</th>
                      <th width="20%">age</th>
                      <th width="20%">sex</th>
                      <th width="25%">operate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.datausers.map(function (user,i) {
                      return <User user={user} key={i} deleteUser={this.deleteUser.bind(this)} editUser={this.editUser.bind(this)}/>
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
  constructor(props) {
    super(props)
    this.uid = this.props.user.id
    this.uname = this.props.user.name
    this.uage = this.props.user.age
    this.usex = this.props.user.sex
    this.state =  { editing:false }
  }
  editing() {
    this.setState({ editing:true })
  }
  HandleChange(e) {
    this[e.target.name]=e.target.value
  }
  render() {
    return(
      <tr>
        <td>
          {this.state.editing?(<input type="text" name="uid" defaultValue={this.props.user.id} onChange={this.HandleChange.bind(this)}/>):this.props.user.id}
        </td>
        <td>
          {this.state.editing?(<input type="text" name="uname" defaultValue={this.props.user.name} onChange={this.HandleChange.bind(this)} />):this.props.user.name}
        </td>
        <td>
          {this.state.editing?(<input type="text" name="uage" defaultValue={this.props.user.age} onChange={this.HandleChange.bind(this)} />):this.props.user.age}
        </td>
        <td>
          {this.state.editing?(
            <select name="usex" defaultValue={this.props.user.sex} onChange={this.HandleChange.bind(this)}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          ):this.props.user.sex}
        </td>
        <td>
          {this.state.editing?(
            <button className="editing-btn" onClick={this.props.editUser.bind(null,this)}>edit ok</button>
          ):(
            <span>
              <button className="edit-btn" onClick={this.editing.bind(this)}>edit</button>
              <button className="del-btn" onClick={this.props.deleteUser} name={this.props.user.name} value={this.props.user.id}>delete</button>
            </span>
          )}
        </td>
      </tr>
    )
  }
}
