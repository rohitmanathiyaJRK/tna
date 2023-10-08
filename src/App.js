import react, { useState } from 'react';
import originalLogo from './images/originalLOGO.png';
import ionCall from './images/ion_call.png';
import asset1 from './images/asset1.svg';
import asset2 from './images/asset2.svg';
import asset3 from './images/asset3.svg';
import asset5 from './images/asset5.svg';
import asset6 from './images/asset6.svg';
import send from './images/send.svg';
import offer from './images/offer.svg'
import whatsapp from './images/whatsapp.png'
import Card from './Components/Card/Card';
import starImg from './images/starImg.svg';
import cardImg from './images/cardimg.svg';
import course2 from './images/course2.svg';
import course3 from './images/course3.svg';
import course4 from './images/course4.svg';
import './App.css'
import underline from './images/arrow.svg'
import asset4 from './images/asset4.svg'


function App() {
  const [active,setActive]=useState("");
  const [userContact,setUserContact]=useState({})
  const [username,setUsername]=useState("");
  const [number,setNumber]=useState("");
  const [location,setLocation]=useState("");
  const [email,setEmail]=useState("");
  const [footermail,setFootermail]=useState("");
  const handleactive=(e)=>{
    setActive( e.target.name);
    console.log(e.target.name);
  }
  const handleChange=(e)=>{
    if(e.target.name=== "username"){
        setUsername(e.target.value);
    }
    else if(e.target.name === "number"){
      setNumber(e.target.value);
    }
    else if(e.target.name === "location"){
      setLocation(e.target.value);
    }
    else if(e.target.name=== "email"){
      setEmail(e.target.value);
    }
    else if(e.target.name === 'footermail'){
      setFootermail(e.target.value);
    }
  }
  const handleSubmit=(e)=>{
    console.log("username",username);
    console.log("number",number);
    console.log('location',location);
    console.log("email",email);

    e.preventDefault();
    if(username!=="" && email!=="" && location !=="" && number !==""){
      setUserContact({
        Username:username,
        Number:number,
        Location:location,
        Email:email
      })
      const config={
        // Username:"admin@tamilnaduneetacademy.com", 
        // Password:"8410603685BD5898C791B4DCC0B65E4E2EC5",
        // Host:"smtp.elasticemail.com",
        // Port:2525,
        SecureToken:'6c2a54da-2efd-4577-9e9c-ab93190d1c52',
        To : 'admin@tamilnaduneetacademy.com',
        From : 'admin@tamilnaduneetacademy.com',
        Subject : "User Enquiry from website",
        Body : `Hi, You have new enquiry from ${username}, Plese contact user on this number ${number}. The user is from ${location}. User mail id is ${email}`
      }
      console.log("window.Email checking -----",window.Email);
      if(window.Email){
        window.Email.send(config).then(msg=>alert(msg));
        
      }
      setUsername("");
      setNumber("");
      setEmail("");
      setLocation("");
    }
    else{
      alert("please enter every field ")
    }
  }

  const handleClick=()=>{
    if(footermail!=""){
      const config={
        // Username:"admin@tamilnaduneetacademy.com", 
        // Password:"8410603685BD5898C791B4DCC0B65E4E2EC5",
        // Host:"smtp.elasticemail.com",
        // Port:2525,
        SecureToken:'6c2a54da-2efd-4577-9e9c-ab93190d1c52',
        To : 'admin@tamilnaduneetacademy.com',
        From : 'admin@tamilnaduneetacademy.com',
        Subject : "Subscription Alert",
        Body : `Hi, You have new have new subscription from user with mail id ${footermail}`
      }
      console.log("window.Email checking -----",window.Email);
      if(window.Email){
        window.Email.send(config).then(msg=>alert(msg));
        
      }
    }
  }

  const [course,setCourse]=useState([
    {
      course_name:"NEET Repeater’s 1 year long term intensive class room courses",
      imgurl:cardImg,
      linkURL:"https://docs.google.com/forms/d/e/1FAIpQLSeJH9iMK_9sqMCCbKZ_zUt_vu2n4zh8r-F3bsaNBozxQ2TQPw/viewform?usp=sf_link"
    },
    {
      course_name:"NEET Oriented Weekend classes for classes 11th & 12th",
      imgurl:course2,
      linkURL:"https://docs.google.com/forms/d/e/1FAIpQLSeJH9iMK_9sqMCCbKZ_zUt_vu2n4zh8r-F3bsaNBozxQ2TQPw/viewform?usp=sf_link"

    },
    {
      course_name:"Foundation Classes for class 6th to 10th to face competitive Exams",
      imgurl:course3,
      linkURL:"https://docs.google.com/forms/d/1EG9WdGp7zeBX1gVK1xjWwp4BXJ6lYPG_SmfqehOTQag/edit"
    },
    {
      course_name:"School Integrated programme NEET oriented classes for +1 & +2 Foundations",
      imgurl:course4,
      linkURL:"https://docs.google.com/forms/d/e/1FAIpQLSeJH9iMK_9sqMCCbKZ_zUt_vu2n4zh8r-F3bsaNBozxQ2TQPw/viewform?usp=sf_link"

    }
  ]);


  return (
    <div className='mainContainer'>
      <div className='whatapp'>
        <a href="https://wa.me/919363044994" target='_blank'><img src={whatsapp} alt="" /></a>
      </div>
      <header className='header'>
        <div className='logo'>
          <img src={originalLogo} alt="" />
          

        </div>
        <div className='navigation'>
          <ul>
            <li> <a href="#about" name="about" onClick={handleactive} style={{color: active=='about'?"red":"green"}}>About</a></li>
            <li> <a href="#offers" name="offers" onClick={handleactive} style={{color: active=='offers'?"red":"green"}}>Offers</a></li>
            <li> <a href="#course" name="course" onClick={handleactive} style={{color: active=='course'?"red":"green"}}>Course</a></li>
            <li> <a href="#features" name="features" onClick={handleactive} style={{color: active=='features'?"red":"green"}}>Features</a></li>
            <li> <a href="#contacts" name="contacts" onClick={handleactive} style={{color: active=='contacts'?"red":"green"}}>Contacts</a></li>
          </ul>

        </div>
        <div className='callus'>
          <button> <img src={ionCall} alt="" /> <span> 9363044994</span></button>
        </div>

      </header>
      <section id='about' >
        <div className='about-mainContainer' style={{backgroundImage: `url(${asset1})`,backgroundSize:'cover'}}>
          
            <div className='about-text-mini'>
              <p className='about-text1'><span>Tamil Nadu NEET Academy</span> is the place where your impossible becomes possible. We'll help you break through your limits and achieve your wildest dreams.</p>
              <p className='about-text2'>Start learning by registering for free
              </p>
              <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeJH9iMK_9sqMCCbKZ_zUt_vu2n4zh8r-F3bsaNBozxQ2TQPw/viewform?usp=sf_link" className='universal_btn' target="_blank">Enroll For Free</a></button>
            </div>
          
          <div className='about-img' >
            <img src={asset2} alt="" />
          </div>
        </div>


      </section>
      <section id='offer' className='offer-section'>
        
        <div className='offer-mainContainer' style={{backgroundImage:`url(${asset3})`}}>
          <div className='offer-text1'>
            <p>1000+ Students enrolled</p>
          </div>
          <div className='offer-text2'>
            <p>Limited seats only so <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeJH9iMK_9sqMCCbKZ_zUt_vu2n4zh8r-F3bsaNBozxQ2TQPw/viewform?usp=sf_link" className='universal_btn' target="_blank">Book Your Seats</a></button> Now</p>

          </div>
        </div>
        

      </section>
      <section id='offers' className='course-section'>
        <div className='course-mainContainer'>
          <div className='course-first'>
            <img src={offer} alt="" />

          </div>
          <div className='course-second'>
            <p className='course-second-1'><span>50% offer</span> with easy </p>
            <p className='course-second-2'>instalment and <span>7.5%</span></p>
            <p className='course-second-3'>reservation  quota eligible for</p>
            <p className='course-second-4'><span>Government</span> school students</p>

          </div>
        </div>

      </section>
      <section id='course'>
        <div className='features-mainContainer'>
          <div className='features-text'>
            <p> <span>Admissions</span> Open For</p>
            <img src={underline} alt="" />
          </div>
          <div className='features-card'>
            {
              course.map((data,ind)=>{
                return <Card text={data.course_name} img={data.imgurl} linkURL={data.linkURL} />
              })
            }
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/> */}

          </div>
          
        </div>
        

      </section>
      <section id='features'>
        <div className='feat-mainContainer'>
          <div className='feat-text'>
            <div className='feat-text-1'>
              <p className='uni-feat'>Our <span>Unique Features</span></p>
              <img src={underline} alt="" className='feat-underline'/>
              <div className='feat-bullet-points'>

                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Experienced Faculties</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Individual Attention</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Limited Batch Size</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Doubt Clearing Session</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Weekend test Session</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Easy Installment Option</p>
                </div>
                {/* <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Limited Batch Size</p>
                </div>
                <div className='feat-bullet-points-div'>
                  <img src={starImg} alt="" />
                  <p>Limited Batch Size</p>
                </div> */}
              </div>
            </div>
            <div>

            </div>

          </div>
          <div className='feat-img'>
            <img src={asset4} alt="" />

          </div>

        </div>

      </section>
      <section id='class'>
        <div className='class-mainContainer'>
          <div className='class-img'>
            <img src={asset5} alt="" />
          </div>
          <div className='class-text'>
            <p className='class-text-head'>Now <span>Our Classes At</span></p>
            <img src={underline} alt="" className='class-img-underline'/>
            <div className='class-text-addr'>
              <div className='class-text-addr-1'>
                <div className='class-text-addr-img'>
                  <img src={starImg} alt="" />
                  <p>MAIN BRANCH</p>
                </div>
                <p>Tamilnadu NEET Academy</p>
                <p>High Road</p>
                <p>The Anchor Building Palay Bus Stand</p>
                <p>New Bus Stand Road</p>
                <p>Tirunelveli</p>
              </div>

              <div className='class-text-addr-2'>
                <div className='class-text-addr-img'>
                    <img src={starImg} alt="" />
                    <p>OTHER BRANCH</p>
                </div>
                <p>Thisayanvillai</p>

              </div>
              
            </div>

          </div>

        </div>

      </section>
      <section id='contacts'>
        <div className='cnt-mainContainer'>
          <div className='cnt-text'>
            <p className='cnt-text-head'><span>Quick</span> Enquiry</p>
            <img src={underline} alt="" />
            <form className='cnt-form' onSubmit={handleSubmit}>
              <input type="text" name="username" value={username} placeholder='Enter your name' onChange={handleChange} />
              <input type="number" name="number" value={number}  placeholder='Enter you mobile number' onChange={handleChange}/>
              <input type="text" name="location" value={location}  placeholder='Enter your Location' onChange={handleChange}/>
              <input type="email" name="email" value={email}  placeholder='Enter your email' onChange={handleChange}/>

              <button className='cnt-submit' style={{cursor:"pointer"}} >
                <p>SEND</p>
                <img src={send} alt="" />
              </button>
              
            </form>

          </div>
          <div className='cnt-img'>
            <img src={asset6} alt="" />
          </div>

        </div>


      </section>
      <section className='footer'>
        <div className='footer-mainContainer'>
          <div className='footer-1'>
            <img src={originalLogo} alt="" />

          </div>
          <div className='footer-2'>
            <h3>Contact Us</h3>
            <div>
            <p>Phone : +91 75982 43943</p>
            <p>The Anchor Building </p> 
            <p>Palay Bus stand </p>
            <p>New bus stand road, Tirunelveli</p>

            </div>
            
            
          </div>
          <div className='footer-2'>

            <h3>Explore</h3>
            <div>
            <p>About</p>
            <p>Offers</p> 
            <p>Course </p>
            <p>Features</p>
            <p>Contacts</p>

            </div>
          </div>
          <div className='footer-2'>

            <h3>Our Courses</h3>
            <div>
            <p>Repeater’s Courses</p>
            <p>Weekend Classes</p> 
            <p>Foundation Classes</p>
            <p>School Integrated Programme</p>
            </div>
          </div>
          <div className='footer-5'>
          <h3>Subscribe</h3>
          <div>
            <p>Subscribe to know our latest updates from our institution</p>
            <div className='footer-5-input'>
            <input type="text" name="footermail" id="" onChange={handleChange} placeholder='Email Here' value={footermail} />
            <button onClick={handleClick}>Subscribe</button>

            </div>
            
          </div>
            
          </div>

        </div>

      </section>
      
    </div>
  );
}

export default App;
