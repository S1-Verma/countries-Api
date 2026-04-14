import "./App.css";
import { Outlet } from "react-router";
import Header from "./Components/Header";

import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    // hum yaha se jo bhi value pass karenge vo hume theme childern me mill jayegi
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
