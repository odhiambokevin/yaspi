import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
export const AppLayout = ()=>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
};

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path='blogs' element={<Blog />} />
  </Route>
 
  ));

function App() {
  
  return (
  <RouterProvider router={router} />   
  );
}

export default App;


