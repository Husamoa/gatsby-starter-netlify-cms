import React from 'react'
import { Link } from 'gatsby'
import facebookWhite from '../img/social/facebook1.svg'
import facebookBlack from '../img/social/facebook.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavOnScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavOnScroll());
  }


  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  hideNavOnScroll = () => {
    let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("custom-nav").style.top = "0";
      } else {
        document.getElementById("custom-nav").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  render() {
    return (
      <nav
        id="custom-nav"
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <p className="has-text-weight-bold has-text-white-ter">Tenis Stołowy Dźwiękowy</p>
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered has-text-white-ter">
              <Link className="navbar-item" to="/about">
                O nas
              </Link>
              <Link className="navbar-item" to="/blog">
                Aktualności
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>

              <Link className="navbar-item" to="/video">
                Video
              </Link>

              <Link className="navbar-item" to="/contact/examples">
                Dla mediów
              </Link>
              <Link className="navbar-item" to="fundation">
                Fundacja TSD
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="facebook-icon"
                href="https://www.facebook.com/dzwiekowy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={this.state.active ? facebookBlack : facebookWhite} alt="Facebook" />
                </span>
              </a>
            </div>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar
