import React, {useState, useRef, useMemo, useEffect} from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/modal/MyModal';
import MySelect from './components/UI/select/MySelect';
import axios from 'axios';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }





  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  //Получает post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  

  return (
    <div className="App">

      

      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
