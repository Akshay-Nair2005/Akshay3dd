import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AllNovels from "./pages/AllNovels";
import TextViewer from "./pages/TextViewer";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PageDescription from "./pages/PageDescription";
// import PdfView from "./components/PdfView";
import PdfViewer from "./pages/PdfViewer";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='/novels' element={<AllNovels />} />
    <Route path='/desc/:bookId' element={<PageDescription />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
    <Route path='/text' element={<TextViewer />} />
    <Route path='/pdf' element={<PdfViewer />} />
  </>
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
