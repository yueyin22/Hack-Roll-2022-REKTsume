const studentName = document.querySelector("#name");
const email = document.querySelector("#email");
const education = document.querySelector("#education");
const experience = document.querySelector("#experience");
const programmingLanguage = document.querySelector("#programmingLanguage");
const techSkill = document.querySelector("#techSkill");
const softSkill = document.querySelector("#softSkill");
const project = document.querySelector("#project");
const volunteering = document.querySelector("#volunteering");
const button = document.querySelector("#create");

function extractText(element) {
  var originalText = element.value;
  var delimiter = originalText.split(",");
  for (let i = 0; i < delimiter.length; i++) {
    delimiter[i].trim();
  }
  return delimiter;
}

function serialise() {
  var info = {
    studentName: extractText(studentName),
    email: extractText(email),
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
        console.log("Error sending POST request");
      }
    }
  };
  xhr.send(data);
}

button.addEventListener("click", () => {
  studentData = serialise();
  sendData(studentData);
  if (document.getElementById("download-btn") == null) {
    addDownloadButton("Download Resume", "download-btn");
  }
});

function addDownloadButton(text, id) {
  //Create an input type dynamically.
  var element = document.createElement("button");
  element.type = "button";
  element.innerHTML = "Download Resume";
  element.value = text;
  element.id = id;
  element.onclick = function () {
    var url = "http://localhost:3000/get-pdf";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          console.log(xhr.responseText);
        } else {
          console.log("Error sending GET request");
        }
      }
    };
    xhr.send();
  };

  var foo = document.getElementById("button-bar");
  //Append the element in page (in span).
  foo.appendChild(element);
}

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
