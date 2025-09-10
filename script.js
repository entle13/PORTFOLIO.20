const translations = {
  en: {
    name: "John Doe",
    role: "Software Developer",
    aboutTitle: "About Me",
    aboutDesc: "I'm a passionate software developer skilled in full-stack web development, always eager to solve problems and build useful apps.",
    projectsTitle: "Projects",
    contactTitle: "Contact"
  },
  es: {
    name: "Juan Doe",
    role: "Desarrollador de Software",
    aboutTitle: "Sobre mí",
    aboutDesc: "Soy un desarrollador apasionado con habilidades en desarrollo web full-stack, siempre buscando resolver problemas y construir aplicaciones útiles.",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto"
  },
  fr: {
    name: "Jean Doe",
    role: "Développeur Logiciel",
    aboutTitle: "À propos de moi",
    aboutDesc: "Je suis un développeur passionné, spécialisé dans le développement web full-stack, toujours prêt à résoudre des problèmes et à créer des applications utiles.",
    projectsTitle: "Projets",
    contactTitle: "Contact"
  }
};

function switchLanguage(lang) {
  const t = translations[lang];
  document.getElementById("name").textContent = t.name;
  document.getElementById("role").textContent = t.role;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-desc").textContent = t.aboutDesc;
  document.getElementById("projects-title").textContent = t.projectsTitle;
  document.getElementById("contact-title").textContent = t.contactTitle;
}
