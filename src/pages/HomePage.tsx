import React from "react";
import logo from "../assets/Logo.png.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img33.png";
import img4 from "../assets/4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/Six-C-img1.png";
import img8 from "../assets/Six-C-img2.png";
import img9 from "../assets/Six-C-img3.png";
import img0 from "../assets/Six-C-img4.png";
import profile from "../assets/profile-pic.png";
import guidepic from "../assets/img13.png";
import carpic from "../assets/car.png";
import girlpic from "../assets/girl.png";
import beachpic from "../assets/beach.png";
import shippic from "../assets/ship.png";
import artpic from "../assets/art.png";
import resturantpic from "../assets/resturant.png";
import hotelpic from "../assets/hotels.png";
import carasolepic from "../assets/carasole.png";

import Card from "@/components/card/Card";
import CircleCard from "@/components/card/CircularCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Headset,
  MessageCircleMore,
  FileSpreadsheet,
  Plus,
  Music,
  CircleArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

// Category Color Map to replace c1, c2, c3 etc.
const catColors = {
  green: "bg-[#20bb59]",
  gold: "bg-[#d0a439]",
  yellow: "bg-[#fed358]",
  purple: "bg-[#ca77e7]",
  teal: "bg-[#5bc7c1]",
  red: "bg-[#f52929]",
};

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between px-10 py-4 bg-black md:px-16">
        <div>
          <img src={logo} className="h-10 md:h-13 w-auto" alt="Logo" />
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm uppercase text-white font-semibold">
          {[
            "Activities",
            "Hotels",
            "Beaches",
            "Boating",
            "Tours",
            "Gastronomy",
          ].map((item) => (
            <Link
              key={item}
              className="hover:text-[#d0a439] transition-colors"
              to=""
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="#" className="text-white">
            <Heart className="text-[#d0a439] w-6 h-6" />
          </Link>
          <Link to="#" className="text-white text-sm hidden md:block">
            Login
          </Link>
          <Button className="bg-[#d0a439] hover:bg-[#b88f30] text-black font-bold rounded-sm px-6">
            BOOK TRIP
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 md:py-40"
        style={{ backgroundImage: `url('/src/assets/Hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-serif font-black leading-tight mb-8">
            EVERYTHING <br /> CARTAGENA
          </h1>

          <nav className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Beaches",
              "Accommodations",
              "Boating",
              "Tours",
              "Activities",
              "Gastronomy",
            ].map((tag) => (
              <Link
                key={tag}
                to="#"
                className="bg-white text-black px-4 py-2 text-sm font-bold rounded-sm hover:bg-gray-200"
              >
                {tag}
              </Link>
            ))}
          </nav>

          <div className="flex max-w-2xl mx-auto bg-white rounded-md overflow-hidden p-1">
            <input
              className="flex-grow p-3 text-black outline-none"
              type="text"
              placeholder="Search for Anything"
            />
            <Button className="bg-primary text-white px-6 py-2 font-bold hover:bg-[#b88f30] transition-colors">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="py-12 px-10 md:px-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold uppercase text-black">
          What to do in Cartagena, Colombia
        </h2>
      </div>

      {/* Category Grid */}
      <div className="container mx-auto pb-20 px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Hotels", img: img1, color: catColors.gold },
            { label: "Beaches", img: img2, color: catColors.green },
            { label: "Activities", img: img3, color: catColors.red },
            { label: "Tours & Sightseeing", img: img4, color: catColors.gold },
            { label: "Boat Rentals", img: img5, color: catColors.green },
            { label: "Gastronomy", img: img6, color: catColors.red },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full p-3 text-white font-bold text-center z-10 ${item.color}`}
              >
                {item.label}
              </div>
              <img
                src={item.img}
                className="w-full h-110 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.label}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Masonry-style Section */}
      {/* <section className="py-12 px-10 md:px-16 bg-gray-50"> */}
      <div className=" text-center mb-7 mt-10">
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold uppercase text-black">
          The best of Cartagena, Colombia
        </h2>
      </div>

      <section className="container mx-auto pb-13 px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          {/* Beaches – Tall */}
          <Card
            image={beachpic}
            category="BEACHES"
            title="Best Beaches of Cartagena"
            author="Miguel"
            time="17 min"
            className="row-span-2"
          />

          {/* Restaurants */}
          <Card
            image={resturantpic}
            category="Gastronomy"
            title="The Best Restaurants of Cartagena."
            author="May"
            time="10 min"
          />

          {/* Activities – Tall */}
          <Card
            image={shippic}
            category="ACTIVITIES"
            title="What to do in Cartagena"
            author="Maria"
            time="10 min"
            className="row-span-2"
          />

          {/* Fashion – Tall */}
          <Card
            image={girlpic}
            category="Fashion"
            title="The Best Shopping in Cartagena"
            author="Alejandra"
            time="7 min"
            className="row-span-3"
          />

          {/* Hotels – Circular */}
          <CircleCard
            image={hotelpic}
            category="HOTELS"
            title="Top Hotels of Cartagena"
            author="Natalia"
            time="21 min"
          />

          {/* Street Art */}
          <Card
            image={artpic}
            category="Art"
            title="The Best Street Art of Cartagena"
            author="Juan Pablo"
            time="5 min"
          />
        </div>
      </section>
      {/* </section> */}

      {/* Newsletter Promo (Desktop) */}
      <div className="hidden md:block py-24 relative bg-[url('Rectangle.png')]">
        {/* Decorative background waves (optional SVG or image) */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 items-center gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-5xl font-serif font-extrabold leading-tight mb-6">
                How to thrive in Cartagena, Colombia like a local.
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hidden gems, staying safe, maneuvering around the city, watching
                out for scams, negotiating, what to pack. The ultimate guide for
                Gringos.
              </p>

              <a
                href="https://lacarta.co/cartagena/resources/"
                className="inline-block bg-[#20bb59] text-white px-6 py-3 rounded-lg font-semibold text-sm"
              >
                DOWNLOAD TRAVEL GUIDE
              </a>
            </div>

            {/* RIGHT IMAGE STACK */}
            <div className="relative flex justify-center">
              <img
                src={carpic}
                alt="Cartagena Travel Guide"
                className="w-[320px] relative z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center uppercase mb-16">
          Free tools for your journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <Headset />,
              label: "Service Center",
              color: catColors.gold,
            },
            {
              icon: <MessageCircleMore />,
              label: "Chat Support",
              color: catColors.green,
            },
            {
              icon: <FileSpreadsheet />,
              label: "Checklists",
              color: catColors.red,
            },
            { icon: <Plus />, label: "Guides", color: catColors.gold },
            { icon: <Music />, label: "Playlists", color: catColors.green },
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 pt-12 relative text-center"
            >
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 p-4 rounded-xl text-white shadow-lg ${tool.color}`}
              >
                {tool.icon}
              </div>
              <h5 className="font-bold text-lg mb-4">{tool.label}</h5>
              <p className="text-sm text-gray-500 mb-6">
                Need help during your time in Cartagena?
              </p>
              <button
                className={`w-full py-2 rounded-lg text-white font-bold ${tool.color}`}
              >
                Go
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <img src={logo} className="w-48 mb-6" alt="" />
            <p className="text-gray-400 leading-relaxed mb-8">
              We are native Cartagenero Costeños passionate about everything
              Cartagena. Our magazine is here to help you discover the marvels
              of Cartagena la Heroica.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    <Icon size={20} />
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase mb-6">About</h5>
            <ul className="space-y-3 text-gray-400">
              {["About Us", "Contact", "Our Culture", "Work With Us"].map(
                (l) => (
                  <li key={l}>
                    <Link to="#" className="hover:text-white">
                      {l}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase mb-6">Help</h5>
            <ul className="space-y-3 text-gray-400">
              {["FAQ", "Travel Guide", "Resources", "Safety Map"].map((l) => (
                <li key={l}>
                  <Link to="#" className="hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#71adf6] p-6 rounded-2xl text-black text-center">
            <h4 className="font-bold uppercase">Cartagena, CO</h4>
            <p className="text-sm mb-4">Dec 19, 2025</p>
            <div className="text-4xl font-black mb-2">30°C</div>
            <p className="font-semibold uppercase tracking-widest">
              Few Clouds
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © LaCarta 2023 – 2025. All rights reserved | Privacy Policy | Terms &
          Conditions
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
