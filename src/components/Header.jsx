import {Link} from 'react-router-dom';
const Header = () => {
	return(
		<div className="header">
		<div className="bar">
		<div className="logo"><Link to='/'>LightUI</Link></div>
		<div className="otherele">
		<p><Link to='/about'>About Us</Link></p>
		<p>Contact Us</p>
		</div>
		</div>
		</div>

	)	

}
export default Header;
