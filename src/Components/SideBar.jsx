import { Tooltip, Typography, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Avatar from '@mui/material/Avatar';
import { useAuth } from './../Context/AuthContext';
import useCheckAdmin from '../utils/checkAdmin';
import UserImg from '../../public/image/User.webp'
import anonymousImg from '../../public/image/anonymous.webp'
import managerImg from '../../public/image/manager.webp'

// text SideBar
const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    { text: "Contacts Information", icon: <ContactsOutlinedIcon />, path: "/contacts" },
    // { text: "Invoices Balances", icon: <ReceiptOutlinedIcon />, path: "/invoices" },
];

const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];

const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

const drawerWidth = 240;

// open and close Drawer
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


// eslint-disable-next-line react/prop-types
export default function SideBar({ open, handleDrawerClose }) {
    const theme = useTheme();
    const navigate = useNavigate()
    const { currentUser } = useAuth();
    const isAdmin = useCheckAdmin();
    const avatarSrc = currentUser ? (isAdmin ? managerImg : UserImg) : anonymousImg;

    return (

        <Drawer variant="permanent" open={open}>

            <DrawerHeader>
                <IconButton aria-label="Burgur Button" onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Avatar
                sx={{
                    mx: "auto",
                    width: open ? 88 : 44,
                    height: open ? 88 : 44,
                    my: 1,
                    border: "2px solid grey",
                    transition: "0.25s",
                }}
                alt={currentUser ? (isAdmin ? "manager" : "User") : "anonymous"}
            >
                <img
                    srcSet={
                        currentUser
                            ? isAdmin
                                ? `${managerImg} 44w, ${managerImg} 88w`
                                : `${UserImg} 44w, ${UserImg} 88w`
                            : `${anonymousImg} 44w, ${anonymousImg} 88w`
                    }
                    loading="lazy"
                    alt={currentUser ? (isAdmin ? "manager" : "User") : "anonymous"}
                    style={{ width: '100%', height: '100%' }}
                />
            </Avatar>


            <Typography sx={{ textAlign: 'center', fontSize: open ? 14 : 0, transition: "0.25s" }}>
                {currentUser ? currentUser?.email : 'None'}
            </Typography>

            <Typography sx={{ textAlign: 'center', mt: 1, fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main, }}>
                {isAdmin ? "Admin" : 'User'}
            </Typography>

            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}
