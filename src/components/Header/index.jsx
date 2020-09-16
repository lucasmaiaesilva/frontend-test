import React, { useState, useEffect } from 'react';
import Logo from "../../assets/svg/Icon/Logo.svg";
import Menu from "../../assets/svg/Icon/Menu.svg";

const HeaderMobile = () => (
  <div className="flex justify-between">
    <Logo className="w-20 h-20" />
    <Menu className="w-12 h-12 text-fonts-title" />
  </div>
)

const HeaderDesktop = () => (
  <div className="flex justify-between">
    <Logo className="w-20 h-20" />
    <div className="flex flex-grow justify-between">
      <nav>
        <ul className="flex items-center h-full text-2xl text-fonts-title">
          <li className="mx-4">Explore</li>
          <li className="mx-4">Sobre nós</li>
          <li className="mx-4">Seguros</li>
          <li className="mx-4">Hotéis</li>
        </ul>
      </nav>

      <ul className="flex items-center text-2xl text-fonts-title">
        <li className="mx-4">Viagens</li>
        <li className="mx-4">Login</li>
      </ul>
    </div>
  </div>
)

const Header = ({ children }) => {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  const [ width, setWidth ] = useState(initialWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <header className="bg-header-to p-4 mb-64 lg:mb-48">
      <div className="lg:max-w-screen-lg lg:mx-auto">
        {width < 1024 ? (
          <HeaderMobile />
        ): (
          <HeaderDesktop />
        )}
        <h1 className="font-sans text-6xl not-italic font-bold text-fonts-title text-center mt-12 mb-5 lg:mt-24">
          Viaje pelo mundo inteiro
        </h1>
        <div className="font-sans text-3xl not-italic text-fonts-primary text-center mb-8 lg:mb-16">
          Aqui voce encontra os melhores voos do mundo
        </div>
        {children}

      </div>
    </header>
  )
}

export default Header;
