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
        description : "A descriptive web app, detailing the history of a wallet's transactions including different ERC transactions. Powered by React, Node, Express", 
        languages: ['Javascript', 'HTML', 'CSS', 'Shell'],
        url: 'https://ethwdashboard.xyz'
    },
    {
        name : 'Ethereum Wallet Dashboard Test', 
        description : "QA application which tests the features of the Dashboard application, using Selenium WebDriver and the Cucumber Framework (BDD)", 
        languages: ['Gherkin', 'Java'],
        url: 'https://github.com/CodingAbdullah/Ethereum-Wallet-Dashboard-Test'
    },
    {
        name : 'Green Kart Web App',
        description: "A simple online store allowing users to purchase items. Full Stack Web Application using Mongo, Express, React, Redux, and Node",
        languages: ['Javascript', 'HTML', 'CSS'],
        url: 'https://greenkartstore.com'
    },
    {
        name: "DALLE 2's Bestie",
        description: 'A website which allows users to sign up, search, and save AI generated images. Powered by React, Redux, Node, Express, Mongo, and Nodemailer',
        languages: ['Javascript', 'HTML', 'CSS'],
        url: 'https://dalle2sbestie.com'
    },
    {
        name: "Personal Website",
        description: "A site built dedicated to the life of me. The development journey, projects, hobbies, and just about everything else there is to know about web3 and the crypto space",
        languages: ['Javascript', 'HTML', 'CSS'],
        url: 'https://kingabdullah.codes'
    }
];