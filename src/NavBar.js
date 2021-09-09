import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(1, 0, 2, 0),
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    pointerEvents: 'none',
    padding: theme.spacing(0, 2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '55ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '20ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} component="h1" variant="h3">
            Podcasts
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
