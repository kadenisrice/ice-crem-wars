import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <>
      <Header />
      <main>
        <AdDesigner />
      </main>
      <Votes />
    </>
  );
}

export default App;
