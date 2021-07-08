import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme: Theme) =>
	createStyles({
		cards: {
			position: 'absolute',
			top: theme.spacing(10),
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
		card: {
			width: '350px',
			marginTop: theme.spacing(2),
			marginLeft: theme.spacing(4),
		},
	})
);
