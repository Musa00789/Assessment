import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
