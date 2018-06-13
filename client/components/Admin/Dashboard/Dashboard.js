import React from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return <Link to="/admin/orders">Dashboard</Link>
  }
}

export default Dashboard
