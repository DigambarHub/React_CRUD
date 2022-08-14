import Home from "./Component/Page/Home.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import View from "./Component/Student/View";
import Edit from "./Component/Student/Edit";
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
     </BrowserRouter>
    </>  
  );
}

export default App;
