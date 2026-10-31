const jobs = [
  {
    department: 'PROGRAMMING',
    title: 'Senior Programmer',
    location: 'Pampanga, San Fernando City',
    link: 'Application.html'
  },
  {
    department: 'ART',
    title: '3D Artist',
    location: 'Pampanga, Angeles City',
    link: 'Application2.html'
  }
];

const socialLinks = [
  {
    name: 'TWITTER',
    handle: '@MissingYouStudios',
    image: 'https://cdn-icons-png.flaticon.com/512/2496/2496110.png'
  },
  {
    name: 'FACEBOOK',
    handle: '@AlwaysMissingYouStudios',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    name: 'INSTAGRAM',
    handle: '@MissingYouStudios',
    image: 'https://png.pngtree.com/element_our/sm/20180509/sm_5af29f0006117.jpg'
  }
];

function renderJobs() {
  const jobList = document.querySelector('[data-job-list]');

  if (!jobList) {
    return;
  }

  jobList.innerHTML = jobs
    .map(
      (job) => `
        <tr>
          <td><strong>${job.department}</strong> - ${job.title}</td>
          <td>${job.location}</td>
          <td><a href="${job.link}" class="apply-btn">Apply now</a></td>
        </tr>
      `
    )
    .join('');
}

function renderSocialLinks() {
  const container = document.querySelector('[data-social-list]');

  if (!container) {
    return;
  }

  container.innerHTML = socialLinks
    .map(
      (item) => `
        <div class="social-item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.handle}</p>
        </div>
      `
    )
    .join('');
}

function myFunction() {
  const navLinks = document.getElementById('nav-links');

  if (!navLinks) {
    return;
  }

  const isVisible = navLinks.style.display === 'block';
  navLinks.style.display = isVisible ? 'none' : 'block';
}

function setupNavigation() {
  const menuButton = document.querySelector('.icon');

  if (!menuButton) {
    return;
  }

  menuButton.addEventListener('click', myFunction);
}

function setupApplicationForm() {
  const form = document.querySelector('.application-form form');
  const resumeInput = document.getElementById('resume');
  const fileNameLabel = document.getElementById('file-name');

  if (form) {
    form.addEventListener('submit', (event) => {
      const confirmed = window.confirm('Are you sure you want to submit your application?');

      if (!confirmed) {
        event.preventDefault();
        return;
      }

      window.alert('Your application has been submitted successfully!');
    });
  }

  if (resumeInput && fileNameLabel) {
    resumeInput.addEventListener('change', () => {
      const file = resumeInput.files && resumeInput.files[0];
      fileNameLabel.textContent = file ? file.name : 'No file chosen';
    });
  }
}

function init() {
  renderJobs();
  renderSocialLinks();
  setupNavigation();
  setupApplicationForm();
}

document.addEventListener('DOMContentLoaded', init);
