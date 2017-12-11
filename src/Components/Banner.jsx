import React, {Component} from 'react';
import { render } from "react-dom";
import ReactSwipe from 'react-swipe'

export default class Banner extends Component {
  state = {
    swipeOptions:{
      startSlide: 0,
      autoPlay: true,       
      auto: 300,
      continous:true
    },
    Content:[]
  }
  componentDidMount(){
    this.setState({
      style: {
      }
    })
  }
  componentWillReceiveProps(nextProps){
    let content = nextProps.banner_data==null?"":
      nextProps.banner_data.map((key,i) =>{
        return(
          <a 
            key={i} 
            href={key.display_url}
          > 
            <img 
              className="Banner_Img"
              src={key.imageurls[0].url}
              style={{width:'100%'}}
            />
            <p className='Banner_Title'>{key.title}</p>
          </a>
          )
        })
    this.setState({
      Content: content
    })
  }

  render() {
    const data = this.props.banner_data
    // console.log(this.state.Content)
    // data.length!=0?0:data.length
    
    return this.state.Content.length == 0
    ? <div/>
    : <ReactSwipe 
        className="swipe"
        swipeOption={this.state.swipeOptions}
        >
          {this.state.Content}
        </ReactSwipe>;
  }
}
