const url = "http://localhost:3000/"
let experienceData = {};
let timelineSection = document.getElementById("timeline-section");
let modal = document.getElementById("experience-modal");
let closeButton = document.getElementById("close-button");
let modalTitle = document.getElementById("modal-title");
let modalDescription = document.getElementById("modal-text");
let modalBox = document.querySelector(".modal-content");
populateSkills();
addListener();

closeButton.addEventListener('click', () => {
    modal.classList.remove("show-popup");
    modal.classList.add("close-popup");
  

});

modal.addEventListener('click', () => {
    if(event.target.id == "certification-modal") {
        modal.classList.remove("show-popup");
        modal.classList.add("close-popup");
    }
});

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
                    awards[0].insertAdjacentHTML("beforeend",  `<h3 class="award-text" id="${title}">${title}</h3>`)
                }
            }
        })        
    }
    catch (error) {
        console.log(error);
    }
}

async function addListener() {
    timelineSection.addEventListener('click', async function() {
        if(event.target.className == "award-text") {
            let title = event.target.id;
            console.log(title);
            try {
                const response = await fetch(url + `experience/${title}`, {
                    method: "GET",
                })
                .then((response) => response.json())
                .then((experience) => {

                    let desc = experience.data["Description"];
                    modal.classList.remove("close-popup");
                    modal.classList.add("show-popup");
                    modalTitle.innerText = title;
                    modalDescription.innerText = desc;
                    
                })
            }
            catch(error) {
                console.log(error);
            }
        }



    })
}

