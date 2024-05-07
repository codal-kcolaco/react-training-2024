import React from "react";
import styles from "./Home.module.scss";
import JobBackground from "../../assets/create-job-removebg-preview.png";
import SearchIcon from "../../assets/icons/search.svg";
import {
  bannerContent,
  jobCardContent,
  searchContent,
  filterTechnologies,
  filterContent,
} from "../../data/HomeContent";

function Home() {
  return (
    <div>
      <section className={styles.banner}>
        <h2>{bannerContent.title}</h2>
        <p className={styles.subtitle}>{bannerContent.subtitle}</p>
        <a href="jobs" className={styles.btn}>
          {bannerContent.button}
        </a>
      </section>

      <section className={styles.card}>
        <div className={styles["card-internal"]}>
          <div className={styles["container-description"]}>
            <img loading="lazy" src={JobBackground} width="50%" alt="" />
            <h4>{jobCardContent.title}</h4>
            <p>{jobCardContent.description}</p>
          </div>
          <div className={styles["container-btn"]}>
            <a href="post-job" className={styles.btn}>
              {jobCardContent.button}
            </a>
          </div>
        </div>
      </section>

      <section className={styles["container"]}>
        <h1>{searchContent.title}</h1>
        <p>{searchContent.subtitle}</p>
        <div className={styles["bar-container"]}>
          <input
            className={styles["bar"]}
            type="text"
            placeholder={searchContent.placeholder}
          />
          <button className={styles["search-button"]}>
            <img
              loading="lazy"
              className={styles["search-icon"]}
              src={SearchIcon}
              alt="search"
            />
          </button>
        </div>
      </section>

      <section className={styles["job-list-section"]}>
        <h1>{filterContent.filterTitle}</h1>
        <div className={styles["job-list-section-grid"]}>
          {filterTechnologies.map((tech) => (
            <div key={tech.id} className={styles["chip"]}>
              <img src={tech.logoSrc} alt={tech.name} width="96" height="96" />
              {tech.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
