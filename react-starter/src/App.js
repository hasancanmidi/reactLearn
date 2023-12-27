import { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
function App() {
  // Backend bağlantısı - http isteği
  // bağlantı sonucu gelen değeri ekranda göstermek
  // componentler arası veri iletişimi
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])


  // es6
  const fetchItems = async () => {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => { console.log(response) })
    //   .catch((error) => { console.log(error) })
    //   .finally(() => { console.log("async işlem bitti") });

    try {
      let response = await PostService.getAll();
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }

  }

  const removePost = (id) => {
    setPosts(posts.filter(i => i.id !== id));
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;