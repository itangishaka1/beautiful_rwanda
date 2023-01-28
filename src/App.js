import Header from "./components/Header/Header";
// import GridTest from './components/Grid-test/GridTest'
import About from "./components/About/About";
import Features from './components/Features/Features'
import Tours from './components/Tours/Tours'

function App() {
  return (
    <>
      <Header />
      {/* <GridTest /> */}
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </>
  );
}

export default App;
