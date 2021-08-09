import React, {useState, useRef} from 'react';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript2', body: 'Description2'},
    {id:3, title: 'JavaScript3', body: 'Description3'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
