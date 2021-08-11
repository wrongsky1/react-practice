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
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false)


  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout( async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)
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
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
          
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
      }
      
    </div>
  );
}

export default App;
