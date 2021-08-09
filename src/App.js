import React, {useState} from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript2', body: 'Description2'},
    {id:3, title: 'JavaScript3', body: 'Description3'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
