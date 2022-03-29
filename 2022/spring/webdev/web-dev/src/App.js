import React from "react";
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import '../src/components/tuiter/ExploreScreen/explore.css'
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Tuiter from "./components/tuiter/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotificationScreen from "./components/tuiter/notifications";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index
                     element={<Labs/>}/>
              <Route path="labs"
                     element={<Labs/>}/>
              <Route path="hello"
                     element={<HelloWorld/>}/>
              <Route path="tuiter"
                     element={<Tuiter/>}>
                <Route index
                       element={<HomeScreen/>}/>
                <Route path="explore"
                       element={<ExploreScreen/>}/>
                <Route path="notifications"
                       element={<NotificationScreen/>}/>

              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>



  );
}

export default App;
