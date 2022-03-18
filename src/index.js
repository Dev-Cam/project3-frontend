import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TableList from './components/TableList'
import Servers from './components/Servers'
import TableOrder from './components/TableOrder'
import Table from './components/TableList';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="servers" element={ <Servers /> } />
        <Route path="servers/:serverId/tables" element={ <TableList /> } />
        <Route path="servers/:serverId/tables/:tableId/table-order" element={ <TableOrder /> } />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


