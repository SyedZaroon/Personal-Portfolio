function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");

  const switchmoon = document.getElementById("switchmoon");
  const switchsun = document.getElementById("switchsun");

  if (document.documentElement.classList.contains("dark")) {
    switchmoon.classList.remove("hidden");
    switchsun.classList.add("hidden");
  } else {
    switchmoon.classList.add("hidden");
    switchsun.classList.remove("hidden");
  }
}

// ==================  Mobile Menu  Start  ====================

let mobileButton = document.getElementById("nav-toggle"); // Corrected variable name
let mobileMenu = document.getElementById("mobilemenu");

mobileButton.addEventListener("click", function () {
  // Corrected event listener target
  if (mobileMenu.classList.contains("-top-[407px]")) {
    mobileMenu.classList.remove("-top-[407px]");
    mobileMenu.classList.add("top-[70px]");
  } else {
    mobileMenu.classList.add("-top-[407px]");
    mobileMenu.classList.remove("top-[70px]");
  }
});

document.addEventListener("click", function (event) {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileButton.contains(event.target)
  ) {
    mobileMenu.classList.add("-top-[407px]");
    mobileMenu.classList.remove("top-[70px]");
  }
});

window.addEventListener("scroll", function () {
  mobileMenu.classList.add("-top-[407px]");
  mobileMenu.classList.remove("top-[70px]");
});

// ==================  Mobile Menu End  ====================

// ==================  Typing Text Start  ====================
const textElement = document.getElementById("typing-text");
const phrases = ["Zaroon Ali", "Shopify Dev", "React Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.innerHTML =
    charIndex === 0 ? "&nbsp;" : currentPhrase.slice(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 500); // Pause before typing next word
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}

document.addEventListener("DOMContentLoaded", () => typeEffect());

// ==================  Typing Text End  ====================

// ==================  Fixed header Start  ====================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    // Add class if scrolled beyond 50px
    header.classList.add("lg:bg-white", "shadow-lg", "lg:dark:bg-dark_600");
  } else {
    header.classList.remove("lg:bg-white", "lg:dark:bg-dark_600");
  }
});

// ==================  Fixed header End  ====================

// ==================  Hobbies Start  ====================

fetch("./json/hobbies.json")
  .then((response) => response.json())
  .then((hobbies) => {
    const container = document.getElementById("hobbies-container");
    hobbies
      .forEach((hobby) => {
        const hobbyDiv = document.createElement("div");
        hobbyDiv.className =
          "flex items-center gap-5 rounded-lg shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 py-4 pl-2 pr-20 group";

        const Divicon = document.createElement("div");
        const icon = document.createElement("i");
        Divicon.className =
          "flex items-center justify-center bg-primary_100 w-12 h-12 rounded-full group-hover:bg-primary  dark:bg-dark_200";
        icon.className = `${hobby.icon} text-lg text-primary group-hover:text-white`;
        Divicon.appendChild(icon);

        const span = document.createElement("span");
        span.className = "text-xl text-black dark:text-white";
        span.textContent = hobby.name;

        hobbyDiv.appendChild(Divicon);
        hobbyDiv.appendChild(span);
        container.appendChild(hobbyDiv);
      })
      .catch((error) => console.error("Error fetching hobbies:", error));
  });

// ==================  Hobbies End  ====================

// ==================  Services section Start  ====================

fetch("./json/service.json")
  .then((response) => response.json())
  .then((services) => {
    const serviceContainer = document.getElementById("service-container");
    services
      .forEach((service) => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className =
          "flex flex-col px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl gap-5 dark:bg-dark_500";

        const icon = document.createElement("i");
        icon.className = `${service.icon} text-3xl text-primary`;

        const span = document.createElement("span");
        span.className = "text-2xl font-semibold text-black dark:text-white";
        span.textContent = service.title;

        const details = document.createElement("p");
        details.className = "text-lg";
        details.textContent = service.description;

        serviceDiv.appendChild(icon);
        serviceDiv.appendChild(span);
        serviceDiv.appendChild(details);

        serviceContainer.appendChild(serviceDiv);
      })
      .catch((error) => console.error("Error fetching services:", error));
  });

// ==================  Services section End  ====================

// ==================  Project section Start  ====================

fetch("./json/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const projectContainer = document.getElementById("project-container");

    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className =
        "relative group w-[500px] h-auto overflow-hidden rounded-lg shadow-lg";

      // Create tech badges
      const techTags = project.tech
        .map(
          (tech) =>
            `<span class="bg-white text-black text-xs font-semibold p-1 rounded">${tech}</span>`
        )
        .join(" ");

      projectDiv.innerHTML = `
        <a href="${project.url}" target="_blank" class="block">
          <!-- Overlay -->
          <div class="inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

          <!-- Project Image -->
          <img src="${project.image}" alt="${project.title}" width="500px" height="500px"
               class="rounded-lg transition-all duration-300 z-0 project-img object-cover w-full h-full" />

          <!-- Title & Tech Stack -->
          <div class="flex flex-col absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <p class="project-title text-xl text-white hover:text-primary font-black mb-2">${project.title}</p>
            <div class="flex flex-wrap gap-2">
              ${techTags}
            </div>
          </div>

          <!-- Icon -->
          <i class="${project.icon} project-icons absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-primary text-white 
                    hover:bg-primary_dark p-3 rounded-full text-lg"></i>
        </a>
      `;

      projectContainer.appendChild(projectDiv);
    });
  });


// ==================  Gallery  ====================

// ==================  Testimonaisl Start  ====================
fetch("./json/reviews.json")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Loop through the review data and create HTML dynamically
    const reviewsContainer = document.getElementById("reviews-container");

    data.forEach((review) => {
      // Create review HTML structure
      const reviewElement = document.createElement("div");
      reviewElement.classList.add(
        "flex",
        "flex-col",
        "py-4",
        "justify-center",
        "items-center",
        "shrink-0",
        "w-full",
        "xsm:w-[230px]",
        "lg:w-[325px]"
      );

      reviewElement.innerHTML = `
                    <div class="bg-white dark:bg-dark_600 rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 relative">
                        <i class="fa-solid fa-quote-left text-3xl text-primary"></i>
                        <p class="text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white font-medium">
                         ${review.clientName}
                       </p>
                        <p class="text-lg">${review.quote}</p>
                        <ul class="star-rating flex gap-1">
                            ${generateStars(review.rating)}
                        </ul>
                    </div>
                  
                `;

      // Append the review element to the container
      reviewsContainer.appendChild(reviewElement);
    });
  })
  .catch((error) => console.error("Error loading review data:", error));

// Helper function to generate star ratings based on rating value
function generateStars(rating) {
  let starsHtml = "";
  for (let i = 0; i < 5; i++) {
    starsHtml += `<li class="star ${i < rating ? "filled" : ""} text-primary_400">&#9733;</li>`;
  }
  return starsHtml;
}

// ==================  Testimonaisl End  ====================

// ==================  Contact Form Start  ====================

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Clear previous error messages
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
      errorMessage.textContent = "All fields are required.";
      errorMessage.classList.add("text-red-500");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.classList.add("text-red-500");
      return;
    }

    // If validation passes, display success message
    alert("Message sent successfully!");
    // Optionally, reset the form
    document.getElementById("contactForm").reset();
  });

// ==================  Contact Form End  ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    const headerHeight = document.querySelector("header").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });
});

