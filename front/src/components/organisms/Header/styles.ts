import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			marginTop: theme.spacing(4),
			marginLeft: theme.spacing(2),
			fontSize: '20px',
		},
		title: {
			float: 'left',
			margin: 0,
		},
		button: {
			float: 'right',
			display: 'flex',
			flexDirection: 'row',
		},
		signInButton: {
			marginRight: theme.spacing(2),
		},
		signUpButton: {
			marginRight: theme.spacing(2),
		},
	})
);
