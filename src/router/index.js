import React from 'react';
import { HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../home/index';
import Agency from '../agency/index';
const PageRoute =()=>(<HashRouter>
   <div>
       <Switch>
           <Route path='/home' component={Home}></Route>
           <Route path='/agency/:index' component={Agency}></Route>
           <Route path='/agency' component={Agency}></Route>
           <Redirect path="/" to="/home"/>
       </Switch>
   </div>
</HashRouter>)

export default PageRoute;