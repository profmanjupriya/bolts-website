import React from "react";
import Navbar from './Navbar'

import teambuilding1 from "../assets/gallery/teamBuilding1.jpg";
import teambuilding2 from "../assets/gallery/teamBuilding2.jpg";
import teambuilding3 from "../assets/gallery/teamBuilding3.jpg";
import teambuilding4 from "../assets/gallery/TeamBuilding4.png";
import teambuilding5 from "../assets/gallery/TeamBuilding5.png";
import teambuilding6 from "../assets/gallery/TeamBuilding6.png";
import teambuilding7 from "../assets/gallery/TeamBuilding7.png";

const galleryImages = [
  { caption: "Building the robot!", img: teambuilding1 },
  { caption: "Team Workshop!", img: teambuilding2 },
  { caption: "Prototype Zone!", img: teambuilding3 },
  { caption: "Team Building 4", img: teambuilding4 },
  { caption: "Team Building 5", img: teambuilding5 },
  { caption: "Team Building 6", img: teambuilding6 },
  { caption: "Team Building 7", img: teambuilding7 },
];

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <section className="py-16 px-4 bg-boltsBlack min-h-screen">
        <h1 className="text-4xl font-bold text-boltsWhite mb-12 text-center">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 bg-boltsRed text-boltsWhite text-center font-semibold">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
