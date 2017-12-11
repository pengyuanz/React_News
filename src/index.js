import React from 'react'
import {render} from 'react-dom'
import App from './Components/App'
import Article from './Contents/Article'
import { HashRouter as Router, Route } from "react-router-dom";

render(
  // <HelloMsg name='React'/>,
  <App/>,  
  render(
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/list/:type" component={App} />
            <Route path="/content/:id" component={Article} />
            {/* <Route path="/comment/:id" component={Comment} /> */}
        </div>
    </Router>,
    document.getElementById("root") 
  )
)

