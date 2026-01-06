import React from "react";
import logo from "../../assets/Logo.png.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <>
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

      <main>{children}</main>

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
    </>
  );
};

export default Layout;
