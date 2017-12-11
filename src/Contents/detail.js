import React,{Component} from 'react'
import {render} from 'react-dom'

export default class Detail extends Component{
  state={
    item:[]
  }
  componentWillReceiveProps(nextProps){
    this.update(nextProps.data)
  }
  update(data){
    let item = data.map((key,index)=>{
      console.log(key.type)
      return(
        key.type=='text'?
        <p
         className='Article_text'
         key={index}>
          {key.data}
        </p>
        :
        <img
          className='Article_img'
          src={key.data.small.url}
        />
      )
    })
    this.setState({
      item:item
    })
  }
  render(){
    return(
      <div 
        className='Article_Wrapper'
      >
        {this.state.item}
        <div>
          更多精彩
        </div>
      </div>
    )
  }
}