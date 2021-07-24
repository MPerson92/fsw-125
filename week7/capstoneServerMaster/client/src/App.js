import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import Star from './components/Star';
import StarFormHandler from './components/StarFormHandler';

function App() {
  const [stars, setStars] = useState([]);

  const getStars = () => {
    axios.get('/stars')
      .then(res => setStars(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  };

  const addStar = (newStar) => {
    axios.post('/stars', newStar)
      .then(res => {
        setStars(prevStars => [...prevStars, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteStar = (starId) => {
    axios.delete(`/stars/${starId}`)
      .then(res => {
        setStars(prevStars => prevStars.filter(star => star._id !== starId))
      })
      .catch(err => console.log(err))
  }

  const editStar = (updates, starId) => {
    axios.put(`/stars/${starId}`, updates)
      .then(res => {
        setStars(prevStar => prevStar.map(star => star._id !== starId ? star : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getStars();
  }, []);

  const starList = stars.map(star => 
    <Star {...star} 
      deleteStar={deleteStar}
      editStar={editStar}
      key={star.firstName}/>)

  return (
    <div className="star-container">
      <StarFormHandler 
        btnText='Add Star'
        submit={addStar}/>
      {starList}
    </div>
  );
}

export default App;
