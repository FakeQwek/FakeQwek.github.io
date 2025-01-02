const url = "http://localhost:3000/"
let certificationData = {};
let timelineSection = document.getElementById("timeline-section");
let modal = document.getElementById("certification-modal");
let closeButton = document.getElementById("close-button");
let modalTitle = document.getElementById("modal-title");
let modalDescription = document.getElementById("modal-text");
let modalBox = document.getElementsByClassName("modal-content");
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
        const response = await fetch(url + "certification", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((certification) => {
            //Inserts data in sorted dictionary order first

            for (x in certification.data) {
                
                let title = certification.data[x]["Title"];
                let desc = certification.data[x]["Description"];
                let year = certification.data[x]["Year"];

                if (!(year in certificationData)) {
                    certificationData[year] = [[title, desc]];
                }
                else {
                    certificationData[year].push([title, desc]);
                }
            }
 
            //Goes through data, then inserts each year with the latest year first, before inserting the awards for each year

            let orderedYears = Object.keys(certificationData).reverse();
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
                for(entry in certificationData[year]) {
                    let title = certificationData[year][entry][0];
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
                const response = await fetch(url + `certification/${title}`, {
                    method: "GET",
                })
                .then((response) => response.json())
                .then((certification) => {
                    
                    let desc = certification.data["Description"];
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
