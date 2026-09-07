"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { JourneyTrail } from "./JourneyTrail";
import styles from "./OurJourneySection.module.css";

export function OurJourneySection() {
  const t = useTranslations();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.storyScroll} data-journey-scroll>
        <div className={styles.headerFlow}>
          <header className={styles.header}>
            <p className={styles.routeStamp}>
              {t("journey.stampLeft")} <span aria-hidden="true" /> {t("journey.stampRight")}
            </p>
            <h2>
              <span>{t("journey.titleLead")}</span> {t("journey.title")}
            </h2>
            <p className={styles.intro}>{t("journey.intro")}</p>
          </header>
        </div>
        <div className={styles.storyStage}>
          <div aria-hidden="true" className={styles.photoStage}>
            <div className={styles.photoPrint}>
              <Image alt="" fill priority sizes="(min-width: 768px) 62rem, 92vw" src="/photos/our-journey-background.jpg" />
              <div className={styles.photoFade} />
            </div>
          </div>
          <div className={styles.inner}>
            <div className={styles.canvasWrap}>
              <JourneyTrail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
