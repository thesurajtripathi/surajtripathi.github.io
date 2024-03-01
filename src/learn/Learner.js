import React from 'react'
import Components from './Class/Components'
import FuncComponents from './Func/FuncComponents'
import Classevent from './Class/Classevent'
import Functionevent from './Func/Functionevent'
import Classform from './Class/Classform'
import Funcform from './Func/Funcform'
import ClasslifeA from './Class/ClasslifeA'
import ClassPure from './Class/ClassPure'
import HomeComponent from './Class/HomeComponent'
import FunHome from './Func/FunHome'
import ClassRefs from './Class/ClassRefs'

function Learner() {
  return (
    <>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Functional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Components/></td>
                    <td><FuncComponents/> </td>
                </tr>
                <tr>
                    <td><Classevent/></td>
                    <td><Functionevent/> </td>
                </tr>
                <tr>
                    <td><Classform/></td>
                    <td><Funcform/> </td>
                </tr>
                <tr>
                    <td><ClasslifeA/></td>
                    <td>Not Available</td>
                </tr>
                <tr>
                    <td><HomeComponent/></td>
                    <td><FunHome/></td>
                </tr>
                <tr>
                    <td><ClassRefs/></td>
                    <td>Not Available</td>
                </tr>

            </tbody>
        </table>
    </>
  )
}

export default Learner