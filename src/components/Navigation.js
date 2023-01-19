import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {

  return (
    <nav>
      <div className='nav__brand'>
        <img src={logo} alt='Logo' />
        <h1>ETH Daddy</h1>
        <ul className='nav__links'>
          <li><a href='/'>Domain Names</a></li>
          <li><a href='/'>Website & Hosting</a></li>
          <li><a href='/'>Commerce</a></li>
          <li><a href='/'>Email & Marketing</a></li>
        </ul>
      </div>
      <button
        type='button'
        className='nav__connect'
      >
        {account.slice(0, 6) + '...' + account.slice(38, 42)}
      </button>
    </nav>
  );
}

export default Navigation;