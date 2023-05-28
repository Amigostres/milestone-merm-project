import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Discover from "./views/discover";
import TopRated from "./views/TopRated";
import Upcoming from "./views/Upcoming";
import Profile from "./views/profile";
import Details from "./views/details";

function App() {
  return (
      <Router>
        <Container className="navbar navbar-expand-sm bg-dark navbar-light sticky-top">
          <div className="container-fluid">
            <Nav>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/">Discover</Link>
                </Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/TopRated">TopRated</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/Upcoming">Upcoming</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/profile">View Profile</Link>
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
          </div>
        </Container>

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:movie_id" element={<Details />} />
        </Routes>
      </Router>
  );
}

export default App;
