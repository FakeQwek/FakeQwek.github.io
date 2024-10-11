//Populate certifications
let certNo = 0;
certificationsContainer = document.getElementsByClassName('awards-container');
certificationDictionary = 
{
    "2024" : [["Edusave Merit Bursary", "Awarded to students who are within the top 25% of their school's level and course in terms of academic performance, and have demonstrated good conduct."], ["Professional Scrum Master I", "The PSM I certification demonstrates the knowledge of the Scrum framework, the Scrum Master accountabilities and how to apply Scrum."]], 
    "2023" : [["Director's List - April Semester 2023", "Awarded for excellent academic performance for the Diploma in Information Technology."], ["Scientific Computing With Python", "Awarded for completing the Scientific Computing With Python video course on FreeCodeCamp."]], 
    "2022" : [["Edusave Character Award", "Awarded to up to 2% of students in their school who have demonstrated outstanding personal qualities through their behaviour and actions."], ["Edusave Good Progress Award", "Awarded to students within the top 10% of their school's level in terms of academic performance and have demonstrated good conduct."]]
};

for(i = 0; i < certificationsContainer.length; i++) {
    let certifications = certificationsContainer[i].className.split(' ');
    let certName = certificationDictionary[certifications[1]];
    for (x = 0; x < certName.length; x++) {
        certificationsContainer[i].innerHTML += `<h3 class="award-text" id="cert-${certNo}">${certName[x][0]}</h3>`;
        let currentCert = document.getElementById(`cert-${certNo}`);
        currentCert.setAttribute("data-certName", certName[x][0]);
        currentCert.setAttribute("data-year", certifications[1]);
        certNo +=1;
    }
}

//Add event listeners to certifications
let timelineSection = document.getElementById("timeline-section");
timelineSection.addEventListener('click', function() {
    yearContainers = document.getElementsByClassName('year-container');
    
    let previousInfo = document.querySelector(".information-popup");
   
    if(event.target.className == "award-text") {
        if(previousInfo) {
            previousInfo.remove();
        }
        let certName = event.target.getAttribute("data-certName");
        let year = event.target.getAttribute("data-year");
        let certifications = certificationDictionary[year];

        for(i = 0; i < certifications.length; i++) {
            if(certifications[i][0] == certName) {
                event.target.parentNode.parentNode.innerHTML += `<div class="information-popup"><h3>${certName}</h3><p>${certifications[i][1]}</p></div>`;
            }
        }
    }
    else if (previousInfo) {
        previousInfo.classList.add("hide-animation");
        setTimeout(() => {
            let previousInfo = document.querySelector(".information-popup");
            previousInfo.remove();
        },280)
    }
})

