import React,{Component} from 'react'
import {render} from 'react-dom'

import Header from './Header'
import Banner from './Banner.jsx'

import Footer from './Footer'
import Content from './Content'
import home_data from '../Fetch/homepage_data'

class App extends Component {
  state = {
    newslist: [],
    banner: [],
    refresh:true,
    lastTS: new Date(),
    type:0
  };

  update(type){
    home_data(data => {
      let temp = type==1?data.data.list:data.data.news
      if (temp[0].pulltime) {
        this.state.lastTS = temp.reverse()[0].pulltime;
      }
      // console.log("cont_data",temp)
      let TT = []
      temp.map((key,index)=>{
        if(key.ts){
          TT.push(key)
        }
      })
      this.setState ({
        newslist: TT,
        banner: data.data.toppic
      });
      },
      0,
      type || "0"
    )
  }
  handleScroll(event){
    // console.log(event)
    var temp = event.target.scrollingElement
    var offset = temp.scrollHeight-temp.scrollTop-window.innerHeight
    if(offset<1){
      this.setState({
        refresh:false
      })
      this.loadMore()
    }
  }
  loadMore(){
     home_data(data => {
      let temp = this.state.type==1?data.data.list:data.data.news
      let TT = []
      if (temp[0].pulltime) {
        this.state.lastTS = temp[temp.length - 1].pulltime;
      }
      temp.map((key,index)=>{
        if(key.ts){
          TT.push(key)
        }
      })
      this.setState({
        newslist:this.state.newslist.concat(TT)
      })
    },
      this.state.lastTS,
      this.state.type || "0"      
    )
  }
  componentWillReceiveProps(nextProps){
    let type = nextProps.match.params.type;
    // console.log('upd')
    this.update(type)
    if (this.props.match.params.type != nextProps.match.params.type) {
      this.setState(
        {newslist: [], 
         banner_data:[],
         type:type
        });
    }
  }
  componentDidMount(){    
    window.addEventListener('scroll', this.handleScroll.bind(this))    
    this.update(this.props.match.params.type);
  }
  render() {
    return (
      <div 
        className="Container"
      >
        <Header/>
        <Banner
          banner_data = {this.state.banner}
        />
        <Content
          ref="Content_Con"
          news_list = {this.state.newslist}
          />
        <Footer/>
      </div>
    )
  }
}

export default App