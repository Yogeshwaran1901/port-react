import React from 'react'

function Portfolio4() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className='j5'>Contact.</h2>
<div className='m5'>
  <form action="https://api.web3forms.com/submit" method="POST">

  <div className='n5'>
  <input type="hidden" name="access_key" value="378a764c-c55b-4ed2-926b-d843fc5a32be"/>
   <input type='text' name='name' placeholder='Full Name' required/>
   <input type='email' name='email' placeholder='Email Address' required/>
  </div>
  <div className='n51'>
   <input type='number' name='phone no.' placeholder='Mobile No.' required/>
   <input type='text' name='subject' placeholder='Email Subject' required/>
  </div>
  <textarea placeholder='Type your Message...' name='message' required></textarea>
  <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
<button className='i4'>Submit</button>
        </form>
        </div>
      
        </div>
    </>
  )
}

export {Portfolio4}