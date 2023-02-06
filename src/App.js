import Header from "./components/Header/Header";
// import GridTest from './components/Grid-test/GridTest'
import About from "./components/About/About";
import Features from './components/Features/Features'
import Tours from './components/Tours/Tours'
import Stories from "./components/Stories/Stories";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
