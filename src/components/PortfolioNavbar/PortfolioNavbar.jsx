"use client";

import { Navbar } from "@courtneyring/components-library";
import Logo from "../Logo/Logo.jsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from './PortfolioNavbar.module.scss';

const PortfolioNavbar = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(() => (pathname === "/" ? true : false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };
    if (pathname === "/") {
      handleScroll();

      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      links={[
        { label: "Portfolio", value: "/" },
        { label: "About", value: "/about" },
        { label: "Contact", value: "/contact" },
      ]}
      logoComponent={<Logo />}
      hidden={false}
      defaultDirection="down"
      className={styles.container}
    ></Navbar>
  );
};

export default PortfolioNavbar;
