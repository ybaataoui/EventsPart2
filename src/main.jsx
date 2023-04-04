import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Routes/Layout'
import DetailView from './Routes/DetailView'
import NotFound from './Routes/Not_Found'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true}  element={<App />} />
        <Route index={false} path="/eventDetails/:id" element={<DetailView />} />
        <Route path='*' element={<NotFound />}/>
      </Route>  
    </Routes>
  </BrowserRouter>
)
