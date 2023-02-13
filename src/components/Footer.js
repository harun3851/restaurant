import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';



function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
  
            <InstagramIcon/> <TwitterIcon /><FacebookIcon /><LinkInIcon />
          
       

        </div>
        <p>&copy; 2021 hkpizza</p>
    </div>
  );
}

export default Footer;