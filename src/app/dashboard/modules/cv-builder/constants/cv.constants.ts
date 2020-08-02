export const ABOUT_SECTION = {
  firstName: [""],
  lastName: [""],
  jobTitle: [""],
  website: [""],
  emailId: [""],
  phoneNumber: [""],
  city: [""],
  state: [""],
  country: [""],
  summary: [""],
};

export const WORK_EXPERIENCE_SECTION = {
  employerName: [""],
  employmentType: [""],
  jobTitle: [""],
  startDate: [""],
  endDate: [""],
  employerWebsite: [""],
  city: [""],
  state: [""],
  country: [""],
  summary: [""],
  point1: [""],
  point2: [""],
  point3: [""],
  point4: [""],
  point5: [""],
};

export const EDUCATION_SECTION = {
  schoolName: [""],
  degree: [""],
  startDate: [""],
  endDate: [""],
  schoolWebsite: [""],
  city: [""],
  state: [""],
  country: [""],
  summary: [""],
  point1: [""],
  point2: [""],
  point3: [""],
};

export const PROJECTS_SECTION = {
  projectName: [""],
  role: [""],
  projectWebsite: [""],
  startDate: [""],
  endDate: [""],
  summary: [""],
  point1: [""],
  point2: [""],
  point3: [""],
};

export const AWARDS_SECTION = {
  awardName: [""],
  awardDate: [""],
  awardWebsite: [""],
  summary: [""],
};

export const LANGUAGES_SECTION = {
  languageName: [""],
  proficiency: [""],
};

export const SKILLS_SECTION = {
  skillName: [""],
};

export const FORM_CONFIG = {
  aboutSection: ABOUT_SECTION,
  workExperienceSection: WORK_EXPERIENCE_SECTION,
  educationSection: EDUCATION_SECTION,
  projectsSection: PROJECTS_SECTION,
  skillsSection: SKILLS_SECTION,
  languagesSection: LANGUAGES_SECTION,
  awardsSection: AWARDS_SECTION,
};

export const DUMMY_FORM = {
  cvSettings: {
    templateName: "oslo",
  },
  styleSettings: {
    themeColor: "#0069db",
  },
  cvFormData: {
    aboutSection: [
      {
        firstName: "Emilia",
        lastName: "Parker",
        jobTitle: "UI Designer",
        website: "www.emiliaparker.com",
        emailId: "emiliaparker@gmail.com",
        phoneNumber: "9876543210",
        city: "San Francisco",
        state: "CA",
        country: "",
        summary:
          "Responsible for designing and developing interactive websites and use innovative design patterns to create cutting edge experiences. Currently, learning modern frontend web frameworks and simple design strategies for enhanced and optimized UI/UX. ",
      },
    ],
    workExperienceSection: [
      {
        employerName: "Google",
        jobTitle: "Senior UI Designer",
        employmentType: "Full-time",
        startDate: "May, 2018",
        endDate: "Present",
        employerWebsite: "www.google.com",
        city: "San Francisco",
        state: "CA",
        country: "",
        summary:
          "Currently, I lead a team to maintain the internal style guide & implement new design patterns in Photos on web & mobile. I collaborate closely with product managers, developers, researchers & the marketing team.",
        point1: "",
        point2: "",
        point3: "",
      },

      {
        employerName: "Tesla",
        jobTitle: "UI Designer",
        employmentType: "Full-time",
        startDate: "May, 2016",
        endDate: "March, 2018",
        employerWebsite: "www.tesla.com",
        city: "Palo Alto",
        state: "CA",
        country: [""],
        summary:
          "Designed a iOS App for revenue forecasting for an internal client, incorporating user research and usability test findings.",
        point1: "",
        point2: "",
        point3: "",
      },
    ],
    educationSection: [
      {
        schoolName: "University of Michigan",
        degree: "BA Visual Communication",
        startDate: "May, 2016",
        endDate: "June, 2017",
        schoolWebsite: [""],
        city: "Detroit",
        state: "MI",
        country: "",
        summary: "",
      },
      {
        schoolName: "Toronto University",
        degree: "Bachelor of Science",
        startDate: "May, 2016",
        endDate: "June, 2017",
        schoolWebsite: [""],
        city: "Toronto",
        state: "ON",
        country: "",
        summary: "",
      },
    ],
    projectsSection: [
      {
        projectName: "Google Photos",
        role: "UI Designer",
        projectWebsite: "www.photos.google.com",
        startDate: "June, 2019",
        endDate: "Present",
        summary:
          "Part of the core team responsible for design of interactive Google Photos platform.",
        point1: "",
        point2: "",
        point3: "",
      },
      {
        projectName: "Tesla iOS App Design",
        role: "Frontend",
        projectWebsite: "",
        startDate: "May, 2016",
        endDate: "Mar, 2018",
        summary:
          "Responsible for creating the design system for Tesla new iOS car app.",
        point1: "",
        point2: "",
        point3: "",
      },
    ],
    skillsSection: [
      {
        skillName: "Adobe Creative Suite",
      },
      {
        skillName: "Figma",
      },
      {
        skillName: "Framer",
      },
      {
        skillName: "App Design",
      },
      {
        skillName: "iOS Design",
      },
    ],
    languagesSection: [
      {
        languageName: "English",
        proficiency: "Professional",
      },
      {
        languageName: "French",
        proficiency: "Native",
      },
    ],
    awardsSection: [
      {
        awardName: "Young Design Award",
        awardDate: "May 2019",
        awardWebsite: "www.tesla.com",
        summary:
          "Won Young Design Award for my contribution as a UI Designer and increasing the conversion rate for their iOS app.",
      },
    ],
  },
};

export const INITIAL_FORM = {
  aboutSection: [
    {
      firstName: "",
      lastName: "",
      jobTitle: "",
      website: "",
      emailId: "",
      phoneNumber: "",
      city: "",
      state: "",
      country: "",
      summary: "",
    },
  ],
  workExperienceSection: [
    {
      employerName: "",
      jobTitle: "",
      employmentType: "",
      startDate: "",
      endDate: "",
      employerWebsite: "",
      city: "",
      state: "",
      country: "",
      summary: "",
      point1: "",
      point2: "",
      point3: "",
    },
  ],
  educationSection: [
    {
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      schoolWebsite: "",
      city: "",
      state: "",
      country: "",
      summary: "",
    },
  ],
  projectsSection: [
    {
      projectName: "",
      role: "",
      projectWebsite: "",
      startDate: "",
      endDate: "",
      summary: "",
      point1: "",
      point2: "",
      point3: "",
    },
  ],
  skillsSection: [
    {
      skillName: "",
    },
  ],
  languagesSection: [
    {
      languageName: "",
      proficiency: "",
    },
  ],
  awardsSection: [
    {
      awardName: "",
      awardDate: "",
      awardWebsite: "",
      summary: "",
    },
  ],
};
