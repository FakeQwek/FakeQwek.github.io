
const projectContainer = document.getElementById("projects-container");
const skillsContainer = document.getElementById("skills-container");


const images = {
    "Visual Paradigm" : "./images/VP-icon.png",
    "HTML & CSS" : "./images/htmlcss-icon.png",
    "Scrum Methodology" : "./images/scrum-icon.png",
    "Adobe Photoshop & Photography" : "./images/photoshop-icon.png",
    "Hitfilm Express" : "./images/hitfilm-icon.png",
    "SQL" : "./images/sql-icon.png",
    "Javascript" : "./images/js-icon.png",
    "C#" : "./images/csharp-icon.png",
    "Python" : "./images/python-icon.svg", 
    "Stoneforge" : "./images/stoneforge-thumbnail.png",
    "TwitchStats" : "./images/twitchstats-thumbnail.PNG",
    "Ice Cream Management System" : "./images/prgassignment2-menu.PNG",
    "Socialise" : "./images/socialise-thumbnail.png",
    "Jeopardy" : "./images/jeopardy-play.PNG",
    "React" : "./images/react-icon.png",
    "Figma" : "./images/figma-icon.png",
    "Data Structures and Algorithms" : "./images/dsa-icon.png",
    "Software Design Patterns" : "./images/sdp-icon.png",
    "OCBC UX System" : "./images/fsdp-thumbnail.png",
    "Sustainibbles" : "./images/sustainibbles-thumbnail.png"

};
const url = "http://localhost:3000/";



populateSkills();
populateProjects();

async function populateSkills() {
    try {
        const response = await fetch(url + "skill", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((skill) => {
            for (x in skill.data) {
                let title = skill.data[x]["title"];
                let desc = skill.data[x]["Description"];
                let imgUrl = images[title];
                let width = "90px";
                let height = "90px";
                if(title == "React" ) {
                    width = "105px";
                }
                else if (title == "Software Design Patterns") {
                    width = "115px";
                    height = "100px";
                }
                console.log(imgUrl);
                skillsContainer.insertAdjacentHTML("beforeend", 
                    `
                        <div class= "skill-box">
                            <img src="${imgUrl}" width="${width}" height ="${height}" class="skill-image">
                            <div class="skill-desc-box">
                                <h2 class="skill-title">${title}</h2>
                                <p class="skill-paragraph">${desc}</p>
                            </div>
                        </div>
                    `
                )
            }
        })        
    }
    catch (error) {
        console.log(error);
    }
}
const carousel = document.getElementById("projects-carousel");
async function populateProjects() {
    try {
        const response = await fetch(url + "project", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((project) => {
            for (x in project.data) {
                let title = project.data[x]["Title"];
                let desc = project.data[x]["Description"];
                let imgUrl = images[title];
                console.log(imgUrl);
                carousel.insertAdjacentHTML("beforeend", 
                    `
                    <div class="project-box">
                        <h2>${title}</h2>
                        <div class="project-desc-box">
                            <img class="project-icon" src="${imgUrl}">
                            <p class="project-desc">${desc}</p>
                        </div>
                    </div>
                    `
                )
            }
            launchCarousel();
            
        })
        
    }
    catch (error) {
        console.log(error);
 
    }
    function launchCarousel() {
        const projects = document.querySelectorAll(".project-box");
        let projectIndex = -1, intervalId;
    
        const autoSlide = () => {
            intervalId = setInterval(() => slideImage(++projectIndex), 3000);
        }
    
        autoSlide();
        const positions = [0, -16, -33, -49, 50.5, 34, 17];
        const slideImage = () => {
            
            projectIndex = projectIndex == 7? 0 : projectIndex;
            let transform = positions[projectIndex];
            console.log(projectIndex);
            // -16%, -33%, -49%, 50.5%, 34%, 17%,
            carousel.style.transform = `translate(${transform}%)`;
        };
    }
    

    
}
