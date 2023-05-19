import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros"


export default function App() {
  return (
   <>
    <BrowserRouter>
   <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/sobrenosotros" element={<SobreNosotros/>} />
      
    </Routes>
   </BrowserRouter> 
    
    
   </>
  )
}
