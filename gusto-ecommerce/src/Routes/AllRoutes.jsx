import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../Component/Account'
import Build from '../Component/Build'
import Home from '../Component/Home'
import Navbar from '../Component/Navbar/Navbar'
import NotFound from '../Component/NotFound'
import PayRoll from '../Component/PayRoll'
import Pricing from '../Component/Pricing'
import Resource from '../Component/Resource'
import Search from '../Component/Search'
import SignIn from '../Component/SignUp'
import SignUp from '../Component/SignUp'
import WhyGusto from '../Component/WhyGusto'


export default function AllRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route />
                <Route path='/' element={<Home />} />
                <Route path='/accounting' element={<Account />} />
                <Route path='payroll' element={<PayRoll />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='resource' element={<Resource />} />
                <Route path='search' element={<Search />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='whygusto' element={<WhyGusto />} />
                <Route path='build' element={<Build />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
