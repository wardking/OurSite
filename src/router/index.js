import React from 'react';
import { HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../home/index';
import Agency from '../agency/index';
import NormalAgency from '../normal-agency/index';//普通  层层代理
const PageRoute =()=>(<HashRouter>
   <div>
       <Switch>
           <Route path='/home' component={Home}></Route>
           <Route path='/agency/:index' component={Agency}></Route>
           <Route path='/agency' component={Agency}></Route>
           <Route path='/normal-agency' component={NormalAgency}></Route>
           <Redirect path="/" to="/home"/>
       </Switch>
   </div>
</HashRouter>)

export default PageRoute;
