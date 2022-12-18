import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Page from '../Pages/404'
import Home from '../Pages/Home'
import LoginCmp from '../Pages/login'
import SignUpcmp from '../Pages/SignUp'
import { Protected } from './ProtectedRoute'

export const RouterCmp = () => {
  return (
      <Router>
        <Routes>
          <Route element={<Protected />}>
            <Route path='/' element={<Home />}></Route>
          </Route>
            <Route path='/signUp' element={<LoginCmp />}></Route>
            <Route path='/login' element={<SignUpcmp />}></Route>
            <Route path='*' element={<Page />}></Route>
        </Routes>
      </Router>
    )
}
