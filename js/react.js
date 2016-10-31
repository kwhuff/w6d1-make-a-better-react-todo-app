//These are loading other libraries.  Think of them as script tags.  The red words on the left are variables we created.
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

//function below re-renders the page.  you'd call this after making changes.
window.renderView = function(data){
  ReactDOM.render(//can only mount a single component with this function, as on next line
    <Posts data={data} />,//invalid JS code.  Babel reads this and converts to valid JS.
    document.getElementById('posts'))//where to put 'data'.  must be connected to an id (posts)
}

renderView(posts)
