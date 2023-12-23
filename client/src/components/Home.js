import React, { useEffect, useState } from 'react'

const Home = () => {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const getData = async() => {
    try {
      const response = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      // console.log(data.name);
      setUserName(data.name);
      // console.log(userName);
      setShow(true);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <>
      <div className="home-page container">
        <div className="home-div text-center">
          <p className='pt-5'>WELCOME</p>
          <h1>{userName}</h1>
          <h2>{show ? 'Happy to see you Onboard Again' : 'We Are The MERN Developer'}</h2>
        </div>
      </div>
    </>
  )
}

export default Home