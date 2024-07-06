import React, { useState } from 'react'
import Logo from "../assets/Logo.svg"
import {BsCart2} from "react-icons/bs"
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
    const handleRedirect = () => {
        window.location.href = 'https://drive.google.com/file/d/1ddo4YqYalk2SWT86rusPXJv2hJHZyGcD/view'
    }

    const handleRedirectRedes = () => {
        window.location.href = 'https://www.instagram.com/codehive_chis?igsh=MWF6ZTB1bjNobXBuYQ=='
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
            
            <a href="" onClick={handleRedirectRedes}>Redes Sociales</a>
            <button className='primary-button'onClick={handleRedirect}>Politica de privacidad</button>
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
