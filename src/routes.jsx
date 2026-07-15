import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/services',
    element: <Layout><Services /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><Projects /></Layout>,
  },
  {
    path: '/products',
    element: <Layout><Products /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>,
  },
])

export default router
