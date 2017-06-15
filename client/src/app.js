import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Main from './containers/Main'


window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')
  
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route path='/main' component={Main} />
        <Route exact path='/' component={Main} />
      </div>
    </HashRouter>, targetDiv)


})
