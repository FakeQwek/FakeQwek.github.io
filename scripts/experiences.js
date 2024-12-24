//Populate certifications
let certNo = 0;
certificationsContainer = document.getElementsByClassName('awards-container');
certificationDictionary = 
{
    "2024" : [["Ngee Ann Polytechnic - Diploma In Information Technology (April 2023 - Present)", "Awarded to students who are within the top 25% of their school's level and course in terms of academic performance, and have demonstrated good conduct."], ["Overflow - Publicity Lead (March 2024 - Present)", "The PSM I certification demonstrates the knowledge of the Scrum framework, the Scrum Master accountabilities and how to apply Scrum."]], 
    "2023" : [["Masoglobal Pte Ltd - Media Production Intern (Feb 2023 - March 2023)", "Awarded for excellent academic performance for the Diploma in Information Technology."], ["Overflow - Workgroup (Oct 2023 - March 2024)", "Awarded for excellent academic performance for the Diploma in Information Technology."]], 
    "2022" : [["Photography and Digital Media Club - President (Feb 2020 - Jan 2022)", "Awarded to up to 2% of students in their school who have demonstrated outstanding personal qualities through their behaviour and actions."]]
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
/*
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
*/
