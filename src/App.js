import Header from "./components/Header/Header";
// import GridTest from './components/Grid-test/GridTest'
import About from "./components/About/About";
import Features from './components/Features/Features'
import Tours from './components/Tours/Tours'
import Stories from "./components/Stories/Stories";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <>
    <Navigation />
      <Header />
      {/* <GridTest /> */}
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
