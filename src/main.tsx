import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayouts from './components/layouts/dashboard-layouts';
import DashboardHome from './pages/dashboard-home';
import { AppContextProvider } from './contexts/app.context';
import { Toaster } from 'react-hot-toast';
import { ContentContextProvider } from './contexts/content.context';
import DashboardContent from './pages/dashboard-content';
import ContentNotFound from './components/dashboard/content-not-found';
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
      },
      {
        path: 'content/:id',
        element: <DashboardContent/>,
        errorElement: <ContentNotFound />
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <AppContextProvider>
      <ContentContextProvider>
        <RouterProvider router={router} />
      </ContentContextProvider>
    </AppContextProvider>
  </StrictMode>,
)
