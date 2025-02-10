import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DashboardLayouts from './components/layouts/dashboard-layouts';
import DashboardHome from './pages/dashboard-home';
import { AppContextProvider } from './contexts/app.context';
import { Toaster } from 'react-hot-toast';
import { ContentContextProvider } from './contexts/content.context';
import DashboardContent from './pages/dashboard-content';
import ContentNotFound from './components/dashboard/content-not-found';
import Share from './pages/share';
import AuthLayout from './components/layouts/auth-layouts';
import Register from './components/auth/register';
import { AuthProvider } from './contexts/auth.context';
import Login from './components/auth/login';
import ProtectedRoute from './components/auth/protected-route';
import './i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/chat',
    element: <ProtectedRoute><DashboardLayouts /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: 'content/:id',
        element: <DashboardContent />,
        errorElement: <ContentNotFound />
      }
    ]
  },
  {
    path: 'share/:id',
    element: <Share />,
    errorElement: <ContentNotFound />
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='login' replace/>
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <AppContextProvider>
      <AuthProvider>
        <ContentContextProvider>
          <RouterProvider router={router} />
        </ContentContextProvider>
      </AuthProvider>
    </AppContextProvider>
  </StrictMode>,
)
