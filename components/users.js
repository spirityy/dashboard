import React from 'react'
import { Link } from 'react-router'
//import $ from 'jquery'

//import component style
import '../assets/css/user.css'

//import simulate data
import datausers from '../data/users.js'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers:datausers,
      PagerUsers:[],
      perPageNum:5,
      lastNum:1
    }
  }
  componentWillMount() {
    this.buildPager()
  }
  componentWillReceiveProps(props) {
    this.buildPager(props.location.query)
  }
  buildPager(q) {
    this.state.lastNum = this.state.allUsers.length%this.state.perPageNum === 0? this.state.allUsers.length/this.state.perPageNum:parseInt(this.state.allUsers.length/this.state.perPageNum,10)+1
    let query  = q || this.props.location.query
    let cur_datausers = []
    const lastNum = this.state.lastNum
    const perPageNum = this.state.perPageNum
    //if has query
    if(query && query.p) {
      const pageNum = parseInt(query.p,10)
      //last page
      if(pageNum === lastNum) {
        if(this.state.allUsers.length%perPageNum===0) {
          cur_datausers = this.state.allUsers.slice(perPageNum*(pageNum-1),perPageNum*(pageNum-1)+perPageNum)
        } else {
          cur_datausers = this.state.allUsers.slice(perPageNum*(pageNum-1),perPageNum*(pageNum-1)+this.state.allUsers.length%perPageNum)
        }
      } else {
        cur_datausers = this.state.allUsers.slice(perPageNum*(pageNum-1),perPageNum*pageNum)
      }
    } else {
      //non page query
      cur_datausers = this.state.allUsers.slice(0,perPageNum)
    }
    this.setState({ PagerUsers:cur_datausers })
    //console.info(this.state)
  }
  editUser(user) {
    //updated User
    const updateUser = {
      id:user.uid,
      name:user.uname,
      age:user.uage,
      sex:user.usex
    }
    this.state.allUsers[this.state.allUsers.findIndex(data => data.id === user.uid)] = updateUser
    //ending editing
    user.setState({ editing:false })
    //update parent data
    this.setState({ allUsers:this.state.allUsers })
    this.buildPager()
  }
  deleteUser(e) {
    //delete User
    if (window.confirm('确定删除'+e.target.name+'?')) {
      this.state.allUsers.splice(this.state.allUsers.findIndex(data => data.id === parseInt(e.target.value,10)),1)
      this.setState({ allUsers:this.state.allUsers })
      this.buildPager()
    }
  }
  render() {
    const pages = []
    for (var i=0; i < this.state.lastNum; i++) {
      pages.push(i+1)
    }
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
                    {this.state.PagerUsers.map(function (user,i) {
                      return <User user={user} key={i} deleteUser={this.deleteUser.bind(this)} editUser={this.editUser.bind(this)}/>
                    }.bind(this))}
                  </tbody>
                </table>
                <div className="pager">
                    {pages.map(function (p,i) {
                      return <Link key={i} to={{ pathname:'/users',query:{ p:p } } }>{p}</Link>
                    }.bind(this))}
                </div>
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
    this.initData()
    this.state =  { editing:false }
  }
  initData() {
    this.uid = this.props.user.id
    this.uname = this.props.user.name
    this.uage = this.props.user.age
    this.usex = this.props.user.sex
  }
  editing() {
    this.initData()
    this.setState({ editing:true })
  }
  HandleChange(e) {
    this[e.target.name]=e.target.value
  }
  render() {
    return(
      <tr>
        <td>
          {this.props.user.id}
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
