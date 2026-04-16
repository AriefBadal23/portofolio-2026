
export const portoflio = {
  "projects": [
    {
      title:"ExpenseFlow",
      url:"https://github.com/AriefBadal23/expensetracker",
      description: `ExpenseFlow is a fullstack personal finance application I built to deepen my skills in backend development and secure coding practices. The app supports multiple users and allows them to track transactions organized by buckets — personal spending categories.
Built with ASP.NET Core and React/TypeScript, with PostgreSQL as the database. Users can create buckets, log transactions, filter by month and category, and get an overview of their spending.
A core focus of this project was security. I deliberately implemented secure coding practices including authentication and authorization via ASP.NET Core Identity, input validation on both frontend and backend, HTTPS, CORS configuration, logging with Serilog, a service account for database access, and .NET secret management. I also wrote unit tests and set up a CI pipeline with GitHub Actions to run them automatically.`,
      tools: ["C#", "Typescript", "Asp.net Core", "Postgres SQL", "EFC", "Github Actions", "Xunit"],
      image: "expenseflowlogo.png"
    },
    {
      title:"PentestPro",
      url:"",
      description: `A pentest-as-a-service web application that allows users to run Nmap scans using a credit-based system. Built with a security-first approach from the ground up.
Before writing any code, we started with threat modeling to identify potential risks, and used OWASP ASVS to define our security requirements. To catch vulnerabilities early, we set up a Jenkins DevSecOps pipeline with SAST, DAST and SCA stages integrated into the development workflow.
This project was built in collaboration with a team of six. My contribution focused on the security design phase: creating the Data Flow Diagram, performing threat modeling using STRIDE and DREAD, and contributing to parts of the backend implementation.`,
      tools: ["Django", "Jenkins", "SSDLC", "Docker", "SecDevOps", "Pytest", "Gitlab", "Owasp", "Bandit"],
      image: "pentestpro.png"
    },
      
    {
      title: "Image Service webservice",
      description: `Created an webservice (API) to resize images in different ratios for the hello-energy platform, which also increased the loading performance of the images that were used for blog posts and other parts where the images were used. 
      For this I have used Flask for the API, made use of Docker to make it run inside a container to make it easy to deploy, Postman to test the API endpoints and I also wrote unittest with Pytest.`,
      tools: ["Python", "C#"],
      image: "imageservice.png"
    }
    
  ],

  "skills": [
    "Python",
    "C#",
    "ASP.NET Core",
    "ReactTS",
    "Typescript",
    "PostgreSQL",
    "Entity Framework Core",
    "Docker",
    "Git"]
};
