import "./App.css";
import Pages from "./pages/index";
import MenuAppBar from "./components/commons/AppBar";
function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Pages />
    </div>
  );
}

export default App;
