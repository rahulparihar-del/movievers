import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer, TMDBErrorNotice } from "../src/components/index";

function App() {
  return (
    <div className="App">
      <TMDBErrorNotice />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
