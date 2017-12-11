import React, {Component} from 'react'
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Content extends Component {
  state={
    newsList:{},
    Content:[]
  }
  componentWillReceiveProps(nextProps){
    // console.log('news',nextProps)
    let Content = nextProps.news_list.map((key,index)=>{
      
      return(   
        this.generateItem(key,index)
      )
    })
    this.setState({
      Content:Content
    })
  }
  generateItem(item,key){
    switch(item.imageurls.length){
      case 1:
        return(
          <Link to={'/content/'+item.nid}
            key={key}
            href={item.url}       
          >
            <div
              className='Content_Container' 
            >                        
            <img 
              className='Content_img1'
              src={item.imageurls[0].url}
            />
            <p
              className='Content_cont1'
            >
              {item.title}
            </p>
          </div>
        </Link>
        )
        break;
        default:
          return(
          <Link to={'/content/'+item.nid}
              key={key}
              href={item.url}       
            >
            <div
              className='Content_Container' 
            >
              <p
                className='Content_cont2'
              >
                {item.title}
              </p>
              {
                item.imageurls.map((con,index)=>{
                  return(
                    <img 
                    className='Content_img2'
                    key={index}
                    src={con.url}
                  />  
                  )
                })
              }
            </div>
          </Link>
          )
        break;
    }
  }
  render(){
    return(
      <div 
        className="Content_Wrapper"
      >
        {this.state.Content}
      </div>
    )
  }
}