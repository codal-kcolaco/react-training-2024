import React, { useEffect } from "react";
import jobData from "./data/job-data";
import "./styles//Jobs.css";

function Jobs() {
  useEffect(() => {
    const jobListSection = document.querySelector(".job-list-section-grid");
    const technologyCheckboxes = document.querySelectorAll(
      'input[name="technology"]'
    );
    const locationCheckboxes = document.querySelectorAll(
      'input[name="location"]'
    );

    const createJobListing = (job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");

      const jobLink = document.createElement("a");
      jobLink.href = `job-view?id=${encodeURIComponent(
        job.name.toLowerCase().replace(/\s/g, "-")
      )}`;

      const chip = document.createElement("div");
      chip.classList.add("chip");

      const chipImg = document.createElement("div");
      chipImg.classList.add("chip-img");
      const img = document.createElement("img");
      img.src = job.image;
      img.alt = job.name;
      chipImg.appendChild(img);

      const chipDescription = document.createElement("div");
      chipDescription.classList.add("chip-description");
      const h3 = document.createElement("h3");
      h3.textContent = job.name;
      const p = document.createElement("p");
      p.innerHTML = `<i class="fa-solid fa-star"></i> ${job.ratings} (${job.reviews} reviews)`;
      chipDescription.appendChild(h3);
      chipDescription.appendChild(p);

      chip.appendChild(chipImg);
      chip.appendChild(chipDescription);

      jobLink.appendChild(chip);
      jobCard.appendChild(jobLink);

      return jobCard;
    };

    const displayJobListings = () => {
      jobData.forEach((job) => {
        const chip = createJobListing(job);
        jobListSection.appendChild(chip);
      });
    };

    const filterJobs = () => {
      const selectedTechnologies = Array.from(technologyCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      const selectedLocations = Array.from(locationCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      const filteredJobs = jobData.filter((job) => {
        return (
          (selectedTechnologies.length === 0 ||
            selectedTechnologies.includes(job.technology.toLowerCase())) &&
          (selectedLocations.length === 0 ||
            selectedLocations.includes(job.location.toLowerCase()))
        );
      });

      jobListSection.innerHTML = "";
      filteredJobs.forEach((job) => {
        const chip = createJobListing(job);
        jobListSection.appendChild(chip);
      });
    };

    technologyCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterJobs);
    });

    locationCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterJobs);
    });

    displayJobListings();

    return () => {
      technologyCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", filterJobs);
      });

      locationCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", filterJobs);
      });
    };
  }, []);

  return (
    <div class="job-list-container">
      <section class="job-filter-section">
        <h1>Filter</h1>
        <hr />
        <h4>Technology</h4>
        <div class="filter-container">
          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="python"
              value="python"
              name="technology"
            />
            <label for="python">Python</label>
          </div>

          <div class="filter-checkbox">
            <input type="checkbox" id="java" value="java" name="technology" />
            <label for="java">Java</label>
          </div>

          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="cplusplus"
              value="cplusplus"
              name="technology"
            />
            <label for="cplusplus">C++</label>
          </div>

          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="javascript"
              value="javascript"
              name="technology"
            />
            <label for="javascript">JavaScript</label>
          </div>
          <div class="filter-checkbox">
            <input type="checkbox" id="c#" value="c#" name="technology" />
            <label for="c#">C#</label>
          </div>
          <div class="filter-checkbox">
            <input type="checkbox" id="ruby" value="ruby" name="technology" />
            <label for="ruby">Ruby</label>
          </div>
        </div>
        <h4>Location</h4>
        <div class="filter-container">
          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="ahmedabad"
              value="ahmedabad"
              name="location"
            />
            <label for="ahmedabad">Ahmedabad</label>
          </div>

          <div class="filter-checkbox">
            <input type="checkbox" id="surat" value="surat" name="location" />
            <label for="surat">Surat</label>
          </div>

          <div class="filter-checkbox">
            <input type="checkbox" id="goa" value="goa" name="location" />
            <label for="goa">Goa</label>
          </div>

          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="coimbatore"
              value="coimbatore"
              name="location"
            />
            <label for="coimbatore">Coimbatore</label>
          </div>

          <div class="filter-checkbox">
            <input
              type="checkbox"
              id="visakhapatnam"
              value="visakhapatnam"
              name="location"
            />
            <label for="visakhapatnam">Visakhapatnam</label>
          </div>

          <div class="filter-checkbox">
            <input type="checkbox" id="jaipur" value="jaipur" name="location" />
            <label for="jaipur">Jaipur</label>
          </div>
        </div>
      </section>
      <section class="job-list-section">
        <div class="job-search-container">
          <input
            class="job-search-input"
            type="text"
            placeholder="Search for your jobs"
          />
          <h1>Jobs</h1>
        </div>
        <div class="job-list-section-grid"></div>
      </section>
    </div>
  );
}

export default Jobs;
