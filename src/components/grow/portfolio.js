import React from 'react'
import './portfolio.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import profile from './pro.jpg'

function Portfolio() {
  const yog = 'Yogeshwaran M';
  return (
    <>
      <div className='e19'>
        <div className='e20'>
        <div className='e'>
          <h1 className='d' >Hi,I'm {yog}</h1>
          <h3 className='f'>Web Developer</h3>
          <p className='p'>As a web developer, my objectives revolve around mastering front-end technologies, including HTML, CSS, and JavaScript, to craft visually appealing and responsive web interfaces. I aim to explore and implement frameworks like React.js for efficient development and improved user experience. Ensuring cross-browser compatibility and responsive design is crucial in providing a consistent experience across various devices. Additionally, I seek to enhance my backend skills with technologies like Flask, manage databases, and integrate third-party APIs. Collaboration and effective communication with team members, along with a focus on user experience design principles, round out my objectives as a web developer.</p>
          <button className='i'>Download CV</button>
        </div>
        <img src={profile} className='img' />
      </div>
      </div>
      <div className='j' style={{ display: 'flex', flexDirection: 'row', marginTop: '12%' }}>
        <a href="https://github.com/Yogeshwaran1901" style={{height:'5vh',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='fa-brands fa-github' style={{color:'white',transition:'all 2s ease'}}></i></a>
        <a href="https://www.instagram.com/unreal_scavenger_y?igsh=OGQ5ZDc2ODk2ZA==" style={{height:'5vh',marginLeft:'3vw',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='fa-brands fa-instagram' style={{color:'white',transition:'all 2s ease'}}></i></a>
        <a href="https://www.linkedin.com/in/myogeshwaran19" style={{height:'5vh',marginLeft:'3vw',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='fa-brands fa-linkedin' style={{color:'white',transition:'all 2s ease'}}></i></a>
      </div>
    </>
  )
}
function Portfolio1() {
  return (
    <>
    <center>
    <div className="h" style={{ display: 'flex', flexDirection: 'row',width:'98vw' }}>
        <h2>About.</h2>
        <div className='li2' style={{ display: 'flex', flexDirection: 'row' }}>
        <img className='k' style={{zIndex:'5'}} src={profile} />
        <p className='li'></p>    
        </div>
        <div  style={{ display: 'flex', flexDirection: 'column' ,marginLeft:"2.3vw"}}>
        <h3 className='f1'>Web Developer</h3>
        <p className='p1'>As a web developer, you likely enjoy creating visually appealing and functional websites. You might have experience with version control systems like Git and collaboration platforms like GitHub. Familiarity with responsive design principles ensures your websites work well across various devices. Problem-solving and debugging skills are crucial for troubleshooting code issues.</p>
        <p className='p2'>As a web developer, you likely enjoy creating visually appealing and functional websites. You might have experience with version control systems like Git and collaboration platforms like GitHub. Familiarity with responsive design principles ensures your websites work well across various devices. Problem-solving and debugging skills are crucial for troubleshooting code issues.</p>
      
       <a href="#edu" style={{textDecoration:'none'}} ><button className='i' style={{marginTop:'3vh'}}>Read More</button></a>
        </div>
       </div>
    </center>
    </>
  )
}

export { Portfolio, Portfolio1 }