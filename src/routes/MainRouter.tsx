import { Menu } from 'defines'
import MainLayout from 'layouts/MainLayout'
import { HomePage } from 'pages'
import About from 'pages/about/About'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

export const MainRouter = () => {
  const { HOME, ABOUT } = Menu
  const router = createBrowserRouter([
    {
      path: HOME,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    },
    {
      path: ABOUT,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    // if no have path return to homepage
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ])
  return <RouterProvider router={router} />
}
