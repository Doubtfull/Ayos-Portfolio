import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayo</h1>
        <p className={styles.description}>
        A tech-savvy high school student passionate about coding, aiming to become a computer engineer.<br/>Skilled in web development and programming, they are eager to keep learning and building for the future.
        </p>
        <a href="https://flowcv.com/resume/j4rfwmqf3a" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      </div>
      <img
        src={getImageUrl("hero/Sleeping-Kirby.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
