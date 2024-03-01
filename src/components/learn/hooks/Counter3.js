import React, { useState } from 'react'

function Counter3() {
    const [name,setName]=useState({firstname:'',lastname:''});

    // const hanldeInput=(e)=>{
    //     setName({e.target.name: e.target.value})
    // }

  return (
    <div>
        <form className='form'>
            <div className='row'>
                <label>First Name</label>
                <input type='text' value={name.firstname} className='form-control' name='firstname' onChange={e=> setName({...name,firstname:e.target.value})}/>
            </div>
            <div className='row'>
                <label>Last Name</label>
                <input type="text"  value={name.lastname} className='form-control' name='lastname' onChange={e=> setName({...name,lastname:e.target.value})}/>
            </div>
        </form>
        First Name : {name.firstname}<br/>
        Last Name : {name.lastname}
        <pre>
            {JSON.stringify(name)}
        </pre>
    </div>
  )
}

export default Counter3