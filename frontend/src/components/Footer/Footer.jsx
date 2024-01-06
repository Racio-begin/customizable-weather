import './Footer.css';

import {
	MY_GITHUB,
	YANDEX_URL,
} from '../../utils/links';

function Footer() {

	const setCurrentYear = () => {
		return new Date().getFullYear()
	};

	return (
		<footer className="footer">

			<div className="footer__container">

				<p className="footer__title footer__text-style">
					&nbsp;Никита&nbsp;Аверьянов
				</p>

				<p className="footer__copyright footer__text-style">
					© 2023-{setCurrentYear()}
				</p>

			</div>

			<a
				className="footer__link footer__text-style link"
				href={MY_GITHUB}
				lang="en"
				target="_blank"
				rel="noreferrer"
			>Github
			</a>

		</footer>
	);
};

export default Footer;