import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Contact from './pages/Contact'


// PAGE MỚI
import Pricing from './pages/Pricing'
import News from './pages/News'
import ServiceDetail from './pages/ServiceDetail'


const router = createBrowserRouter([

  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },


  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },


  {
    path: '/services',
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },


  {
    path: '/services/:slug',
    element: (
      <Layout>
        <ServiceDetail />
      </Layout>
    ),
  },


  {
    path: '/projects',
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },


  {
    path: '/products',
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },


  {
    path: '/pricing',
    element: (
      <Layout>
        <Pricing />
      </Layout>
    ),
  },


  {
    path: '/news',
    element: (
      <Layout>
        <News />
      </Layout>
    ),
  },


  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },


])


export default router