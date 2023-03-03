import React, {useState} from 'react'

export const CreatePost = ({user, setPosts, posts}) => {

  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event){
    event.preventDefault();
    const post = {content, image, user};
    const newPost = [post, ...posts];
    setPosts(newPost);
    setContent("");
    imageInputRef.current.value =""
  }
  return (
    <div>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>

            <input
            onChange={(event) => setContent(event.target.value)}
            type='text'
            placeholder='Add your post'
            value={content}
            />

            <input
            type='file'
            onChange={(event) => setImage(event.target.files[0])}
            ref ={imageInputRef}
            />
        <button type='submit'>Submit Post</button>
        </form>
    </div>
  )
}
