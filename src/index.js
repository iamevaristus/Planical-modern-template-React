import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SupportHub from './views/support-hub'
import Error from './views/error'
import Home1 from './views/home1'
import HelpCenter from './views/help-center'
import Pricing from './views/pricing'
import SafetyGuidelines from './views/safety-guidelines'
import Newroom from './views/newroom'
import Request from './views/request'
import Business from './views/business'
import Provide from './views/provide'
import Blog from './views/blog'
import CountriesInSerch from './views/countries-in-serch'
import Careers from './views/careers'
import MarketPlace from './views/market-place'
import ComingSoon from './views/coming-soon'
import MediaAndAssets from './views/media-and-assets'
import LegalHub from './views/legal-hub'
import AboutUs from './views/about-us'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SupportHub} exact path="/support-hub" />
        <Route component={Error} exact path="/error" />
        <Route component={Home1} exact path="/home1" />
        <Route component={HelpCenter} exact path="/help-center" />
        <Route component={Pricing} exact path="/pricing" />
        <Route component={SafetyGuidelines} exact path="/safety-guidelines" />
        <Route component={Newroom} exact path="/newroom" />
        <Route component={Request} exact path="/request" />
        <Route component={Business} exact path="/business" />
        <Route component={Provide} exact path="/provide" />
        <Route component={Blog} exact path="/blog" />
        <Route component={CountriesInSerch} exact path="/countries-in-serch" />
        <Route component={Careers} exact path="/careers" />
        <Route component={MarketPlace} exact path="/market-place" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={MediaAndAssets} exact path="/media-and-assets" />
        <Route component={LegalHub} exact path="/legal-hub" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
