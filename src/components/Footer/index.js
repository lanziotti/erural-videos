import './styles.css';
import MiniLogo from '../../assets/logo-mini-erural.png';
import RegisterIcon from '../../assets/registrado.png';

function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={MiniLogo} alt='Logo E-Rural' />
            </div>
            <div className='footer-text'>
                <p>Todos os direitos reservados a Rodrigo Lanziotti</p>
                <img src={RegisterIcon} alt='registro' />
            </div>
        </footer>
    );
}

export default Footer;