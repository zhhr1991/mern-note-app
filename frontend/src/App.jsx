import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreateNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full items-center px-5 py-24 bg-gray-200' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
