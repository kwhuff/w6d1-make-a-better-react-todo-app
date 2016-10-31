import React, { Component } from 'react'//every component you make will have this line of code on top of it
//THIS IS THE TEMPLATE FOR HOW YOUR DATA IS OUTPUT.  YOU BUILD THIS TEMPLATE IN HTML PAGE.
const Post = (props) => (
  <div className='post'>
      <img src={props.data.image} alt={props.data.title} />
      <h3>{props.data.title}</h3>
      <p className='lead'>
        Published On {props.data.date} at {props.data.time}
      </p>
      <p>
        {props.data.body}
      </p>
      <span className='small'>Author: {props.data.author}</span>
    </div>
)

export default Post
