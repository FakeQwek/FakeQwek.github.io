const url = "http://localhost:3000/"
let experienceData = {};
let timelineSection = document.getElementById("timeline-section");
populateSkills();
async function populateSkills() {
    try {
        const response = await fetch(url + "experience", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((experience) => {
            //Inserts data in sorted dictionary order first

            for (x in experience.data) {
                
                let title = experience.data[x]["Title"];
                let desc = experience.data[x]["Description"];
                let year = experience.data[x]["Year"];

                if (!(year in experienceData)) {
                    experienceData[year] = [[title, desc]];
                }
                else {
                    experienceData[year].push([title, desc]);
                }
            }
 
            //Goes through data, then inserts each year with the latest year first, before inserting the awards for each year

            let orderedYears = Object.keys(experienceData).reverse();
            let fadingClass = "";
            for(i = 0; i < orderedYears.length; i++) {
                if(i == orderedYears.length-1) {
                    fadingClass="fading-line";
                }
                let year = orderedYears[i];
                   let yearContainer = 
                   `
                    <div class="year-container">
                        <h1 class="year-title">${year}</h1>
                        <div class="timeline-container">
                            <div class="timeline-circle"></div>
                            <div class="line ${fadingClass}"></div>
                        </div>
                        <div class="awards-container ${year}">
                        </div>
                    </div>
                   `
                   timelineSection.insertAdjacentHTML("beforeend", yearContainer)
                   let awards = document.getElementsByClassName(year);
                for(entry in experienceData[year]) {
                    let title = experienceData[year][entry][0];
                    awards[0].insertAdjacentHTML("beforeend",  `<h3 class="award-text" id="title">${title}</h3>`)
                }
            }
        })        
    }
    catch (error) {
        console.log(error);
    }
}


/*
//Add event listeners to certifications

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
