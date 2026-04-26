import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Workouts from "./pages/Workouts";

export default function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/journal" element={<Journal/>}/>
<Route path="/workouts" element={<Workouts/>}/>
</Routes>
</BrowserRouter>
)}