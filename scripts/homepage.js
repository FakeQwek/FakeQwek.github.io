
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
    "Jeopardy" : "./images/jeopardy-play.PNG"
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
                console.log(imgUrl);
                skillsContainer.insertAdjacentHTML("beforeend", 
                    `
                        <div class= "skill-box">
                            <img src="${imgUrl}" width="90px" height ="90px" class="skill-image">
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
                projectContainer.insertAdjacentHTML("beforeend", 
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
        })
        
    }
    catch (error) {
        console.log(error);
    }

}