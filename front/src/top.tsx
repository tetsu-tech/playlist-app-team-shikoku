import React from 'react';
import Header from './components/organisms/Header';
import VideCard from './components/organisms/VideoCard';
import { styles } from './styles';

const PageTop: React.FC = () => {
	const classes = styles();

	return (
		<div className={classes.top}>
			<Header />
			<div className={classes.cardTop}>
				<VideCard />
			</div>
		</div>
	);
};

export default PageTop;
