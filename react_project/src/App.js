import React, {useMemo, useRef, useState} from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCouner';
import './styles/app.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import { use } from 'react';


function App() {
  const [posts, setPosts] = useState ([
    {id: 1, title: 'aa', body: 'rr'},
    {id: 2, title: 'ff 2', body: 'hh'},
    {id: 3, title: 'bb 3', body: 'nn'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts (posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
 

  return (
    <div className="App">
      <PostForm create={createPost}/>

      <hr style = {{margin: '15px 0'}}/>

      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>

      {sortedAndSearchedPosts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
        : 
        <h1 style={{textAlign: "center"}}> 
          Посты не найдены! 
        </h1>
      }
    </div>
  );
}

export default App;
