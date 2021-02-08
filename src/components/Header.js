import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-i18n";
import I18n from "../I18n";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { langToggled: false };
  }

  languageHandler = (e) => {
    e.preventDefault();
    this.setState({ langToggled: !this.state.langToggled });
    console.log(this.state.langToggled);
  };

  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        locale: PropTypes.string,
      }).isRequired,
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired,
  };

  stripLocale = (pathname, locale) => {
    if (!locale) {
      return pathname;
    }

    return pathname.replace(`/${locale}`, '');
  };

  render() {
    const { match, location } = this.props
    const pathname = location.pathname
    const locale = match.params.locale

    return (
      <div className="header container-fluid">
        <div className="section section-website">
          <h1 className="website">
            <Link to="/">BerryGames</Link>
          </h1>
          <div className="online-players">
            <span>•</span> 50 <I18n t="main.onlinePlayers" />
          </div>
        </div>
        <div className="section logo">
          <Link to="/">
            <img
              src="//cdn.berrygames.net/img/logo/logo.png"
              alt=""
              width={18}
            />
          </Link>
        </div>
        <div className="section">
          <div className="terms">
            <Link onClick={this.languageHandler} to="/lang">
              <I18n t="main.route.language" />
            </Link>
            {this.state.langToggled ? (
              <div className="language-dropdown">
                <Link ignoreLocale to={`/en${this.stripLocale(pathname, locale)}`}>English</Link>
                <br />
                <Link ignoreLocale to={`/fr${this.stripLocale(pathname, locale)}`}>Français</Link>
              </div>
            ) : null}
            <span>•</span>
            <Link to="/rules">
              <I18n t="main.route.rules" />
            </Link>
            <span>•</span>
            <Link to="/tos">
              <I18n t="main.route.tos" />
            </Link>
          </div>
          <div className="social">
            <a href="//facebook.com/BerryGamesMC" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill" />
            </a>
            <a href="//twitter.com/BerryGamesMC" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill" />
            </a>
            <a href="//youtube.com/channel/UClM6wO9PB2hylU7sl5bnJNg?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <i className="ri-youtube-fill" />
            </a>
            <a href="//twitch.tv/berrygamesmc" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitch-fill" />
            </a>
            <a href="//instagram.com/berrygamesmc" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill" />
            </a>
            <a href="//snapchat.com/add/berrygamesmc" target="_blank" rel="noopener noreferrer">
              <i className="ri-snapchat-fill" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
