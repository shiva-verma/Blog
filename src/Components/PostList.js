import React from 'react'
import { Post } from './Post'

export const PostList = ({posts}) => {
  return posts.map((post, i) => (<Post key={i} post = {post}/>));
}
