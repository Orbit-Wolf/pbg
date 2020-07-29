import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

import Home from "./pages/home/home"


function Router() {
 return (
     <BrowserRouter>
         <Switch>

             <Route path="/" exact component={Home} />
         </Switch>
     </BrowserRouter>
 )
}
export default Router
