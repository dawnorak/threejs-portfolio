import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hello! I am <span className="font-semibold">Vaigarai</span> 👋.
            <br />
            A Computer Science student from India.
        </h1>
    ),
    2: (
        <InfoBox 
            text="I am a passionate web developer and a tech enthusiast. I love to learn new technologies and build cool stuff."
            link="/portfolio/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Been a part of many exciting projects in this journey of learning, curious about them?"
            link="/portfolio/projects"
            btnText="My Projects"
        />
    ),
    4: (
        <InfoBox 
            text="Need to discuss about my projects or just looking for a friend? Feel free to reach out to me."
            link="/portfolio/contact"
            btnText="Contact Me"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;