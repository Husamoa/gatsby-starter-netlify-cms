import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-tsd.jpg'
import facebookWhite from '../img/social/facebook1.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="custom-footer" className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Tesnis Stołowy Dźwiękowy"
            style={{ height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Strona domowa
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        O nas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Formularz kontaktowy
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Aktualności
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <a title="facebook" href="https://www.facebook.com/dzwiekowy/">
                        <img
                          src={facebookWhite}
                          alt="Facebook"
                          style={{ width: '1em', height: '1em' }}
                        />
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">

              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
