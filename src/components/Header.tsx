import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
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
            <Typography color="primary">We sale only sweater</Typography>
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
          <Stack direction="row" spacing={1} marginLeft="56px">
            <IconButton size="small">
              <img src={InstagramIcon} alt="instagram" width="16px" />
            </IconButton>
            <IconButton size="small">
              <img src={FacebookIcon} alt="facebook" width="16px" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box >
  );
}