import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AllNovels from "./pages/AllNovels";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PageDescription from "./pages/PageDescription";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='/novels' element={<AllNovels />} />
    <Route path='/desc/:bookId' element={<PageDescription />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
