import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

export default function ButtonAppBar() {
  const pages = ['About', 'Item', 'Shop', 'Info', 'Press'];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Button color="inherit">LOGO</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                color='primary'
                key={page}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton aria-label="instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="facebook">
            <Facebook />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  );
}