import logo from '../../images/logo.svg';
import './footer.css';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <h5>Copyright { year }. Powered by Typescript and React <img className='footer-logo' src={ logo } height="50" alt="No pic"/></h5>
        </footer>
    )
}

export default Footer;