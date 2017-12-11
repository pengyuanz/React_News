import React, {Component} from 'react'
import name from '../data/nav'
import { Link } from "react-router-dom";

export default class Header extends Component{
  state={
    list:name.name,
    title:[]
  }
  clickHandler(e){
    // console.log(e)
  }
  componentWillMount(){
    let title = name.name.map((key,index)=>{
      return(
        <li
          className='Nav_Item'
          key={index}
          // onClick={this.clickHandler.bind(this)}
        >
          <Link to={key=="推荐"?'':'/list/'+index}>{key}</Link>
        </li>
      )
    })
    this.setState({
      title:title
    })
  }

  render(){
    return(
      <div
        className='Nav_Container'
      >
        <div className="Logo">

        </div>
        <ul
        >
          {this.state.title}
        </ul>
      </div>
    )
  }
}