'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { DialogTitle } from './ui/dialog';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Serviços', href: '/servics' },
  { label: 'Contato', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-gray-800">
          Logo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive ? 'text-pink-400' : 'text-gray-700 hover:text-pink-400'
              }`}
            >
              {item.label}
            </Link>
          );})}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
                  {/* Aqui está o título necessário */}
              <DialogTitle className="sr-only">Menu de navegação</DialogTitle>

              <div className="flex flex-col justify-center items-center gap-4 mt-6">
                {navItems.map((item) => {
const isActive = pathname === item.href;
return (
                  <Link
                    key={item.href}
                    href={item.href}
                  className={`text-sm font-medium transition-colors ${
                isActive ? 'text-pink-400' : 'text-gray-700 hover:text-pink-400'
              }`}
            >
                    {item.label}
                  </Link>
                );})}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
