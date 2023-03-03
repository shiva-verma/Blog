import React from 'react'

export const Post = ({post, key}) => {
  return (
      <>
       {post.image &&  (
       <img
         style={{height: 200, width: 200, objectFit: "cover"}}
         src ={URL.createObjectURL(post.image)}
       />
       )}
       <p>{post.content}</p>
       <h2>{post.user}</h2>
    </>
  )
}
