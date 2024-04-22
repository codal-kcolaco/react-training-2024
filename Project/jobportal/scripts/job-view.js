import jobData from "../data/job-data.js";

const jobDetailsCard = document.getElementById("job-details-card");

const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("id");

const job = jobData.find(
  (job) => job.name.toLowerCase().replace(/\s/g, "-") === jobId
);

function generateJobDetailsHTML(job) {
  return `
      <img src="${job.image}" alt="${job.name}" />
      <div class="job-details">
        <h1>${job.name}</h1>
        <p>${job.description}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Ratings:</strong> ${job.ratings}</p>
        <p><strong>Reviews:</strong> ${job.reviews}</p>
        <p><strong>Technology:</strong> ${job.technology}</p>
      </div>
    `;
}

if (job) {
  const jobDetailsHTML = generateJobDetailsHTML(job);
  jobDetailsCard.innerHTML = jobDetailsHTML;
} else {
  jobDetailsCard.innerHTML = "<p>Job not found</p>";
}
