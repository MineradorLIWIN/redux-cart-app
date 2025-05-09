
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaAddressCard } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub className="text-2xl" />,
    url: 'https://github.com/Abhishek-soni6904',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    url: 'https://www.linkedin.com/in/abhishek-soni-662028331/',
    label: 'LinkedIn',
  },
  {
    icon: <FaInstagram className="text-2xl" />,
    url: 'https://www.instagram.com/_abhishek._.soni_/',
    label: 'Instagram',
  },
  {
    icon: <FaAddressCard className="text-2xl" />,
    url: 'https://abhishek-soni6904.github.io/Abhishek-Portfolio/',
    label: 'Portfolio',
  },
];

function SocialIcons() {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      {socialLinks.map(({ icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hover:text-emerald-400 transition-colors"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;