import jobData from "../data/job-data.js";

const jobDetailsCard = document.getElementById("job-view-card");

const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("id");

const job = jobData.find(
  (job) => job.name.toLowerCase().replace(/\s/g, "-") === jobId
);

function generateJobDetailsHTML(job) {
  return `
        <div class=job-title-container>
        <img src="${job.image}" alt="${job.name}" />
          <div class="job-details">
            <h1>${job.name}</h1>
            <p><i class="fa-solid fa-star"></i> ${job.ratings}</p>
            <p>(${job.reviews} reviews)</p>
          </div>
        </div>
        <div class="job-overview">
        <strong>About ${job.name}</strong>
        <p>${job.description}</p>   
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Technology: <img class="tech-img" src="https://learn.microsoft.com/en-us/media/logos/logo_python.svg" alt="Technology Logo" /></strong> ${
          job.technology
        }</p>
        </div>   
        <div class="job-openings-card">     
        <div class="job-openings">
        <h2>Job Openings</h2>
        <ul>
          ${generateJobOpeningsList()}
        </ul>
      </div>
      </div>
    `;
}

if (job) {
  const jobDetailsHTML = generateJobDetailsHTML(job);
  jobDetailsCard.innerHTML = jobDetailsHTML;
} else {
  jobDetailsCard.innerHTML = "<p>Job not found</p>";
}

function generateJobOpeningsList() {
  const jobOpeningsData = [
    {
      name: "Frontend Developer",
      location: "San Francisco",
      experience: "2+ years",
    },
    { name: "Backend Engineer", location: "New York", experience: "3+ years" },
    { name: "UI/UX Designer", location: "London", experience: "5+ years" },
  ];

  return jobOpeningsData
    .map(
      (job) => `
    <li>
      <strong>${job.name}</strong>
      <div class="job-openings-details">
        <p>${job.location}</p>
        <p>${job.experience}</p>
      </div>
      <button class="apply-now-button">Apply Now</button>
    </li>
  `
    )
    .join("");
}
