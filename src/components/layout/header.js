import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav class="header navbar navbar-expand-lg navbar-light bg-light">
        .
        <div class="container">
          <a class="navbar-brand" href="#">
            Acme Staff Portal
          </a>
        </div>
      <div class="list">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
          <Link to="/">Home</Link>
          </li>
          &nbsp;&nbsp;
          <li class="nav-item">
          <Link to="/staff">staff</Link>
          </li>
          &nbsp;&nbsp;
          <li class="nav-item">
          <Link to="/setting">setting</Link>
          </li>
        </ul>
      </div>
      </nav>
    );
  }
}
