import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import {HiOutlineBars3} from "react-icons/hi2"
import{
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import { Link } from 'react-scroll'



const Navbar = () => {
    
    const handleRedirectRedes = () => {
        window.location.href = 'https://linktr.ee/fastmeals12'
    }
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon: <HomeIcon/>
        },
        {
            text:"About",
            icon: <InfoIcon/>
        },
        
    ]
  
    return (
    <nav>
        <div className="nav-logo-container" >
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <Link to='about' smooth={true} duration={500}>
            < a href="">Acerca de nosotros</a></Link>
            
            <a  onClick={handleRedirectRedes}>Redes Sociales</a>
            
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box 
                sx={{width : 250}}
                role="presentation"
                onClick={() => setOpenMenu(false) }
                onKeyDown= {()=> setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon key={item.icon}></ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar
