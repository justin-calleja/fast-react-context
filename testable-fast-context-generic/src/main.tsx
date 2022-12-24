import React from 'react';
import ReactDOM from 'react-dom/client';
import NamesApp from './App';
import TodosApp from './todos/App';
import './index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link style={{ marginRight: '8px' }} to="/">
          Names
        </Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<NamesApp />} />
        <Route path="/todos" element={<TodosApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
