import './styles.css';
import LogoImage from '../../assets/logo-erural.png';
import LogoutIcon from '../../assets/logout.png';
import { useNavigate } from 'react-router-dom';
import { clear, getItem } from '../../utils/storage';

function Header() {
    const navigate = useNavigate();
    const userName = getItem('userName')

    function handleLogout() {
        clear();
        navigate('/');
    }

    return (
        <header>
            <div className='content-header'>
                <img src={LogoImage} alt='Logo E-Rural' />
                <h1>Vídeos</h1>
            </div>
            <div className='content-logout'>
                <span>{`Bem vindo, ${userName}`}</span>
                <img
                    src={LogoutIcon}
                    alt='Logout'
                    onClick={handleLogout}
                />
            </div>
        </header>
    );
}

export default Header;