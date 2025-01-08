function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(navLinks) {
    const links = document.createElement(`nav`);
    navLinks.forEach(nav => {
      const link = document.createElement(`a`);
      link.href = nav.href;
      link.textContent = nav.textContent;
      link.title = nav.title;
      links.appendChild(link);
    });
    return links;
    }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const cardObj = document.createElement(`div`);
    cardObj.className = `learner-card`

    const name = document.createElement(`p`);
    name.textContent = learner.fullName;

    const id = document.createElement(`p`);
    id.textContent = `Learner ID: ${learner.id}`

    const bir = document.createElement(`p`);
    bir.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const lang = document.createElement(`p`);
    const favLang = languages.find(l => l.id === learner.favLanguage);
    lang.textContent = `Favorite Language: ${favLang.name}`

    cardObj.appendChild(name);
    cardObj.appendChild(id);
    cardObj.appendChild(bir);
    cardObj.appendChild(lang);

    cardObj.addEventListener(`click`, E => {
      document.querySelectorAll(`.learner-card`).forEach(card => {
        card.classList.remove(`active`)
      });
      cardObj.classList.toggle(`active`)
    });
    return cardObj;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages);
      document.querySelector(`section`).appendChild(learnerCard);
      return learnerCard;
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const foot = document.createElement(`footer`);
    foot.className = `footer`;

    const cInfo = document.createElement(`div`);
    cInfo.className = `company-info`;

    const cName = document.createElement(`p`);
    cName.className = `comapny-name`;
    cName.textContent = `${footerData.companyName}`;

    const cAdd = document.createElement(`p`);
    cAdd.className = `address`;
    cAdd.textContent = `${footerData.address}`;

    const email = document.createElement(`p`);
    email.className = `contact-email`;
    email.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`;

    cInfo.appendChild(cName);
    cInfo.appendChild(cAdd);
    cInfo.appendChild(email);
    foot.appendChild(cInfo);

    const socials = document.createElement(`div`);
    socials.className = `social-media`;
    for (let social in footerData.socialMedia) {
      const link = document.createElement(`a`);
      link.href = footerData.socialMedia[social];
      link.textContent = social.charAt(0).toUpperCase() + social.slice(1);
      socials.appendChild(link);
    }
    foot.appendChild(socials);

    const inst = document.createElement(`div`);
    inst.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2025`;
    foot.appendChild(inst);

    return foot;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  document.addEventListener(`click`, E => {
    if (E.target === document.querySelector(`section`)) {
      const toggleAllCards = document.querySelectorAll(`.learner-card`);
      toggleAllCards.forEach(card => card.classList.remove(`active`));
    }
  });
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
