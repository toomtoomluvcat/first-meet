import React, { CSSProperties } from "react";
import Image from "next/image";
import styles from "./linkBox.module.scss";

export interface LinkBoxProps {
  Color: string;
  Title: string;
  TitleColor?: string;
  Description: string;
  Avaliable?: boolean;
}

function LinkBox({
  Color,
  Title,
  TitleColor = "#FFFFFF",
  Description,
  Avaliable = false,
}: LinkBoxProps) {
  return (
    <div
      style={{ "--blog-color": Color } as CSSProperties}
      className={styles.blog}
    >
      <div
        style={{ "--blog-text-color": TitleColor } as CSSProperties}
        className={styles.blog_text}
      >
        <h1>{Title}</h1>
        <p>{Description}</p>
      </div>
      <div className={styles.blog_container_action}>
        <Image
          className={styles.blog_action}
          src={"/landing/arrow_45angle.svg"}
          width={100}
          height={100}
          alt="action"
        ></Image>
      </div>
    </div>
  );
}

export default LinkBox;
