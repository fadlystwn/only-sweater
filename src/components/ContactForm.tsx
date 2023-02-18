import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const inputStyle = {
  border: '1px solid #DDD',
  borderRadius: '4px',
  padding: '4px',
}

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <Container>
      <Grid container>
        <Grid item md={10} margin="auto">
          <Grid container spacing={2}>
            <Grid item md={12} marginTop="128px">
              <Typography variant="h4" textAlign="center">Contact</Typography>
            </Grid>
            <Grid item md={6}>
              <InputLabel>姓</InputLabel>
              <InputBase fullWidth sx={inputStyle} placeholder="例）太郎" />
            </Grid>
            <Grid item md={6}>
              <InputLabel>姓</InputLabel>
              <InputBase fullWidth sx={inputStyle} placeholder="例）太郎" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <InputLabel>メールアドレス</InputLabel>
              <InputBase fullWidth sx={inputStyle} placeholder="例）yamada@email.com" />
            </Grid>
            <Grid item md={12}>
              <InputLabel>お問合せ内容</InputLabel>
              <InputBase multiline rows="10" fullWidth sx={inputStyle} />
            </Grid>
            <Grid item md={12} alignContent="center">
              <Button variant="contained" >送信する</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactForm