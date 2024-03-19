import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostsList } from '../pages/PagePostsList';
import { PostDetails } from '../pages/PagePostDetails';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={PostsList} />
        <Route path="/post/:id" Component={PostDetails} />
      </Routes>
    </div>
  );
}

export default App;
