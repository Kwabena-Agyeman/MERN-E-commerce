/** @format */
import { Container } from "react-bootstrap";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className='py-3'>
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
