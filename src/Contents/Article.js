import React,{Component} from 'react'
import {render} from 'react-dom'
import Detail from './detail'
import content_data from '../Fetch/content_data'
export default class Article extends Component{
  state={ 
    content:[]
  }

  componentDidMount(){
    content_data(data=>{
      let content=(data.data.news[0].content)
      this.setState({
        content:content
      })
      console.log(this.state.content)
    },
    this.props.match.params.id
    )
  }
  render(){
    return(
      <div>
        <Detail
          data={this.state.content}
        />
      </div>
    )
  }
}