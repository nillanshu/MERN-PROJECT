import React, { useEffect, useState } from 'react'
import userimg from "../images/userimg.jpg"
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async() => {
    try {
      const response = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await response.json();
      setUserData(data);

      if(!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
      
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  },[])
  

  return (
    <>
        <div className="container emp-profile mt-5">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <img src={userimg} alt="user" className='userimg' />
              </div>

              <div className="col-md-6">
                <div className="profile-hand">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile-rating mt-3 mb-5">RANKINGS: <span>1/10</span></p>

                  <ul class="nav nav-tabs" role='tablist'>
                    <li class="nav-item">
                      <a class="nav-link active" id='home-tab' data-toggle='tab' href="#home" role='tab' aria-controls='home' aria-selected="true">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" id='profile-tab' data-toggle='tab' href="#profile" role='tab' aria-controls='profile' aria-selected="true">Timeline</a>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <input type="text" className="profile-edit-btn" name='btnAddMore' value="Edit Profile" />
              </div>

            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href="https://nillanshu-saini.netlify.app/" target='_nillanshu'>Portfolio</a> <br />
                </div>
              </div>

              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id='myTabContent'>
                  <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab' >
                    
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData._id}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.work}</p>
                      </div>
                    </div>

                  </div>
                  <div className="tab-pane fade" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Intermediate</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Hourly Charge</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>30</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Good</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 Months</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
    </>
  )
}

export default About