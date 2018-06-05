import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'


const App = () => {
  return (
    <Layout>
      <Navbar />
      <Routes />
    </Layout>
  )
}

export default App
