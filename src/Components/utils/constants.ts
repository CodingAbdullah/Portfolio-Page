// Defining a type for the object to be used, an array of objects
type ProjectListSetup = {
    name: string,
    description: string,
    languages: string[],
    url: string
}[];

export const constants : ProjectListSetup = [
    { 
        name : 'Ethereum Wallet Dashboard', 
        description : "A descriptive web app, detailing the history of a wallet's transactions including different ERC transactions.", 
        languages: ['HTML', 'CSS', 'React', 'Node', 'Express', 'AWS', 'Shell'],
        url: 'https://ethereumdashboard.dev'
    },
    {
        name : 'Layer Two Dashboards', 
        description : "Arbitrum, Optimism, and Polygon dashboards created using a minified version of the Ethereum dashboard above.", 
        languages: ['HTML', 'CSS', 'React', 'Node', 'Express', 'AWS', 'Shell'],
        url: 'https://polygondashboard.xyz'
    },
    {
        name : 'Medium Article Scraper Tool',
        description: "Tool that allows users to extract Medium.com article information in the form of text and audio files.",
        languages: ['HTML', 'CSS', 'React', 'Node', 'Express', 'OpenAI API', 'AWS'],
        url: 'https://mediumdotcomscraper.pro'
    },
    {
        name: "DALLE 2's Bestie",
        description: 'Website that utilizes the OpenAI DALLE API to generate images from a text prompt.',
        languages: ['HTML', 'CSS', 'React', 'Node', 'Express', 'OpenAI API', 'AWS'],
        url: 'https://dalle2sbestie.com'
    },
    {
        name: "Next.js SAAS Deployer CI-CD Pipeline",
        description: "Forked from the original SAAS starter template, CI/CD pipeline features added. Allowing users to freely build, test, and deploy software.",
        languages: ['HTML', 'CSS', 'Next.js', 'Jenkins', 'Docker', 'Terraform', 'Shell', 'AWS'],
        url: 'https://github.com/CodingAbdullah/next-saas-starter-ci-cd'
    }
];