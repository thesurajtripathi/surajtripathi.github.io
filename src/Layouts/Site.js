import React from 'react'
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import ClassComponent from '../components/learn/comptypes/ClassComponent';
import FunctionComponent from '../components/learn/comptypes/FunctionComponent';
import FocusInput from '../components/learn/refs/FocusInput';
import FarInput from '../components/learn/refs/FarInput';
import HocComponent from '../components/learn/hoc/HocComponent';
import Hooks from '../components/learn/hooks/Hooks';
import Counter from '../components/learn/hooks/Counter';
import Counter2 from '../components/learn/hooks/Counter2';
import Counter3 from '../components/learn/hooks/Counter3';
import Counter4 from '../components/learn/hooks/Counter4';
import {Index} from '../components/learn/hooks/Effect/Index';
import Effect1 from '../components/learn/hooks/Effect/Effect1';
import ClassCounter from '../components/learn/hooks/Effect/ClassCounter';
function Site() {
  return (
    <div className="wrapper">
        <Sidebar />
        <div id="content">
            <Navigation/>
             <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/components/class' element={<ClassComponent/>} />
                <Route path='/components/functional' element={<FunctionComponent/>} />
                <Route path='/refs'>
                  <Route path='inputref' element={<FocusInput/>} />
                  <Route path='far' element={<FarInput/>} />
                </Route>
                <Route path='/hoc'>
                  <Route index element={<HocComponent/>}/>
                </Route>
                <Route path='/hook' element={<Hooks/>}>
                    <Route index element={<Counter/>}/>
                    <Route path='counter1' element={<Counter2/>}/>
                    <Route path='counter3' element={<Counter3/>}/>
                    <Route path='counter4' element={<Counter4/>}/>
                </Route>
                <Route path='/effect' element={<Index/>}>
                    <Route path='class' element={<ClassCounter/>}/>
                    <Route index element={<Effect1/>}/>
                </Route>
                <Route path='*' element={<FocusInput/>} />
             </Routes>
        </div>
    </div>
  )
}

export default Site