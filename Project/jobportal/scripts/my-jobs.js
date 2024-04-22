const jobs = [
  {
    job_name: "Frontend Developer",
    job_type: "Software Engineering",
    job_description:
      "Develop user-facing features using HTML, CSS, and JavaScript",
    job_salary: 80000,
  },
  {
    job_name: "Backend Developer",
    job_type: "Software Engineering",
    job_description: "Build server-side logic and integrate front-end elements",
    job_salary: 85000,
  },
  {
    job_name: "UI/UX Designer",
    job_type: "Design",
    job_description:
      "Create intuitive user interfaces and user experience designs",
    job_salary: 75000,
  },
  {
    job_name: "Data Scientist",
    job_type: "Data Science",
    job_description: "Analyze complex data sets and develop predictive models",
    job_salary: 90000,
  },
];

function displayJobs() {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  jobs.forEach((job) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="job">
            <div class="job-container">
              <div class="job-info">
                <h2>${job.job_name}</h2>
                <p><strong>Type:</strong> ${job.job_type}</p>
                <p><strong>Description:</strong> ${job.job_description}</p>
                <p><strong>Salary:</strong> $${job.job_salary.toLocaleString()}</p>
                </div>
                <div class="buttons">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
                </div>              
            </div>
            </div>
        `;
    jobList.appendChild(li);
  });
}

window.onload = displayJobs;
