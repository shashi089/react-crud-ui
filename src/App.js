import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import EditUser from "./components/EditUser";
import EditProfile from "./components/EditProfile";
import CreateNewProfile from "./components/CreateNewProfile";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav  d-flex p-3">
          <p className="">CRUD UI</p>
          <div className="ml-auto mr-5">
            <NavLink className="linkname mr-3" to="/">
              Home
            </NavLink>
            <NavLink className="linkname" to="/createnewprofile">
              Add Profile
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/edituser/:id" component={EditUser} />
          <Route path="/editprofile/:id" component={EditProfile} />
          <Route path="/createnewprofile" component={CreateNewProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
