import Link from "next/link";
import { Instagram, Linkedin, MessageCircleMore } from "lucide-react";

export default function Footer() {
  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Serviços", href: "/servics" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t bg-white text-sm text-gray-600 mt-auto">
     <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 ">
        {/* Logo e slogan */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-semibold text-gray-800">
            Logo
          </Link>
          <p className="mt-1">Slogan da empresa aqui</p>
        </div>

        {/* Navegação */}
        <nav className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Navegação</h4>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociais */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Siga-nos</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.instagram.com/suaempresa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/suaempresa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:text-black transition-colors" />
            </a>
            <a
              href="https://wa.me/seunumerowhatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircleMore className="w-5 h-5 hover:text-black transition-colors" />
            </a>
          </div>
        </div>
        
      </div>

      {/* Direitos reservados */}
      <div className="border-t pt-4 pb-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Logo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
