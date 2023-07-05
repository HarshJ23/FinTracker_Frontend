import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from "./components/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast'


function App() {
  return (
  <Router>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>

<Toaster/>
  </Router>
  );
}

export default App;
