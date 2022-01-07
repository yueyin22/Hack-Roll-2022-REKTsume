const studentName = document.querySelector("#name");
const education = document.querySelector("#education");
const experience = document.querySelector("#experience");
const programmingLanguage = document.querySelector("#programmingLanguage");
const techSkill = document.querySelector("#techSkill");
const softSkill = document.querySelector("#softSkill");
const project = document.querySelector("#project");
const volunteering = document.querySelector("#volunteering");
const button = document.querySelector("#create");

function extractText(element) {
  return element.value;
}

function serialise() {
  var info = {
    studentName: extractText(studentName),
    education: extractText(education),
    experience: extractText(experience),
    programmingLanguage: extractText(programmingLanguage),
    techSkill: extractText(techSkill),
    softSkill: extractText(softSkill),
    project: extractText(project),
    volunteering: extractText(volunteering),
  };
  return Object.fromEntries(Object.entries(info).filter(([_, v]) => v != null));
}

button.addEventListener("click", () => {
  return serialise();
});

(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
