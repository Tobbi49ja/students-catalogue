import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import StudentCard from "./components/StudentCard";



const students = [
  {
    name: "Tobbi",
    age: 23,
    image:
      "/src/assets/tobbi.jpg",
      projectLink: "https://reactlogistics.onrender.com/",
  },
  {
    name: "Maria Garcia",
    age: 24,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  },
  {
    name: "David Chen",
    age: 23,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
  },
  {
    name: "Sophie Williams",
    age: 21,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
  },
  {
    name: "Marcus Johnson",
    age: 25,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
  },
  {
    name: "Aisha Patel",
    age: 26,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop",
  },
  {
    name: "Ryan Mitchell",
    age: 27,
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=300&fit=crop",
  },
];

function App() {
  
      useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true, // only animate once
    });
  }, []);
  return (
    
    <div className="container ">
      <header className="header" data-aos="fade-down">
        <div className="logo-contanier">
          <a href="">
            <img src="/src/assets/Logo.png" alt="Logo" className="logoCard" />
          </a>
        </div>
        <div className="content-container"data-aos="zoom-in" data-aos-delay="200">
          <h1>Student Catalogue 2025</h1>
        </div>
      </header>

      <div className="catalogue" >
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
    </div>
  );
}

export default App;
