'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Top Players', href: '/topplayers'}, 
    { name: 'Registro Jugadores', href: '/player' },
  ];

  return React.createElement('header', { className: 'bg-gray-100 p-4' },
    React.createElement('nav', { className: 'flex justify-center space-x-4' },
      navItems.map((item) => 
        React.createElement(Link, {
          key: item.href,
          href: item.href,
          className: `px-3 py-2 rounded-md ${pathname === item.href ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`
        }, item.name)
      )
    )
  );
}