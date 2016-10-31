import React, { Component } from 'react'
import Post from './Post'
//do not need to import ReactDOM here.

const Posts = (props) => {//Posts is a function here.
  const PostItems = props.data.map((post, i) => {
    return <Post data={post} key={i} />//optimization for React.  You just have to do this {i}.
  })
  console.log(PostItems)
  return <div>
    <h1>Blog Posts</h1>
    {PostItems}
  </div>
}

export default Posts
