import React from 'react';
import {useState, useEffect} from 'react';
import { Login } from './Components/Login';
import { Header } from './Components/Header';
import { CreatePost } from './Components/CreatePost';
import { PostList } from './Components/PostList';


function App() {
  
  const [user, setUser] = useState("shiv");
  const [posts, setPosts] = useState([]);
  

  useEffect(() =>{
    document.title = user ? `${user}'s feed`:"Please login"
  },[user]);

  if(!user){
    return <Login setUser = {setUser}/>
  }
  return (
    <div> 
    <Header user = {user} setUser ={setUser}/>
    <CreatePost user ={user} setPosts ={setPosts} posts ={posts}/>
    <PostList posts = {posts} />
    </div>
  );
}

export default App;
