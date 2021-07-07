import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
	className?: string;
	style?: React.CSSProperties;
	color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
	text: string;
	size?: 'small' | 'medium' | 'large';
	type?: 'button' | 'reset' | 'submit';
	variant?: 'text' | 'outlined' | 'contained' | undefined;
}

const CustomButton: React.FC<Props> = (props: Props) => {
	return (
		<div>
			<Button
				className={props.className}
				style={props.style}
				color={props.color}
				size={props.size}
				type={props.type}
				variant={props.variant}
			>
				{props.text}
			</Button>
		</div>
	);
};

CustomButton.defaultProps = {
	color: 'primary',
	size: 'small',
	type: 'button',
	variant: 'contained',
};

export default CustomButton;
