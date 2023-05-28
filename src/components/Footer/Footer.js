import { Link } from "react-router-dom";
import "./Footer.css";
import search from "../../img/search.svg";
import star from "../../img/star.svg";
import set from "../../img/settings.svg";

function Footer() {
  return (
    <footer className="footer__menu">
      <nav className="footer__menu">
        <Link to="/start" id="search" className="footer__menu-item">
          <img className="footer__item-logo" src={search} alt="Поиск" />
          <span className="footer__item-text">Поиск</span>
        </Link>
        <Link to="/popup" id="address" className="footer__menu-item">
          <img className="footer__item-logo" src={star} alt="Мои адреса" />
          <span className="footer__item-text">Мои адреса</span>
        </Link>
        <Link to="#" id="set" className="footer__menu-item">
          <img className="footer__item-logo" src={set} alt="Настройик" />
          <span className="footer__item-text">Настройки</span>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
