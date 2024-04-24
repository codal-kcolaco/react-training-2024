import React, { useState, useEffect } from "react";
import JobBackground from "./assets/create-job-removebg-preview.png";
import SearchIcon from "./assets/icons/search.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <section className="banner">
        <h2>Find Your Dream Job</h2>
        <p className="subtitle">Start your career journey today!</p>
        <a href="jobs" className="btn">
          Browse Jobs
        </a>
      </section>

      <section className="card">
        <div className="card-internal">
          <div className="container-description">
            <img loading="lazy" src={JobBackground} width="50%" alt="" />
            <h4>Create a job easily</h4>
            <p>Hiring employees is just a few steps away!</p>
          </div>
          <div className="container-btn">
            <a href="post-job" className="btn">
              Create a Job
            </a>
          </div>
        </div>
      </section>

      <section className="job-search-home-container">
        <h1>Search your jobs using our advanced search engine</h1>
        <p>Your dream job is near</p>
        <div className="job-search-home-bar-container">
          <input
            className="job-search-home-bar"
            type="text"
            placeholder="Search for your jobs"
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

      <section class="job-list-home-section">
        <h1>Filter based on technologies</h1>
        <div class="job-list-home-section-grid">
          <div class="home-chip">
            <img
              src="https://learn.microsoft.com/en-us/media/logos/logo_python.svg"
              alt="python"
              width="96"
              height="96"
            />
            Python
          </div>
          <div class="home-chip">
            <img
              src="https://learn.microsoft.com/en-us/media/logos/logo_Go-lightblue.svg"
              alt="go"
              width="96"
              height="96"
            />
            Golang
          </div>
          <div class="home-chip">
            <img
              src="https://learn.microsoft.com/en-us/media/logos/logo_js.svg"
              alt="JavaScript"
              width="96"
              height="96"
            />
            JavaScript
          </div>
          <div class="home-chip">
            <img
              src="https://learn.microsoft.com/en-us/media/logos/logo_java.svg"
              alt="java"
              width="96"
              height="96"
            />
            Java
          </div>
          <div class="home-chip">
            <img
              src="https://learn.microsoft.com/en-us/azure/media/index/net-logo.svg"
              alt=".net"
              width="96"
              height="96"
            />
            .NET
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
