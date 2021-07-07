import React from 'react';
import CustomCard from '../../atoms/CustomCard/index';
import { styles } from './styles';

const VideCard: React.FC = () => {
	const classes = styles();

	const tests = [
		{
			src: 'src1',
			title: 'title1',
		},
		{
			src: 'src2',
			title: 'title2',
		},
		{
			src: 'src3',
			title: 'title3',
		},
		{
			src: 'src4',
			title: 'title4',
		},
		{
			src: 'src5',
			title: 'title5',
		},
	];

	const test = {
		title: 'ss',
		src: 'fnal',
	};

	console.log(test);

	return (
		<div className={classes.cards}>
			{tests.map((test) => (
				// eslint-disable-next-line react/jsx-key
				<CustomCard
					className={classes.card}
					videoSrc={test.src}
					videoTitle={test.title}
				/>
			))}
		</div>
	);
};

export default VideCard;
