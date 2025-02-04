import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayouts from './components/layouts/dashboard-layouts';
import DashboardHome from './pages/dashboard-home';
import { AppContextProvider } from './contexts/app.context';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/chat',
    element: <DashboardLayouts />,
    children: [
      {
        index: true,
        element: <DashboardHome />
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
