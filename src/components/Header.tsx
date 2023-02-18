import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Logo from '../images/logo.svg'
import InstagramIcon from '../icons/instagram.svg'
import FacebookIcon from '../icons/facebook.svg'

export default function ButtonAppBar() {
  const pages = ['About', 'Item', 'Shop', 'Info', 'Press'];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box display="flex" flexGrow={1} alignItems="end">
            <img src={Logo} alt="Logo" />
            <Typography color="inherit">We sale only sweater</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                variant="text"
                color="primary"
                key={page}
                sx={{ my: 2, display: 'block', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton>
            <img src={InstagramIcon} alt="instagram" />
          </IconButton>
          <IconButton>
            <img src={FacebookIcon} alt="facebook" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  );
}