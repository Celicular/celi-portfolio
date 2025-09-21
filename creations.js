const projects = {
    0: {
        "name": "Disease Detection from Symptoms with AI",
        "type": "AI/ML",
        "event": "Hackathon",
        "date": "Jan/2025",
        "Description": "An AI-powered healthcare assistant that takes user symptoms as input and predicts possible diseases using trained machine learning models.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj1.png",
        "github": "https://github.com/Celicular/disease_finder_from_symptoms",
        "tags": [4,6,7,8,15,16,18,20,21,23]
    },
    1: {
        "name": "HS Web Solutions",
        "type": "Website",
        "event": "Website Project",
        "date": "May/2025",
        "Description": "A professional service website for a web solutions brand, showcasing services, portfolio, and contact details with a responsive and modern UI.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj2.png",
        "github": "https://github.com/Celicular/hswebsolutions",
        "tags": [1,3,6,7,8,10,12,19,20,24,25]
    },
    2: {
        "name": "Cap2Easy",
        "type": "Python",
        "event": "Side Project",
        "date": "October/2024",
        "Description": "A lightweight tool to automatically generate captions and simplify content creation. It focuses on quick usability for creators.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj3.png",
        "github": "https://github.com/Celicular/Celi-Cap2Easy",
        "tags": [16,17,20,21,24,25]
    },
    3: {
        "name": "Quantum",
        "type": "Three.js",
        "event": "Three.Js Project",
        "date": "December/2024",
        "Description": "An experimental 3D interactive theme built with Three.js, designed with futuristic animations and smooth transitions for immersive web experiences.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj4.png",
        "github": "https://github.com/Celicular/quantum-theme",
        "tags": [3,6,7,8,12,24,25,26]
    },
    4: {
        "name": "CleoChat",
        "type": "Website",
        "event": "Express.js Project",
        "date": "August/2025",
        "Description": "A real-time chat application built on Express.js and WebSocket, featuring authentication, instant messaging, and a responsive chat interface.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj5.png",
        "github": "https://github.com/Celicular/cleochat",
        "tags": [6,7,8,12,13,24,25,26]
    },
    5: {
        "name": "SYNC - ERP",
        "type": "Website",
        "event": "Hackathon",
        "date": "April/2025",
        "Description": "A collaborative ERP system designed for institutions, providing modules for attendance, resource management, and analytics, built during a hackathon.",
        "image": "https://cdn.jsdelivr.net/gh/Celicular/cdn-celi@main/proj6.png",
        "github": "https://github.com/Celicular/AJU_Hackathon_Project_by_team_404_not_found",
        "tags": [1,3,6,7,8,10,12,13,19,20,24,25]
    },
}

let currentProject = 0;

function setProject(id){
    const projectData = projects[id]
    document.getElementById("projectHead").innerText = projectData["name"];
    document.getElementById("projectSubHead").innerText = projectData["type"];
    document.querySelectorAll(".detail-head").forEach(detail => {
        if(detail.dataset.detail == "event"){
            detail.innerText = projectData["event"];
        }else if(detail.dataset.detail == "date"){
            detail.innerText = projectData["date"];
        }else{
            detail.innerText = projectData["Description"];
        }
    })
    document.querySelector(".pDisplay").style.opacity = 0.5;
    document.querySelector(".pDisplay").style.backgroundImage = `url(${projectData["image"]})`;
    document.querySelector(".pDisplay").style.opacity = 1;
    document.querySelector(".viewProject").href = projectData["github"];   

    document.querySelectorAll(".tech-skill").forEach(el => {
        el.classList.remove("selected");
    });

    projectData["tags"].forEach(id => {
        const el = document.querySelector(`.tech-skill[data-id="${id}"]`);
        if (el) el.classList.add("selected");
    });


}

document.querySelector(".pm").addEventListener("click", (e) => {
    if(currentProject == 5){
        currentProject = 0;
    }
    else{
        currentProject++;
    }

    setProject(currentProject)
})

document.querySelector(".nm").addEventListener("click", (e) => {
    if(currentProject == 0){
        currentProject = 5;
    }
    else{
        currentProject--;
    }

    setProject(currentProject)
})


document.querySelector(".previous").addEventListener("click", (e) => {
    if(currentProject == 5){
        currentProject = 0;
    }
    else{
        currentProject++;
    }

    setProject(currentProject)
})

document.querySelector(".next").addEventListener("click", (e) => {
    if(currentProject == 0){
        currentProject = 5;
    }
    else{
        currentProject--;
    }

    setProject(currentProject)
})

