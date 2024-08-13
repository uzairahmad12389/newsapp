import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  handleCountryChange = (event) => {
    this.props.onCountryChange(event.target.value);
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <div className="d-flex">
                <select className="form-select" onChange={this.handleCountryChange}>
                  <option value="us">United States</option>
                  <option value="in">India</option>
                  <option value="gb">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="jp">Japan</option>
                  <option value="cn">China</option>
                  <option value="it">Italy</option>
                  <option value="ru">Russia</option>
                  <option value="br">Brazil</option>
                  <option value="za">South Africa</option>
                  <option value="mx">Mexico</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
