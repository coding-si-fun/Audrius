import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "@/components/ui/provider"
import SodoNameliai from "./custom-components/SodoNameliai.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LaukoBaldai from './custom-components/LaukoBaldai.tsx';
import SunsBudos from './custom-components/SunsBudos.tsx';
import ZaidimuNameliai from './custom-components/zaidimuNameliai.tsx';
import Pavesines from './custom-components/Pavesines.tsx';
import Supynes from './custom-components/Supynes.tsx';
import MainArea from './custom-components/MainArea.tsx';
import ApieMus from './custom-components/ApieMus.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/sodo-nameliai",
    element: <SodoNameliai />
  },
  {
    path: "/lauko-baldai",
    element: <LaukoBaldai />
  },
  {
    path: "/pavesines",
    element: <Pavesines />
  },
  {
    path: "/Suns-budos",
    element: <SunsBudos />
  },
  {
    path: "/zaidimu-nameliai",
    element: <ZaidimuNameliai />
  },
  {
    path: "/supynes",
    element: <Supynes />
  },
  {
    path: "/main/:category",
    element: <MainArea gotImages={""} />
  },
  {
    path: "/apie-mus",
    element: <ApieMus />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
