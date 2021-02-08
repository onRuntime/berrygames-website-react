import React from 'react';
import I18n from '../I18n';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                © 2020 <a href="//berrygames.net">BerryGames</a>. <I18n t="main.copyright" />
            </div>
        )
    }
}

export default Footer;