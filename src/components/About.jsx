import React, { useEffect } from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.AboutBackgroundImage', { x: -999, },
            {
                x: 0,
                duration: 1.5,
                rotation: 360,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.about-section-container',
                    //markers: true,
                    start: 'top 80%',
                }
            })
        return () => {
            gsap.killTweensOf('.AboutBackgroundImage')
        }
    }, [])
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img className="AboutBackgroundImage" src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;