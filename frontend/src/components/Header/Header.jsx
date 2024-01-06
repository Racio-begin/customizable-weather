import logo from '../../images/logo.png';

import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
	return (
		<header className="header">
			<img
				className="logo-icon"
				width={220}
				height={220}
				src={logo}
				alt="Логотип сайта"
			/>
			<Navbar></Navbar>
		</header>
	);
};

export default Header;