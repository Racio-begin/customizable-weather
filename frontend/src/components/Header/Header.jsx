import logo from '../../images/logo.png';

import './Header.css';

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
			HEADER
		</header>
	);
};

export default Header;