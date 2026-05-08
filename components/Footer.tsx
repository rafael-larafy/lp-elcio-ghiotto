import { FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import Logo from "./Logo";

const socialLinks = [
  { href: "#", icon: <FaInstagram />, label: "Lorem" },
  { href: "#", icon: <FaYoutube />, label: "Ipsum" },
  { href: "#", icon: <FaWhatsapp />, label: "Dolor" },
  { href: "#", icon: <FaLinkedin />, label: "Sit" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#012e43] py-14 text-white/70">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height={44} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#9aebff]">
              Lorem ipsum
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#what-is" className="hover:text-[#77e4ff]">Lorem</a></li>
              <li><a href="#for-whom" className="hover:text-[#77e4ff]">Ipsum</a></li>
              <li><a href="#modules" className="hover:text-[#77e4ff]">Dolor</a></li>
              <li><a href="#mentor" className="hover:text-[#77e4ff]">Sit</a></li>
              <li><a href="#pricing" className="hover:text-[#77e4ff]">Amet</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#9aebff]">
              Consectetur
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

            <p className="mt-6 text-xs text-white/50">
              lorem@ipsum.dolor
              <br />
              Sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} Lorem ipsum — dolor sit amet
            consectetur adipiscing. Ut enim ad minim veniam.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#77e4ff]">
              Lorem ipsum
            </a>
            <a href="#" className="hover:text-[#77e4ff]">
              Dolor sit amet
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
