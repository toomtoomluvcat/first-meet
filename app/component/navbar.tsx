import React from "react";
import styles from "./coponent.module.scss";
import Link from "next/link";

export interface MenuNav {
  Menu: string;
  Href: string;
}

interface NavbarProps {
  LinkUrl: MenuNav[];
}

function Navbar({ LinkUrl }: NavbarProps) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>FirstMeet</div>
      <div className={styles.navbar_menu}>
        {LinkUrl.map((item, index) => (
          <p key={index}>
            <Link href={item.Href}>{item.Menu}</Link>
          </p>
        ))}
      </div>
      <div className={styles.navbar_action}>Login</div>
    </div>
  );
}

export default Navbar;
