import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";
import AddFolder from "../AddFolder/AddFolder";
import AddSession from "../AddSession/AddSession";
import MainNav from "../MainNav/MainNav";
import UserHome from "../UserHome/UserHome";
import Landing from "../Landing/Landing";
import SessionDetail from "../SessionDetail/SessionDetail";
import EditSession from "../EditSession/EditSession";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      folders: [],
    };
  }



  // handleAddFolder(folder) {
  //   this.setState({
  //     folders: [...this.state.folders, folder],
  //   });
  // }

  // handleAddSession(session) {
  //   this.setState({
  //     sessions: [...this.state.sessions, session],
  //   });
  // }

  // handleDeleteSession(sessionId) {
  //   this.setState({
  //     sessions: this.state.sessions.filter(
  //       (session) => session.id !== sessionId
  //     ),
  //   });
  // }

  // handleDeleteFolder(folderId) {
  //   this.setState({
  //     folders: this.state.folders.filter((folder) => folder.id !== folderId),
  //   });
  // }

  renderMainRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={UserHome} />
        ))}
        <Route path="/landing" component={Landing} />
        <Route path="/session/:sessionId" component={SessionDetail} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-session" component={AddSession} />
        <Route path="/edit-session" component={EditSession} />
      </>
    );
  }

  render() {
    const value = {
       sessions: this.state.sessions,
       folders: this.state.folders,
    //   addFolder: this.handleAddFolder,
    //   addSession: this.handleAddSession,
    //   deleteSession: this.handleDeleteSession,
    //   deleteFolder: this.handleDeleteFolder,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App_nav">
            <MainNav/>
          </nav>
          <header className="App_header">
            <h1>
              <Link to="/">SK9</Link>{" "}
            </h1>
            <h2>Search and Rescue K9 Training Journal</h2>
          </header>
          <main className="App_main">{this.renderMainRoutes()}
          </main>
          <footer role="content-info">Footer</footer>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
