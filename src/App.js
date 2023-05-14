import Header from './components/Header'
import { MovieRouter } from "./router/MovieRouter";

function App() {
  return (
    <div className="bg-color-streaming min-h-screen py-6 flex flex-col sm:py-2">
        <Header />
        <MovieRouter />
    </div>
  );
}

export default App;
