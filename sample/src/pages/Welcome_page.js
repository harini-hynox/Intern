import React  from 'react'
import './../styles/Welcome_page.css';
import location from './../assests/location.png';
import email from './../assests/email.png';
import phone from './../assests/phone.png';


const Welcome_page = () => {
  
  return (
    <div className='wp_main'>
        <div className='wp_nav'>
            <a href="#home"><h4>HOME</h4></a>
            <a href="#about"><h4>ABOUT</h4></a>
            {/* <a href="#career"><h4>CAREERS</h4></a> */}
            <a href="#contact"><h4>CONTACT</h4></a>
        </div>
        <div className='wp_content'>
            <section  id ='home'>
                <h1 className='home_content'>Hello Hynox</h1>
                <h4 className='home_says'>Connecting creators to the World</h4>
            <section id='about' className='wp_aBlockcontent'>
                <div className='about_left'>
                    <h3 className='about_head'>Our Story</h3>
                    <p className='about_explain'>
                        Born from the intersection of digital innovation and creative excellence, HYNOX emerged when we realized the future demanded more than just good solutions.We saw a generation that refused to choose between functionality and aesthetics. So we built a company that delivers both—technology that works and experiences that inspire.
                    </p>
                    <p className='tag-line'>This isn't just business. This is evolution.</p>
                </div>
                <div className='about_right'>
                    <h3 className='about_head'>Vision</h3>
                    <p className='about_explain'>To establish a global HYNOX ecosystem that fuels innovation, entrepreneurship, and sustainable growth across industries and communities.</p>
                    <h3 className='about_head'>Mission</h3>
                    <p className='about_explain'>Empowering businesses to thrive in the digital age through innovative solutions that bridge the gap between technology and user experience.</p>
                </div>
            </section>
            <section id='contact' className='wp_coBlockcontent'>
                <h3 className='contact_content'>Contact Us</h3>
                <h5 className='contact_explain'>
                    Stay in touch..
                </h5>
                <div className='contact_line'>
                    <p className='contact_details'><img src={email} alt="" className='c_image'/> thehynox@gmail.com</p>
                    <p className='contact_details'><img src={phone} alt="" className='c_image' /> +91 1234567890</p>
                    <p className='contact_details'><img src={location} alt="" className='c_image'/> Tamil Nadu, India</p>
                </div>
            </section>
            </section>
        </div>

    </div>
  )
}

export default Welcome_page
