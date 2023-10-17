import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMastodon,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-main via-green-500 to-main font-first  py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-black items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          <h3 className="text-2xl">Av. Elif Nur Çalışan</h3>
          <div>
            <ul className="space-y-2">
              <li className="hover:text-green-600 ">Aile Hukuku</li>
              <li className="hover:text-green-600 ">Blog</li>
              <li className="hover:text-green-600 ">Sıkça Sorulan Sorular</li>
              <li className="hover:text-green-600 ">Niye Biz?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline hover:text-green-600  text-black font-bold mb-1">
              Bize Ulaşın
            </h3>
            <div className="space-y-1">
              <p>Neorama Plaza - Yaşam Caddesi</p>

              <p>13/65-66-68</p>

              <p>Sögütözü / Ankara</p>
            </div>
            <p className="mb-2 mt-2 hover:text-green-600 ">
              <FaPhone className="inline-block mr-2" /> +90 530 971 1962
            </p>

            <div className="flex mt-4">
              <a
                href="https://www.linkedin.com/company/tecvity"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaLinkedin className="hover:text-green-600" />
              </a>
              <a
                href="https://twitter.com/tecvity"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaTwitter className="hover:text-green-600" />
              </a>
              <a
                href="https://www.youtube.com/channel/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaYoutube className="hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
