import React from 'react';

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



export default function MiniDrawer() {
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

// sideNav click functionalities
    const searchClick = () => {
        console.log('search clicked');
    };
    const homeClick = () => {
        console.log('home clicked');
    };
    const customerClick = () => {
        console.log('customer clicked');
    };
    const dispatchClick = () => {
        console.log('dispatch clicked');
    };
    const chatClick = () => {
        console.log('chat clicked');
    };
    const invoicingClick = () => {
        console.log('invoicing clicked');
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
                            <SearchIcon onClick={searchClick}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon onClick={homeClick}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <GroupAddIcon onClick={customerClick}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <AssignmentIcon onClick={dispatchClick}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <ChatIcon onClick={chatClick}/>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                        <InsertDriveFileIcon onClick={invoicingClick}/>
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