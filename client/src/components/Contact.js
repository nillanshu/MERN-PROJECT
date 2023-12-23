import React, { useState, useEffect } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  const userContact = async() => {
    try {
      const response = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

      if(!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userContact();
  },[])

  // storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  // send data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();

    if (!data) {
      console.log("message not sent");
    } else {
      alert("Message sent");
      setUserData({...userData, message:""});
    }
  }

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between py-5">

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Phone
                  </div>
                  <div className="contact_info_text">
                    +91 1111 543 2198
                  </div>
                </div>
              </div>
              
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Email
                  </div>
                  <div className="contact_info_text">
                    contact@nillanshu.com
                  </div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Address
                  </div>
                  <div className="contact_info_text">
                    Jaipur, Raj., India
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  Get In Touch
                </div>
                <form method='POST' id='contact_form'>
                  <div className="contact_form_name d-flex justify-content-between align-items-between mt-5">
                    <input type="text" id='contact_form_name' className='contact_form_name input_field' onChange={handleInputs} name='name' value={userData.name} placeholder='Your name' required='true' />

                    <input type="email" id='contact_form_email' className='contact_form_email input_field' onChange={handleInputs} name='email' value={userData.email} placeholder='Your email' required='true' />

                    <input type="number" id='contact_form_number' className='contact_form_number input_field' onChange={handleInputs} name='phone' value={userData.phone} placeholder='Your phone number' required='true' />

                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea className="text_field contact_form_message" onChange={handleInputs} name='message' value={userData.message} placeholder='Message' cols="30" rows="10"></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type='submit' onClick={contactForm} className='button contact_submit_button'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact