const main = document.querySelector(".container")

const mainContent = main.innerHTML;
const welcomeText = "Welcome";
let text = "";






const circle = document.querySelector(".circleCursor");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    document.addEventListener("mousemove", (e) => {
      targetX = e.pageX;
      targetY = e.pageY;
    });

    function animate() {
      // interpolate (smooth follow)
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      circle.style.left = `${currentX}px`;
      circle.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    }

    animate();


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadWelcome(){  
  document.body.style.overflow = "hidden";
  main.innerHTML = `
    <div class="welcomeDiv">
      <h1 class="welcome"></h1>
      <div class= dash> 
        <span></span>
      </div>
    </div>
  `;


    const welcomeDiv = main.querySelector(".welcomeDiv")
    const h1 = main.querySelector(".welcome");
    const dash = main.querySelector(".dash>span");

    h1.textContent = "";
    dash.style.transform = "scaleX(0)";
     let i = -1;
    for (const e of welcomeText.split("")) {
        i++;
        h1.textContent += e;
        dash.style.transform = `scaleX(${i * 0.166})`;
        await wait(150);
    }
    await wait(100);

    welcomeDiv.style.opacity = "0";

    await wait(800);
    main.innerHTML = mainContent;
    document.querySelector("body").style.overflowY = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    loadWelcome();
})


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // prevent auto scroll restore
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

document.addEventListener('DOMContentLoaded', () => {
  const firstSkill = document.querySelector('.skills > h2');
  const firstContact = document.querySelector('.Contacts > h2');
  const allSkills = document.querySelectorAll('.skills > ul > li');
  const allContacts = document.querySelectorAll('.Contacts > ul > li');
  const title = document.querySelector(".heading")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.target) return;
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        if (entry.target === firstSkill && allSkills.length && !allSkills[0].classList.contains('show')) {
          allSkills.forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`;
            el.classList.add('show');
          });
        }

        if (entry.target === firstContact && allContacts.length && !allContacts[0].classList.contains('show')) {
          allContacts.forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`;
            el.classList.add('show');
          });
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px'
  });

  if (firstSkill) observer.observe(firstSkill);
  if (firstContact) observer.observe(firstContact);
  document.querySelectorAll('.aboutme').forEach(el => observer.observe(el));
  observer.observe(title);
});


