import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../assets/logo-erural.png';
import { setItem } from '../../utils/storage';
import './styles.css';

function EnterTheRoom() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name) {
            return;
        }


        setItem('userName', e.target.name.value);

        navigate('/main');
    }

    return (
        <div className='container'>
            <div className='container-welcome'>
                <img src={LogoImage} alt='Logo eRural' />
                <h1>Bem vindo(a) ao portal de vídeos da eRural</h1>
                <h2>A empresa que promove a <span>modernização</span> da pecuária brasileira</h2>
            </div>
            <div className='container-form'>
                <div className='content-form'>
                    <h4>Digite seu nome para entrar na sala de exibição</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder='Nome aqui...'
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button>ENTRE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnterTheRoom;