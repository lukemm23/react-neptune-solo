import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//material UI
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

// sideNav click functionalities
const searchClick = (event, props) => {
    console.log('search clicked');
    props.history.push('/search');
};
const homeClick = (event, props) => {
    console.log('home clicked');
    props.history.push('/admin');
};
const customerClick = (event, props) => {
    console.log('customer clicked');
    props.history.push('/customer');
};
const dispatchClick = (event, props) => {
    console.log('dispatch clicked');
    props.history.push('/dispatch');
};
const chatClick = (event, props) => {
    console.log('chat clicked');
    props.history.push('/chat');
};
const invoicingClick = (event, props) => {
    console.log('invoicing clicked');
    props.history.push('/invoice');
};

// const LogOutButton = props => (
//     <button
//       className={props.className}
//       onClick={() => props.dispatch({ type: 'LOGOUT' })}
//     >
//       Log Out
//     </button>
//   );


const MiniDrawer = props => {
// sideNav styles
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

//  sideNav open/close functionality   
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {/* this is where header go */}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <SearchIcon onClick={(event) => searchClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon onClick={(event) => homeClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <GroupAddIcon onClick={(event) => customerClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <AssignmentIcon onClick={(event) => dispatchClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <ChatIcon onClick={(event) => chatClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <InsertDriveFileIcon onClick={(event) => invoicingClick(event, props)}/>
                        </ListItemIcon>
                        <ListItemText/>
                    </ListItem>
                </List>
                <Divider />

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}


export default withRouter(MiniDrawer);