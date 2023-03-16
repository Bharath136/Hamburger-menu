import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/" className="home-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="model-container">
        <Popup
          modal
          trigger={
            <button
              className="trigger-button"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu size="26" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <>
              <div className="close-button-container">
                <button
                  type="button"
                  className="close trigger-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose size="26" />
                </button>
              </div>
              <ul className="list-content">
                <li className="list-item">
                  <Link to="/" className="link-item" onClick={() => close()}>
                    <AiFillHome size="36" color="rgb(54, 52, 52)" />
                    <h1 className="nav-tab">Home</h1>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    to="/about"
                    className="link-item"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill size="36" color="rgb(54, 52, 52)" />
                    <h1 className="nav-tab">About</h1>
                  </Link>
                </li>
              </ul>
            </>
          )}
        </Popup>
      </div>
    </div>
  </div>
)

export default withRouter(Header)
