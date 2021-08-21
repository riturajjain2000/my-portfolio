/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Rituraj Jain",
  title: "Hello, I'm Rituraj",
  subTitle: emoji(
    "A passionate Mobile Developer who always thrives to work on products which develop sustainable and scalable social and technical systems to create impact."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1uKQJPI6998MbF_t_wVhlo8z2VKpe6hMK?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/riturajjain2000",
  linkedin: "https://www.linkedin.com/in/riturajjain2000/",
  gmail: "rrjain20122000@gmail.com",
  gitlab: "https://gitlab.com/riturajjain2000",
  stackoverflow: "https://stackoverflow.com/users/12618131/rituraj-jain",  
  twitter: "https://twitter.com/riturajjain2000",
  instagram: "https://www.instagram.com/riturajjain2000/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Mobile App Development - Android | Flutter"
    ),
    emoji(
      "⚡ Game Development - Unity 3D | Unreal"
    ),
    emoji(
      "⚡ Database - Firebase | MySQL"
    ),
    emoji(
      "⚡ Programming Languages- C++ | Python | Java | Dart | C#"
    ),
    emoji(
      "⚡ UI/UX - Adobe XD | Figma | Zeplin"
    ),
    emoji(
      "⚡ VCS - Git | GitHub | Gitlab"
    ),
    
    emoji(
      "🚀🚀 Also Managing a Start-up"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Unreal Engine",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Adobe XD",
      fontAwesomeClassname: "fab fa-docker"
    },
        {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
        {
      skillName: "Zeplin",
      fontAwesomeClassname: "fab fa-python"
    },
        {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
        {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
        {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jabalpur Engineering College",
      logo: require("./assets/images/jeclogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - May 2022",
      desc: "",
      descBullets: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Game Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Engineer",
      company: "TOKN Technoogies",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2021 – Present",
      desc: ""

    },
    {
      role: "Android Engineer",
      company: "SSN Architects",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "June 2020 – Oct 2020",
      desc: ""
    },
    {
      role: "Android Engineer",
      company: "Lotpick",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "March 2020 – June 2020",
      desc: ""
    },
    {
      role: "CTA",
      company: "EtherWorld",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2019 – Oct 2019",
      desc: ""
    }


  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say H!? My Inbox is open for all.",
  number: "",
  email_address: "rrjain20122000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "riturajjain2000", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
