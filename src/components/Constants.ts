export const Connects = ['Mail', 'LinkedIn', 'Github', 'Discord']


// export const SkillsList = ['Android', 'Angular', 'Azure', 'CSS', 'Express', 'Firebase', 'Flask', 'Hibernate', 'HTML', 'Ionic', 'Java', 'JavaScript', 'jQuery', 'Linux', 'Microservices', 'MongoDB', 'MySQL', 'Neo4j', 'Nodejs', 'Open-Source', 'OpenCV', 'Postgresql', 'Python', 'React', 'SASS', 'Spring', 'SQLite', 'Tailwind-CSS', 'Typescript', 'Github'];

export const SkillsList = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'jQuery', 'Typescript', 'SASS', 'Tailwind-CSS', // Web Development
    'Nodejs', 'Express', 'Java', 'Spring', 'Flask', 'Microservices', // Backend Development
    'Android', 'Ionic', // Mobile Development
    'MySQL', 'MongoDB', 'SQLite', 'Neo4j', 'Postgresql', // Databases
    'Azure', 'Firebase', 'Linux', 'Github', // Cloud & DevOps
    'Hibernate', 'Open-Source', 'OpenCV', 'Python' // Others
];


export const NAV_ITEMS = [
    'Home', 'About', 'Skills'
];


export const certifications = [
    {
        "id": 1,
        "name": "Java SE",
        "provider": "Hackerrank",
        "link": "https://www.hackerrank.com/certificates/d6d8d91ab3fb"
    },
    {
        "id": 1,
        "name": "Node.js",
        "provider": "Hackerrank",
        "link": "https://www.hackerrank.com/certificates/d6d8d91ab3fb"
    }
];

export interface Certifications {
    id: number,
    name: string,
    provider: string,
    link: string
}