import { Box, Button } from '@material-ui/core'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import PostDetails from './PostDetails'
import Profile from './Profile'

const App = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Box sx={{p:2}}>
      <Button onClick={()=>navigate('/')} variant="contained">User list</Button>
      <Button onClick={()=>navigate('/post')} style={{margin:5}} variant="contained">Post</Button>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App
