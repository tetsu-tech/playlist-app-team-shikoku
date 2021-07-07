import React from 'react';
import CustomButton from '../../atoms/CustomButton';
import { styles } from './styles';

const Header: React.FC = () => {
	const classes = styles();
	return (
		<div className={classes.header}>
			<p className={classes.title}>Hall of Fame Vidz</p>
			<div className={classes.button}>
				<CustomButton
					className={classes.signInButton}
					text="SIGN IN"
					color="inherit"
				></CustomButton>
				<CustomButton
					className={classes.signUpButton}
					text="SIGN UP"
					color="primary"
				></CustomButton>
			</div>
		</div>
	);
};

export default Header;
