import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Chats } from "./components/Chats";

import { TinderCards } from "./components/TinderCard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header */}

      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* Main Section */}
      {/* Footer */}
    </div>
  );
}

export default App;
