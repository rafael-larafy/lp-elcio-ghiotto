import { FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import Logo from "./Logo";

const socialLinks = [
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
  { href: "#", icon: <FaYoutube />, label: "YouTube" },
  { href: "#", icon: <FaWhatsapp />, label: "WhatsApp" },
  { href: "#", icon: <FaLinkedin />, label: "LinkedIn" },
];

const navLinks = [
  { href: "#pain", label: "O hub tributário" },
  { href: "#what-is", label: "Mentes tributárias" },
  { href: "#for-whom", label: "Como funciona" },
  { href: "#pricing", label: "Diagnóstico" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#012e43] py-14 text-white/70">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height={44} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              O hub tributário que transforma caos fiscal em lucro. Diagnóstico
              completo dos últimos 5 anos em até 40 minutos.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#9aebff]">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#77e4ff]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#9aebff]">
              Acompanhe
            </h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex-center h-10 w-10 rounded-full border border-white/15 text-white/80
                             transition-colors duration-300 hover:border-[#77e4ff] hover:text-[#77e4ff]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} LaraTax. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
