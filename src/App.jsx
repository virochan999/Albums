import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddAlbum from './pages/AddAlbum'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <Home />},
        { path: '/addAlbum', element: <AddAlbum /> }
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
