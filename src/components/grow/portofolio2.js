import React from 'react'
import './portofolio2.css'

function Portfolio3() {
  return (
    <>
      <div className="c5">
        <h2 className='a5'>Skills.</h2>
        <div style={{ display: 'flex', flexDirection: 'column',marginRight:'47vw' }}>
          <h5 style={{ marginLeft: '-47.2vw', marginTop: '20vh', color: 'white', letterSpacing: '.02em', fontSize: '1.5em', fontFamily: "cursive" }}>Technical Skills</h5>
          <div className='b5'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="f5">
            <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>C</h6>
           <h6 className='d50'>75%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='75'></progress>
            </div>
            <div className="f5">
            <div  style={{ display: 'flex', justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Python</h6>
           <h6 className='d50'>80%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='80'></progress>

            </div>
            <div className="f5">
      <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Java</h6>
           <h6 className='d50'>70%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='70'></progress>
          </div>
          <div className="f5">
           <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Web</h6>
           <h6 className='d50'>82%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='82'></progress>
         
          </div>
          </div>

          </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <h5 style={{ marginLeft: '-47.2vw', marginTop: '20vh', color: 'white', letterSpacing: '.02em', fontSize: '1.5em', fontFamily: "cursive" }}>Soft Skills</h5>
          <div className='b5'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="f5">
            <div  style={{ display: 'flex', justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Communication</h6>
           <h6 className='d50'>70%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='70'></progress>
            </div>
            <div className="f5">
            <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Teamwork</h6>
           <h6 className='d50'>80%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='80'></progress>

            </div>
            <div className="f5">
      <div  style={{ display: 'flex', display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5' style={{width:'20vw'}}>Problem_Solving</h6>
           <h6 className='d50'>75%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='75'></progress>
          </div>
          <div className="f5">
           <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' ,height:'7vh',width:'40vw'}}>
           <h6 className='d5' style={{justifyContent:'flex-start'}}>Adaptability</h6>
           <h6 className='d50'>85%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='85'></progress>
         
          </div>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export { Portfolio3 }