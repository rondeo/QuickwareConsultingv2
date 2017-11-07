import { Resume } from './resume';

export const RESUME_MOCK_DATA: Resume = {
    Technical: [
        {
            Id: 1,
            Section: 'Development',
            Details: [
                {
                    Id: 1,
                    TechName: '.NET Framework',
                    TechYears: '17 years',
                    IsActive: true
                },
                {
                  Id: 2,
                  TechName: 'ASP/ASP.NET',
                  TechYears: '11 years',
                  IsActive: true
              },
              {
                Id: 3,
                TechName: 'C#',
                TechYears: '8.75 years',
                IsActive: true
              },
              {
                Id: 4,
                TechName: 'Visual Basic',
                TechYears: '15 years',
                IsActive: true
              },
              {
                Id: 5,
                TechName: 'WPF',
                TechYears: '3.5 years',
                IsActive: true
              },
              {
                Id: 6,
                TechName: 'LINQ',
                TechYears: '9.5 years',
                IsActive: true
              },
              {
                Id: 7,
                TechName: 'MVC 3/4/5',
                TechYears: '4 years',
                IsActive: true
              },
              {
                Id: 8,
                TechName: 'WCF',
                TechYears: '1 year',
                IsActive: true
              },
              {
                Id: 9,
                TechName: 'Windows Workflow (WF)',
                TechYears: '1.5 years',
                IsActive: true
              },
              {
                Id: 10,
                TechName: 'Entity Framework 4/5/6',
                TechYears: '5 years',
                IsActive: true
              },
              {
                Id: 11,
                TechName: 'SQL Server',
                TechYears: '18 years',
                IsActive: true
              },
              {
                Id: 12,
                TechName: 'Windows Services',
                TechYears: '7 years',
                IsActive: true
              },
              {
                Id: 13,
                TechName: 'WebApi',
                TechYears: '5 years',
                IsActive: true
              },
              {
                Id: 14,
                TechName: 'XML',
                TechYears: '6 years',
                IsActive: true
              },
              {
                Id: 15,
                TechName: 'Active Directory',
                TechYears: '2 years',
                IsActive: true
              },
              {
                Id: 16,
                TechName: 'MS Reporting Services',
                TechYears: '2 years',
                IsActive: true
              },
              {
                Id: 17,
                TechName: 'Windows Azure',
                TechYears: '5 months',
                IsActive: true
              },
              {
                Id: 18,
                TechName: 'ADFS',
                TechYears: '6 Months',
                IsActive: true
              }
            ]
        },
        {
            Id: 2,
            Section: 'UI',
            Details: [
                {
                    Id: 1,
                    TechName: 'JavaScript/jQuery',
                    TechYears: '20 years',
                    IsActive: true
                },
                {
                    Id: 2,
                    TechName: 'AngularJs/Angular',
                    TechYears: '2.75 years',
                    IsActive: true
                },
                {
                    Id: 3,
                    TechName: 'Bower',
                    TechYears: '1.75 years',
                    IsActive: true
                },
                {
                    Id: 4,
                    TechName: 'Gulp',
                    TechYears: '1.75 years',
                    IsActive: true
                },
                {
                    Id: 5,
                    TechName: 'TypeScript',
                    TechYears: '7 months',
                    IsActive: true
                },
                {
                    Id: 6,
                    TechName: 'KnockoutJs',
                    TechYears: '1.5 years',
                    IsActive: true
                },
                {
                    Id: 7,
                    TechName: 'AJAX',
                    TechYears: '9 years',
                    IsActive: true
                },
                {
                    Id: 8,
                    TechName: 'NodeJs',
                    TechYears: '1.75 years',
                    IsActive: true
                },
                {
                    Id: 9,
                    TechName: 'Karma/Jasmine',
                    TechYears: '6 months',
                    IsActive: true
                }
            ]
        },
        {
            Id: 3,
            Section: 'Source Control',
            Details: [
              {
                Id: 1,
                TechName: 'Visual SourceSafe',
                TechYears: '7 years',
                IsActive: true
              },
              {
                Id: 2,
                TechName: 'SourceGear Vault',
                TechYears: '1 year',
                IsActive: true
              },
              {
                Id: 3,
                TechName: 'TFS',
                TechYears: '7 years',
                IsActive: true
              },
              {
                Id: 4,
                TechName: 'Git/Github',
                TechYears: '6 months',
                IsActive: true
              },
              {
                Id: 5,
                TechName: 'Subversion',
                TechYears: '2 years',
                IsActive: true
              }
            ]
        }
    ],
    Experience: [
        {
          Id: 1,
          CompanyName: 'Raymond James Financial',
          CompanyLocation: 'St. Petersburg, FL',
          DateRange: 'August 2017 to current',
          PositionTitle: 'Lead UI Developer',
          PositionDuties: `I am the team lead of 5 developers.  I am responsible for triaging bugs and user requests.  I am also
          responsible for leading the daily standups, if needed.
          As a part of a 5-developer team I am responsible for the maintenance and development of an internal tool designed for financial
          advisors.  The tool was deleloped using Angular 1.5, Gulp and NodeJs.  The project is currently being upgraded to Angular 4.x
          using the Angular CLI, TypeScript and webpack.
          `,
          PositionTechnologies: 'Angular 1.5, Angular 4.x, Web Api 2, Gulp, NodeJs, Karma, Jasmine'
      },
      {
          Id: 2,
          CompanyName: 'Kobie Marketing',
          CompanyLocation: 'St. Petersburg, FL',
          DateRange: 'August 2016 to August 2017',
          PositionTitle: 'Sr. NET Developer/Sr. UI Developer',
          PositionDuties: `I assisted in finishing the TJX Rewards portal.  I improved the AngularJs codebase by introducing
              best practices including file naming, folder layout schema, converting directive to components and loading/binding
              optimizations.
              I added funactionality to the existing Gulp file to perform faster using better minification and naming techniques.
              I added UI Unit Testing using Karma and Jasmine in order to validate our AngularJs code.  I also implemented Ninject on
              the Web Api layer to prepare the codebase for continuous integration and better exapandability.
              I began to upgrade the existing Angular 1.x application to Angular 2 using the Angular-Cli as a starting platform.  This
              version sits in parallel with the existing application and is developed using TypeScript 2.X.`,
          PositionTechnologies: 'Angular 1.5, Angular, Web Api 2, Gulp, NodeJs, Bower, Karma, Jasmine and Ninject'
      },
      {
          Id: 3,
          CompanyName: 'Bond Pro',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'July 2016 to August 2016',
          PositionTitle: 'Sr. NET Developer',
          PositionDuties: `I helped resolve minor windows forms and AngularJs issues.`,
          PositionTechnologies: 'C# and AngularJs'
      },
      {
          Id: 4,
          CompanyName: 'BHI (Blue Health Intelligence)',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'July 2014 to July 2016',
          PositionTitle: '.NET Developer',
          PositionDuties: `I was a part of a 2-person development team.  I was responsible for re-architecturing an existing application,
            Xchange Advisor, that was built using ASP.NET, C# and Web forms to a Microsoft free solution using AngularJs, NodeJs, Bower
            and Bootstrap.  I developed an intranet website that helped track the releases and report promotion of Xchange Advisor.
            I achieved IBM® Certified Designer - Cognos 10 BI Reports certification and assisted in Cognos research of non-basic logic
            issues.
            I was a member of the corporate IT Board review team.  This team was responsible for best practices and code review.
          `,
          PositionTechnologies: 'C#, Angular 1.5, NodeJs, Bower, Bootstrap, Gulp, EF 5/6, CORS and Cognos'
      },
      {
          Id: 5,
          CompanyName: 'HSN (Home Shopping Network)',
          CompanyLocation: 'St. Petersburg, FL',
          DateRange: 'May 2014 to July 2014',
          PositionTitle: 'Contractor/.NET Developer',
          PositionDuties: `I assisted in resolving various website bugs and implementing the beginnings of a SEO implementation.`,
          PositionTechnologies: 'JavaScript and jQuery'
      },
      {
          Id: 6,
          CompanyName: 'CraftTek Consulting',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'February 2014 to May 2014',
          PositionTitle: 'Consultant/Sr. Software Engineer',
          PositionDuties: `I created a working prototype for a rules engine to handle dynamic decision scenarios for multiple systems.
            I created a second prototype to handle complicated login and enrollment processes.`,
          PositionTechnologies: 'C# 4.5, EF 6.0, Windows Azure Database and Windows Workflow 4.5'
      },
      {
          Id: 7,
          CompanyName: 'ProVest',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'August 2013 to February 2014',
          PositionTitle: 'Contractor/Sr. Developer',
          PositionDuties: `I implemented a Windows Workflow custom designer and a dynamic rules engine that allowed project managers
            and business analysts to create and execute workflows based upon client needs.
            I re-architectured the codebase to use the generic repository and unit of work patterns.`,
          PositionTechnologies: 'C# 4.0, WPF 4.0, Windows Workflow 4.5 and EF 5.0'
      },
      {
          Id: 8,
          CompanyName: 'Wolters Kluwer/Mediregs',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'June 2011 to August 2013',
          PositionTitle: 'Sr. Software Developer',
          PositionDuties: `I was a member of a 12 person development team that developed a multimillion dollar compliance/regulatory web
            application.  I developed two prototypes.  One prototype, using Windows Workflow, showcased a hosted Workflow Designer, custom
            activities and dynamic loading and saving of workflows using WPF 4.0.  The second prototype, using Active Directory Federated
            Services (ADFS), showed how it was possible to authenticate a user against a customer’s local Active Directory server using
            WCF 4 and Windows Azure.
            I assisted members of the team with pursuing Microsoft Certifications.`,
          PositionTechnologies: 'C# 4.0, WPF 4.0, Windows Workflow 4.5, WCF 4.0, Web Api 2 and EF 5.0/6.0'
      },
      {
          Id: 9,
          CompanyName: 'Mercury New Media',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'April 2011 to May 2011',
          PositionTitle: 'Web Developer',
          PositionDuties: `I resolved minor JavaScript/jQuery bugs.`,
          PositionTechnologies: 'JavaScript and jQuery'
      },
      {
          Id: 10,
          CompanyName: 'PowerChord, Inc.',
          CompanyLocation: 'St. Petersburg, FL',
          DateRange: 'March 2010 to April 2011',
          PositionTitle: 'Web Developer/Acting DBA/SVN Admin',
          PositionDuties: `I maintained existing VB.NET web applications for STIHL and Capel Rugs.  I designed and implemented a web
            application to allow regional distributors to mass email respective dealers using SilverPop.  I developed a simple
            (Content Management System (CMS) website to allow eMarketing team to create ad-hoc sites. I created various Windows
            Services to assist with data pulls from FTP sites, data backup, data cleaning and email scheduling.
            I was responsible for fixing and upgrading automated build server using CruiseControl.NET, NaNT and MsBuild. I was
            appointed SVN administrator and acting/backup Database Administrator (DBA).  I mentored members of team of SQL design
            and coding standards and performed stored procedure code reviews.`,
          PositionTechnologies: 'VB.Net, C#, Asp.NET, LINQ, Telerik, EF 5, jQuery, CruiseControl.NET, NaNT and MsBuild'
      },
      {
          Id: 11,
          CompanyName: 'Panther Technologies',
          CompanyLocation: 'Land O Lakes, FL',
          DateRange: 'June 2009 to November 2009',
          PositionTitle: 'Consultant',
          PositionDuties: `I designed and maintained a WPF 4.0 Windows application that will assist in comparing benefits data
            stored at an offsite location.  I created an application that interfaces a 3rd party benefit enrollment system and
            the mainframe.
            I performed all aspects of application/project lead development: Gathered requirements, met with end users, created
            design specifications and flowcharts, developed applications, tested applications, and performed follow-up maintenance
            as necessary.`,
          PositionTechnologies: 'Visual Studio 2010, C# 4.0, WPF 4.0, SQL Server 2008'
      },
      {
          Id: 12,
          CompanyName: 'Frank Crum',
          CompanyLocation: 'Clearwater, F',
          DateRange: 'February 2010 to March 2010',
          PositionTitle: 'Developer',
          PositionDuties: ``,
          PositionTechnologies: ''
      },
      {
          Id: 13,
          CompanyName: 'IVANS',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'July 2008 to June 2009',
          PositionTitle: 'Windows/Web Developer / Backup DBA',
          PositionDuties: `I performed all aspects of application/project lead development: Gathered requirements, met with end users,
            created design specifications and flowcharts, developed applications, tested applications, performed follow-up maintenance
            as necessary, mentored junior and mid-level .NET developers on coding and SQL standards and created and implemented best
            practices and coding standards for all future development.
            I assisted in database duties such as backup database administration, security requests, productions move requests, change
            control approvals, monitoring system performance and the creation of multiple SQL Server 2005 SSIS Packages, monitored daily
            SQL Server backup processes, optimized existing SQL Server stored procedures using performance monitoring and disk usage tools
            and assisted DBA with daily tasks such as production pushes, code reviews and schema changes
            I installed, maintained and trained end-users on Subversion (open-source source control). `,
          PositionTechnologies: ''
      },
      {
          Id: 14,
          CompanyName: 'Hillsborough County Sheriff’s Office',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'April 2007 to July 2008',
          PositionTitle: 'Web Application Developer',
          PositionDuties: ``,
          PositionTechnologies: ''
      },
      {
          Id: 15,
          CompanyName: 'ValueOptions',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'September 2001 to May 2008',
          PositionTitle: 'Reporting Development Coordinator/Tech Lead',
          PositionDuties: ``,
          PositionTechnologies: ''
      },
      {
          Id: 16,
          CompanyName: 'Integrated Technology Solutions',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'September 2000 to October 2000',
          PositionTitle: 'Application Programmer',
          PositionDuties: ``,
          PositionTechnologies: ''
      },
      {
          Id: 17,
          CompanyName: 'Greatstone Mortgage',
          CompanyLocation: 'Tampa, FL',
          DateRange: 'June 1999 to September 200',
          PositionTitle: 'Application Programmer',
          PositionDuties: ``,
          PositionTechnologies: ''
      },
      {
          Id: 18,
          CompanyName: 'Pratt & Whitney',
          CompanyLocation: 'North Haven, CT',
          DateRange: 'January 1998 to June 1999',
          PositionTitle: 'Application Programmer',
          PositionDuties: ``,
          PositionTechnologies: ''
      }
    ],
    Certification: [
        {
            Id: 1,
            Title: 'IBM&copy; Certified Designer - Cognos 10 BI Reports',
            Tests: []
        },
        {
            Id: 2,
            Title: 'Specializations',
            Tests: [
                'Programming in HTML5 with JavaScript and CSS Specialist'
            ]
        },
        {
            Id: 3,
            Title: 'Microsoft&copy; Certified Professional Develope (MCPD)r',
            Tests: [
                'Web Developer 4',
                'ASP.NET Developer 3.5'
            ]
        },
        {
            Id: 4,
            Title: 'Microsoft&copy; Certified Technology Specialist (MCTS)',
            Tests: [
                '.NET Framework 4, Service Communication Applications',
                '.NET Framework 4, Data Access',
                '.NET Framework 4, Web Applications',
                '.NET Framework 3.5, ASP.NET Applications'
            ]
        },
        {
            Id: 5,
            Title: 'Microsoft&copy; Certified Solution Developer (MCSD)',
            Tests: [
                'For Microsoft .NET'
            ]
        }
    ],
    Education: {
        Id: 1,
        UniversityName: 'Central Connecticut State University',
        UniversityLocation: 'New Britain, CT',
        DateGraduated: 'May 1999',
        Major: 'Computer Science',
        Minor: 'Mathematics'
    },
    Website: {
        Urls: [
            {
                Id: 1,
                Url: 'http://www.quickwareconsulting.net',
                Title: 'Quickware Consulting',
            },
            {
                Id: 2,
                Url: 'http://quickwareconsulting.blogspot.com/',
                Title: 'Quickware Consulting Blog',
            }
        ]
    }
};
