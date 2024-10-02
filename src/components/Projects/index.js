import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const elementItems = [
  {
    name: "Resume Builder",
    link: "https://madhuresume.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716975324/wer_othuk2.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Create and customize your professional resume effortlessly. A user-friendly interface to showcase your skills and experience."
  },
  {
    name: "Foodmunch",
    link: "https://f2foodmunch.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021757/foodmunch_euy28y.png",
    languagesUsed: "HTML, CSS",
    description: "Discover and order delicious food from local restaurants. A simple and intuitive platform for food lovers."
  },
  {
    name: "Chatbot",
    link: "https://chatbotmadhuu.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021761/charbot_hs2ysi.png",
    languagesUsed: "HTML, CSS, JS",
    description: "An interactive chatbot that engages users with fun conversations. Built to simulate human-like responses."
  },
  {
    name: "Find The Number",
    link: "https://f2randnum.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021770/gamerand_fdnaej.png",
    languagesUsed: "HTML, CSS, JS",
    description: "A fun game where players guess a randomly generated number. Great for sharpening your guessing skills!"
  },
  {
    name: "ToDo List",
    link: "https://madhutodolist1.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021786/todo_svjabn.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Stay organized with this easy-to-use ToDo list application. Manage tasks and boost your productivity."
  },
  {
    name: "Random Font",
    link: "https://madhusrandom.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021851/randomfont_lipfgo.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Generate random fonts to spice up your text. Explore various typography styles with a click!"
  },
  {
    name: "Wikipedia Search",
    link: "https://wikisearchf2.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021872/wiki_akrqla.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Search Wikipedia articles seamlessly. Access a wealth of information with just a few clicks."
  },
  {
    name: "Student Form",
    link: "https://madhuform1.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021811/form_eovoif.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Fill out and submit a student information form easily. Designed for quick data entry and retrieval."
  },
  {
    name: "Search Country",
    link: "https://f2searchcountry.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021858/country_dswclt.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Quickly search for country information with a simple interface. Discover facts and details about countries worldwide."
  },
  {
    name: "Fact for Num",
    link: "https://f2factfornum.ccbp.tech/",
    imglink: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_16:9/v1716021864/fact_mop8dj.png",
    languagesUsed: "HTML, CSS, JS",
    description: "Enter a number and receive interesting facts about it. A fun way to learn while interacting with numbers!"
  }
];

const Projects = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="Projects">
      <div className="fullbg">
        <Slider {...settings} className="items">
          {elementItems.map((eachItem, index) => (
            <div key={index} className= {props.darkMode ? "text-item2" : "text-item1"}>
              <img
                src={eachItem.imglink}
                alt={eachItem.name}
                className="project-image"
              />
              <h2>{eachItem.name}</h2>
              <p>{eachItem.languagesUsed}</p>
              <a href={eachItem.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
          ))}
        </Slider>
        <div className="top-pj">
          <h2 className={props.darkMode ? "top-projects1" : "top-projects2"}>Top Projects</h2>
          <div className="project-list">
            {elementItems.map((eachItem, index) => (
              <div key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                {index % 2 === 0 ? (
                  <div className="items12">
                    <img
                      src={eachItem.imglink}
                      alt={eachItem.name}
                      className="project-top-image"
                    />
                    <div className={props.darkMode ? "project-details1" : "project-details"}>
                      <h3>{eachItem.name}</h3>
                      <p>{eachItem.languagesUsed}</p>
                      <p>{eachItem.description}</p>
                      <a href={eachItem.link} target="_blank" rel="noopener noreferrer">
                        Visit Project
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className= "items11">
                    <div className={props.darkMode ? "project-details1" : "project-details"}>
                      <h3>{eachItem.name}</h3>
                      <p>{eachItem.languagesUsed}</p>
                      <p>{eachItem.description}</p>
                      <a href={eachItem.link} target="_blank" rel="noopener noreferrer">
                        Visit Project
                      </a>
                    </div>
                    <img
                      src={eachItem.imglink}
                      alt={eachItem.name}
                      className="project-top-image"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
