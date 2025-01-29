import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayouts from './components/layouts/dashboard-layouts';
import ContentCreate from './components/dashboard/content-create';
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
        element: <ContentCreate/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
