import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {HiClipboardCheck} from 'react-icons/hi'
import img from "../../pics/img.jpg";
import img2 from "../../pics/img2.jpg";
import img3 from "../../pics/img3.jpg";
import img4 from "../../pics/img4.jpg";
import img5 from "../../pics/img5.jpg";
import img6 from "../../pics/img6.jpg";
import img7 from "../../pics/img7.jpg";
import img8 from "../../pics/img8.jpg";
import img9 from "../../pics/img9.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance,Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle:"Machu Picchu",
    location: "Peru",
    grade: 'CULTURAL RELAX',
    fees: "$600",
    description: 'A mountain in Peru. The place is popular among tourists as the sunrise from the sungate is simply spectacular. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle:"Great Barrier Reef",
    location: "Australia",
    grade: 'CULTURAL RELAX',
    fees: "$700",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum dolorum eius temporibus quasi, maxime, mollitia officiis vero fuga, amet sequi praesentium. Cum molestiae excepturi est exercitationem molestias iusto corporis?"
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle:"Cappadocia",
    location: "Turkey",
    grade: 'CULTURAL RELAX',
    fees: "$800",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis necessitatibus? Provident neque et ipsam nobis voluptates, similique veniam ullam blanditiis aperiam, voluptas beatae doloribus nihil. Exercitationem explicabo omnis cupiditate."
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle:"Guanajuato",
    location: "Mexico",
    grade: 'CULTURAL RELAX',
    fees: "$1100",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque nostrum dolore ratione, expedita minima, temporibus molestias nemo cumque doloribus optio quod corrupti repellat mollitia doloremque amet exercitationem. Suscipit, obcaecati."
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle:"Cinque Terre",
    location: "Italy",
    grade: 'CULTURAL RELAX',
    fees: "$840",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum ad excepturi quae natus, saepe odit quasi facilis vel, optio voluptatem repudiandae! Saepe assumenda corrupti harum laboriosam nulla, rerum ipsum."
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle:"Angkor Wat",
    location: "Cambodia",
    grade: 'CULTURAL RELAX',
    fees: "$790",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo iure omnis commodi officia, dolores totam doloribus sapiente veritatis recusandae eaque provident, vel aperiam expedita ad, quae accusantium delectus atque."
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: 'CULTURAL RELAX',
    fees: "$900",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos consectetur quaerat repellendus velit qui eius at esse unde doloremque eveniet totam quam dolorem a, sunt necessitatibus culpa quod rem."
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle:"Bali Island",
    location: "Indonesia",
    grade: 'CULTURAL RELAX',
    fees: "$500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat suscipit eum odit rem dignissimos amet quis blanditiis, quaerat reiciendis atque corrupti animi, iste sed facilis alias laborum non error ipsa."
  }
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{ fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{ description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          }
          )
         }
      </div>
    </section>
  );
};

export default Main;
