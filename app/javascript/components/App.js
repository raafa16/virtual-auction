import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Draft from './Draft/Draft'
import Drafts from './Drafts/Drafts'
import LandingPage from './LandingPage/LandingPage'
import Simulate from './Simulate/Simulate'
import CreateDraft from './Draft/CreateDraft'
import EditDraft from './Draft/EditDraft'

const App = () => {
  return (
    <Switch>
      {/* Root */}
      <Route exact path="/" component={LandingPage} />
      {/* Drafts Start */}
      <Route exact path="/drafts" component={Drafts} />
      <Route exact path="/drafts/create" component={CreateDraft} />
      <Route exact path="/draft/:id" component={Draft} />
      <Route exact path="/draft/:id/edit" component={EditDraft} />
      {/* Drafts End */}

      {/* Simulate */}
      <Route exact path="/simulate" component={Simulate} />
      {/* <Route exact path="drafts/:id/join" /> */}
    </Switch>
  )
}

export default App