import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SubNavbar from "./Components/Navbar/SubNavbar";
import ArticleContainer from "./Components/Forum/ArticleContainer";
import ArticleList from "./Components/Forum/ArticleList";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const menu = [
  { text: "Home", icon: "home", link: "/" },
  { text: "Dashboard", icon: "dashboard", link: "/dashboard" },
  { text: "My Class", icon: "school", link: "/classroom" },
  { text: "Forum", icon: "forum", link: "/topics" },
  { text: "Daily", icon: "today", link: "/daily" },
];

function App() {
  return (
    <div
      className="flex_ lightgreyBackground"
      style={{ height: "100vh", width: "100%" }}
    >
      <div style={{ width: 200 }}>
        <Navbar menu={menu} />
      </div>
      <div style={{ width: "100%" }}>
        <SubNavbar menu={menu} />
        <div
          className="lightgreyBackground"
          style={{ marginTop: 70, padding: 40 }}
        >
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/topics' history component={ArticleList} />
            <Route path='/topics/:id' component={ArticleContainer} />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
