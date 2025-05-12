import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const TextEditor = lazy(() => import('./pages/TextEditor'))
const NavbarPage = lazy(() => import('./pages/NavbarPage'))
const Toasts = lazy(() => import('./pages/Toasts'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<TextEditor />} />
        <Route path='/text' element={<TextEditor />} />
        <Route path='/toast' element={<Toasts />} />
        <Route path='/nav' element={<NavbarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
