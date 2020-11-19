import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Draft from './Draft/Draft'
import Drafts from './Drafts/Drafts'
import LandingPage from './LandingPage/LandingPage'
import Simulate from './Simulate/Simulate'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route exact path="/drafts/new" component={CreateDraft} /> */}
      <Route exact path="/drafts" component={Drafts} />
      <Route exact path="/simulate" component={Simulate} />
      {/* <Route exact path="/draft/:id" component={Draft} /> */}
      {/* <Route exact path="/draft/:id/edit" component={EditDraft} />
      <Route exact path="/simulate" component={SimulateDraft} />
      <Route exact path="/drafts/:id" component={ShowDraft} />
      <Route exact path="drafts/join" */}
    </Switch>
  )
}

export default App