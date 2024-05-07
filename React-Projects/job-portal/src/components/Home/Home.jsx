import React from "react";
import "./Home.scss";
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
      <section className="banner">
        <h2>{bannerContent.title}</h2>
        <p className="subtitle">{bannerContent.subtitle}</p>
        <a href="jobs" className="btn">
          {bannerContent.button}
        </a>
      </section>

      <section className="card">
        <div className="card-internal">
          <div className="container-description">
            <img loading="lazy" src={JobBackground} width="50%" alt="" />
            <h4>{jobCardContent.title}</h4>
            <p>{jobCardContent.description}</p>
          </div>
          <div className="container-btn">
            <a href="post-job" className="btn">
              {jobCardContent.button}
            </a>
          </div>
        </div>
      </section>

      <section className="job-search-home-container">
        <h1>{searchContent.title}</h1>
        <p>{searchContent.subtitle}</p>
        <div className="job-search-home-bar-container">
          <input
            className="job-search-home-bar"
            type="text"
            placeholder={searchContent.placeholder}
          />
          <button className="search-home-button">
            <img
              loading="lazy"
              className="search-home-icon"
              src={SearchIcon}
              alt="search"
            />
          </button>
        </div>
      </section>

      <section className="job-list-home-section">
        <h1>{filterContent.filterTitle}</h1>
        <div className="job-list-home-section-grid">
          {filterTechnologies.map((tech) => (
            <div key={tech.id} className="home-chip">
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
