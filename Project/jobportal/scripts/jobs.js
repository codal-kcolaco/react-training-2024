import jobData from "../data/job-data.js";

const jobListSection = document.querySelector(".job-list-section-grid");
const technologyCheckboxes = document.querySelectorAll(
  'input[name="technology"]'
);
const locationCheckboxes = document.querySelectorAll('input[name="location"]');

function createJobListing(job) {
  const jobCard = document.createElement("div");
  jobCard.classList.add("job-card");

  const jobLink = document.createElement("a");
  jobLink.href = `job-view.html?id=${encodeURIComponent(
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
}

function displayJobListings() {
  jobData.forEach(function (job) {
    const chip = createJobListing(job);
    jobListSection.appendChild(chip);
  });
}

function filterJobs() {
  const selectedTechnologies = Array.from(technologyCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedLocations = Array.from(locationCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const filteredJobs = jobData.filter((job) => {
    console.log(selectedTechnologies.length);
    return (
      (selectedTechnologies.length === 0 ||
        selectedTechnologies.includes(job.technology.toLowerCase())) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(job.location.toLowerCase()))
    );
  });

  jobListSection.innerHTML = "";
  filteredJobs.forEach(function (job) {
    const chip = createJobListing(job);
    jobListSection.appendChild(chip);
  });
}

technologyCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", filterJobs);
});

locationCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", filterJobs);
});

displayJobListings();
