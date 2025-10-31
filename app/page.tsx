import React from "react";
import Navbar, { MenuNav } from "./component/navbar";
import Image from "next/image";
import styles from "./page.module.scss";
import "./globals.scss";
import LinkBox, { LinkBoxProps } from "./component/linkBox";

function LandingPage() {
  const navUrl: MenuNav[] = [
    { Menu: "Home", Href: "./" },
    { Menu: "About", Href: "./about" },
    { Menu: "Contact", Href: "./contact" },
  ];

  const linkbox: LinkBoxProps[] = [
    {
      Color: "#74B6A8",
      Title: "PINBOARD",
      TitleColor: "#FFFFFF",
      Description: "Lorem ipsum dolor sit.",
      Avaliable: true,
    },
  ];

  return (
    <div>
      <Navbar LinkUrl={navUrl}></Navbar>
      <div className={styles.landing_container}>
        <div className={styles.landing}>
          <Image
            className={styles.welcome_image}
            height={1000}
            width={1000}
            quality={100}
            alt="center"
            src={"/landing/center.svg"}
          ></Image>
          <div className={styles.content}>
            <div className={styles.star}>
              <Image
                height={30}
                width={30}
                quality={100}
                alt="star"
                src={"/landing/star.svg"}
              ></Image>
              <Image
                height={30}
                width={30}
                quality={100}
                alt="star"
                src={"/landing/star.svg"}
              ></Image>
              <Image
                height={30}
                width={30}
                quality={100}
                alt="star"
                src={"/landing/star.svg"}
              ></Image>
            </div>
            <div className={styles.blog}>
              <div className={styles.blog_left}>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className={styles.blog_right}>
                <LinkBox
                  Color={linkbox[0].Color}
                  Title={linkbox[0].Title}
                  Description={linkbox[0].Description}
                ></LinkBox>
                <LinkBox
                  Color={linkbox[0].Color}
                  Title={linkbox[0].Title}
                  Description={linkbox[0].Description}
                ></LinkBox>
                <LinkBox
                  Color={linkbox[0].Color}
                  Title={linkbox[0].Title}
                  Description={linkbox[0].Description}
                ></LinkBox>
                <LinkBox
                  Color={linkbox[0].Color}
                  Title={linkbox[0].Title}
                  Description={linkbox[0].Description}
                ></LinkBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
