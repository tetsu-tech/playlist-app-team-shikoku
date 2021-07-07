import React from 'react';
import { Card, CardContent } from '@material-ui/core';

interface Props {
	className?: string;
	key?: number;
	videoSrc: string;
	videoTitle: string;
}

const CustomCard: React.FC<Props> = (props: Props) => {
	return (
		<div>
			<Card className={props.className}>
				<CardContent>{props.videoSrc}</CardContent>
				<CardContent>{props.videoTitle}</CardContent>
			</Card>
		</div>
	);
};

export default CustomCard;
