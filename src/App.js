import { LayOut } from "./LayOut/LayOut";
import {Routes,Route} from 'react-router-dom'
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Catalog } from "./pages/Catalog";



function App() {
  
  return (
   <>
   <Routes>
    <Route path="/" element={<LayOut/>}>
      <Route index element={<Main/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contacts" element={<Contact/>}></Route>
      <Route path="catalog" element={<Catalog/>}></Route>
    </Route>
   </Routes>

   </>

  
  );
}

export default App;
