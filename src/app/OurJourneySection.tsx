"use client";

import Image from "next/image";
import { JourneyTrail } from "./JourneyTrail";
import styles from "./OurJourneySection.module.css";

export function OurJourneySection() {
  return (
    <section id="about" className={styles.section}>
      <div aria-hidden="true" className={styles.photoStage}>
        <div className={styles.photoPrint}>
          <Image alt="" fill priority sizes="(min-width: 768px) 62rem, 92vw" src="/photos/our-journey-background.jpg" />
          <div className={styles.photoFade} />
        </div>
      </div>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.routeStamp}>
            You &amp; me <span aria-hidden="true" /> Us
          </p>
          <h2>
            <span>Our</span> journey
          </h2>
          <p className={styles.intro}>A few turns, a lot of laughter, and one shared way home.</p>
        </header>
        <div className={styles.canvasWrap}>
          <JourneyTrail />
        </div>
      </div>
    </section>
  );
}
