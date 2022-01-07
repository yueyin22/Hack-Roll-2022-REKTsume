const studentName = document.querySelector("#name");
const education = document.querySelector("#education");
const experience = document.querySelector("#experience");
const programmingLanguage = document.querySelector("#programmingLanguage");
const techSkill = document.querySelector("#techSkill");
const softSkill = document.querySelector("#softSkill");
const project = document.querySelector("#project");
const volunteering = document.querySelector("#volunteering");
const button = document.querySelector("#create");

$(function(){
  var infoDelimit = {
    studentName: extractText(studentName),
    education: extractText(education),
    experience: extractText(experience),
    programmingLanguage: extractText(programmingLanguage),
    techSkill: extractText(techSkill),
    softSkill: extractText(softSkill),
    project: extractText(project),
    volunteering: extractText(volunteering),
  };
  var match = infoDelimit.split(', ')
  console.log(match)
  for (var a in match)
  {
      var variable = match[a]
      console.log(variable)
  }
})

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
  cleanedInfo = Object.fromEntries(
    Object.entries(info).filter(([_, v]) => v != null)
  );
  console.log(JSON.stringify(cleanedInfo));
  return JSON.stringify(cleanedInfo);
}

function sendData(data) {
  var url = "http://localhost:3000/pdf";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        console.log(xhr.responseText);
      } else {
        // Error
        console.log("Error sending request");
      }
    }
  };
  xhr.send(data);
}

button.addEventListener("click", () => {
  studentData = serialise();
  sendData(studentData);
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
  
