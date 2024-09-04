import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <PublicRoutes />
      </Router>
    </div>
  );
}

export default App;
