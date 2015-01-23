var bio ={
    "name" : "Yuduo Zhang",
    "role" : "Software Developer",
    "contacts" : {
        "mobile" : "226-978-2162",
        "e-mail" : "yuduozhang@gmail.com",
        "github" : "yuduozhang",
        "location" : "Waterloo, ON, Canada"
    },
    "skills" : [
        "Proficient in C, C++, Java, Python, Perl, SQL",
        "Strong command of OOP concept and Design Patterns",
        "Deep understanding of Data Structures, Algorithms, Networking Concepts like TCP/IP, UDP, HTTP, DNS",
        "Experienced with Android Development, Parallel Programming, Hadoop & MapReduce, MySQL Database, Linux"
    ],
    "bioPic" : "images/me.jpg"
};

bio.display = function () {

    if (bio.role.length > 0) {
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedHeaderRole);
    }

    if (bio.name.length > 0){
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedHeaderName);
    }

    for (var key in bio.contacts){
        if (bio.contacts.hasOwnProperty(key)) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
            formattedContact = formattedContact.replace("%data%", bio.contacts[key]);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }
    }

    if (bio.bioPic.length>0){
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
    }

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();

var education = {
    "schools" : [
        {
            "name": "University of Waterloo",
            "location" : "Waterloo, ON, Canada",
            "degree" : "Bachelor of Computer Science",
            "majors" : "Computer Science",
            "years": "2009-2014"
        }
    ],
    "onlineCourses" : [
        {
        }
    ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[0].years);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);

    $(".education-entry:last").append(formattedSchoolName + formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
}

education.display();


var work = {
    "jobs" : [
        {
            "employer" : "NTT Musashino R&D Centre",
            "title" : "Research Assistant",
            "location" : "Tokyo, Japan",
            "dates" : "May-August, 2012",
            "description" : [
                "Conducted performance evaluation for a prototype (built with OpenCV) that applies the new concept of using Androidx86 (android-x86.org/) virtual machine systems on cloud server",
                "Cooperated on a research project that develops a big data technique to predict a smartphone user’s 3G bandwidth dynamically based on their location and its population density, time of the day, moving speed, 3G tower location,etc",
                "Implemented an Android application with Funf Open Sensing Framework to collect smartphone sensing data"
            ]
        },
        {
            "employer" : "Autodesk Canada",
            "title" : "Software Developer",
            "location" : "Montreal, Quebec",
            "dates" : "May - August, 2011",
            "description" : [
                "Developed plug-ins and UI in an Agile team for Autodesk Maya particle simulation, which enables users to simulate scenes on multiple machines including Cloud and render farms (C++, Python, Maya Embedded Language: MEL)",
                "Automated installation, uninstallation and testing process for Maya distributed simulation (Batch)",
                "Ported Maya distributed simulation to Linux (C++, Python, MEL, Bash)"
            ]
        },
        {
            "employer" : "NexJ System Inc",
            "title" : "Quality Assurance Analyst",
            "location" : "Toronto, Ontario",
            "dates" : "September - December, 2010",
            "description" : [
                "Deployed and maintained Quality Assurance testing environments",
                "Managed JBoss/Websphere application servers and Oracle/MSSQL database servers",
                "Conducted server, function and performance testing",
                "Trained new employees and wrote training documents"
            ]
        }
    ]
};

work.display = function() {
    if(work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(HTMLworkDescriptionStart);
            if(work.jobs[job].description.length>0) {
                for (var descriptionEntry in work.jobs[job].description){
                    var formattedDescriptionEntry
                        = HTMLworkDescription.replace("%data%", work.jobs[job].description[descriptionEntry]);
                    $(".workDescription-entry:last").append(formattedDescriptionEntry);
                }
            }
        }
    }
}

work.display();


var projects = {
    "projects" : [
        {
            "title": "EventCal - Android Application (Java)",
            "dates": "May - August, 2013",
            "description": [
                "Developed a fully functional Android calendar app in a team of 4 students which also pulls events from Facebook, Eventbrite, Google calendar and UW open data. The app can also track friends and events location.",
                "Applied various OOP design patterns and software architecture concept."
            ]
        },
        {
            "title": "Vending Machine System (uC++)",
            "dates": "January - April, 2012",
            "description": [
                "Simulated the system with a concurrent program",
                "Used uC++ (an extension for concurrency of C++) Coroutine, Lock, Semaphore, Monitor, Future and Task to facilitate parallel execution and synchronization."
            ]
        },
        {
            "title": "Transformer (Java)",
            "dates": "January - April, 2012",
            "description": [
                "Developed a transformer that can be directly controlled by mouse with Java 2D library"
            ]
        },
        {
            "title": "WLPP Compiler (C and MIPS)",
            "dates": "May - August, 2010",
            "description": [
                "Wrote machine and MIPS assembly language programs",
                "Designed a compiler of a subset of C, including an Assembler, Scanner, Parser and Code Generator"
            ]
        }
    ]
};

projects.display = function() {
    if (projects.projects.length>0){
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(HTMLprojectDescriptionStart);
            if (projects.projects[project].description.length>0){
                for (var descriptionEntry in projects.projects[project].description) {
                    var formattedDescriptionEntry
                        = HTMLprojectDescription.replace("%data%", projects.projects[project].description[descriptionEntry]);
                    $(".projectDescription-entry:last").append(formattedDescriptionEntry);
                }
            }
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);
