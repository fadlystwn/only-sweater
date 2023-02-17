import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Facebook, Instagram } from '@mui/icons-material';
import { Typography } from '@mui/material'
const pages = ['About', 'Item', 'Shop', 'Info', 'Press'];
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <Container>
        <Grid container direction="row" md={12}>
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
        </Grid>
        <Grid container>
          <Grid item>
            <Typography>
              Tel: 0312345678
            </Typography>
            <Typography> Email: onlysweater@jp.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer