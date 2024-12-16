import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer} from "../src/components/index";

function App() {
  return (
    <div className="App">
      {/* <TMDBErrorNotice /> */}
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
