import { Route, Routes } from "react-router-dom";
import { Navigations } from "./components/Navigations";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
	  <div className="">
		  <Navigations/>
		  <Routes>
			  <Route path='/' element={<HomePage/>}/>
			  <Route path='/favourites' element={<FavouritesPage/>}/>
		 </Routes>
    </div>
  );
}

export default App;
