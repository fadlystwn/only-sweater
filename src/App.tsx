import { ThemeProvider, createTheme } from '@mui/material/styles';
import ONLYSWEATER_THEME from './theme'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import ProductSlider from './components/Product'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const theme = createTheme(ONLYSWEATER_THEME);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <About />
        <ProductSlider />
        <ContactForm />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
