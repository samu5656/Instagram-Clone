import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Stories from './Stories.jsx'
import View_story from './view_story.jsx'
import Profile from './profile.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/stories/:id/:tot',
      element:<View_story/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
