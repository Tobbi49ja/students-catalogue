import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";



const students = [
  {
    name: "Tobbi",
    age: 22,
    image:
      // "/src/assets/tobbi.jpg",
      "/tobbi.jpg",
      projectLink: "https://reactlogistics.onrender.com/",
  },
  {
    name: "Dev_Godswill",
    age: 24,
    image:
      "/valentina.jpg",
      projectLink: "https://all-bride-assembly-church.vercel.app/",
  },
  {
    name: "Tob",
    age: 23,
    image:
      "/Tob.jpg",
      projectLink: "https://ourportfolio-t.netlify.app",
  },
  {
    name: "Ali Pelumi",
    age: 21,
    image:
      "https://media.istockphoto.com/id/2227015783/photo/isolated-user-profile-identity-secured-by-a-shield-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=3_umNL-gKGVEpFGtXTIeKMBAF3Yzs0JmB64I4I5sHg4=",
      projectLink: "https://ghosthandle.netlify.app",
  },
  {
    name: "jay",
    age: 25,
    image:
      "https://media.istockphoto.com/id/2227015783/photo/isolated-user-profile-identity-secured-by-a-shield-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=3_umNL-gKGVEpFGtXTIeKMBAF3Yzs0JmB64I4I5sHg4=",
      projectLink: "https://godfreyjr-weather-app.vercel.app/",
  },
  {
    name: "emma berry",
    age: 26,
    image:
      "https://media.istockphoto.com/id/2227015783/photo/isolated-user-profile-identity-secured-by-a-shield-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=3_umNL-gKGVEpFGtXTIeKMBAF3Yzs0JmB64I4I5sHg4=",
      projectLink: "https://attahe.netlify.app/",
  },
  {
    name: "jerry jnr",
    age: 27,
    image:
      "https://media.istockphoto.com/id/2227015783/photo/isolated-user-profile-identity-secured-by-a-shield-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=3_umNL-gKGVEpFGtXTIeKMBAF3Yzs0JmB64I4I5sHg4=",
      projectLink: "http://jerry-e-portfolio.netlify.app",
  },
];

function App() {
  
      useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
    });
  }, []);
  return (
    
    <div className="container ">
      <header className="header" data-aos="fade-down">
        <div className="logo-contanier">
          <a href="">
            <img src="/Logo.png" alt="Logo" className="logoCard" />
          </a>
        </div>
        <div className="content-container"data-aos="zoom-in" data-aos-delay="200">
          <h1>Student Catalogue 2025</h1>
        </div>
      </header>

      <div className="catalogue" data-aos="fade-up" data-aos-delay="400">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            image={student.image}
            projectLink={student.projectLink}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
