import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'

import StudentsList from './pages/StudentsList'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={StudentsList} />
    </Switch>
  )
}
