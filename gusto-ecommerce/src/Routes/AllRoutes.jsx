import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../Component/Account'
import Build from '../Component/Build'
import CreateAccount from '../Component/CreateAccount'
import Home from '../Component/Home'

import NotFound from '../Component/NotFound'
import PayRoll from '../Component/PayRoll'
import Pricing from '../Component/Pricing'
import Product from '../Component/Product'
import Resource from '../Component/Resource'
import Search from '../Component/Search'
import SignIn from '../Component/SignIn'
import SignUp from '../Component/SignUp'
import WhyGusto from '../Component/WhyGusto'


export default function AllRoutes() {
    return (
        <div>

            <Routes>
                <Route />
                <Route path='/' element={<Home />} />
                <Route path='/accounting' element={<Account />} />
                <Route path='/payroll' element={<PayRoll />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/resource' element={<Resource />} />
                <Route path='/search' element={<Search />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/create-account' element={<CreateAccount />} />
                <Route path='/product' element={<Product />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/whygusto' element={<WhyGusto />} />
                <Route path='/build' element={<Build />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
