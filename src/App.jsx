import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const TextEditor = lazy(() => import('./pages/TextEditor'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/text' element={<TextEditor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
