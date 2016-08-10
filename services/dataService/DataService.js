(function () {
    "use strict";

    function DataService() {
        var data = {};
        /* David */
        data.david = {};
        data.david.image = {};
        data.david.image.class = "col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-8 col-xs-8";
        data.david.image.source = "/images/david_name.png";
        data.david.location = "Boca Raton, FL";
        data.david.education = "Delta State University";
        data.david.bio = "<p>David Meek founded Campus Management Corp. in 1988 and served as Chairman, CEO, and majority shareholder until 2008. Under his leadership, CMC became one of the most successful software companies in higher ed, serving more than 1200 college campuses across America. EdTech is fortunate to have David at the helm, leveraging his extensive background and deep relationships in education</p>";
        data.david.linkdin = "https://www.linkedin.com/company/education-technology-associates";
        data.david.twitter = "https://twitter.com/EdTechAssoc";
        data.david.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.david.instagram = null;
        /* Ken */
        data.ken = {};
        data.ken.image = {};
        data.ken.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.ken.image.source = "/images/ken_name.png";
        data.ken.location = "Boca Raton, FL";
        data.ken.education = "Lycoming College";
        data.ken.bio = "<p>Ken began his career as a CPA with a large accounting firm.  After forming and running his own CPA firm for 6 years, Ken acquired his largest CPA client and entered the wholesale medical supply business where he built, then sold, the company in 1992.  For the next 6 years Ken worked as CFO and/or COO, helped build, and owned interests in a niche computer software co. and a luggage manufacturer/wholesaler that revolutionized the modern luggage industry.  In 1998, Ken started a nationwide Professional Employer Organization client brokerage operation that he still operates today. Ken also has involvement in various wide ranging business ventures.</p>";
        data.ken.linkdin = "https://www.linkedin.com/company/education-technology-associates";
        data.ken.twitter = "https://twitter.com/EdTechAssoc";
        data.ken.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.ken.instagram = null;
        /* Kevin */
        data.kevin = {};
        data.kevin.image = {};
        data.kevin.image.class = "col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-8 col-xs-8";
        data.kevin.image.source = "/images/kevin_name.png";
        data.kevin.location = "Indianapolis, IN";
        data.kevin.education = "University of Indianapolis";
        data.kevin.bio = "<p>Kevin is responsible for Technology, Product Development, Account Management, and Client Relationships & Support.  Prior to EdTech, Kevin spent 6 years as the Information Services Vice President for Harrison College and has also held multiple positions of IT leadership at several large financial services organizations.   Outside of EdTech, Kevin is an avid golfer, sports junkie, and enjoys travelling.</p>";
        data.kevin.linkdin = "https://www.linkedin.com/in/kevinhesler";
        data.kevin.twitter = "https://twitter.com/kheslerindy";
        data.kevin.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.kevin.instagram = null;
        /* Connie */
        data.connie = {};
        data.connie.image = {};
        data.connie.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.connie.image.source = "/images/connie_name.png";
        data.connie.location = "Boca Raton, FL";
        data.connie.education = "Georgetown College (BS), University of Louisville (JD)";
        data.connie.bio = "<p>Connie Cole builds collaborative partnerships with institutions seeking game-changing student retention and engagement solutions. She has over 20 years of software sales and relationship management experience. Prior to EdTech, Connie held sales leadership roles at Campus Management and was Sr. VP of Sales with DialogEDU.</p>";
        data.connie.linkdin = "https://www.linkedin.com/company/education-technology-associates";
        data.connie.twitter = "https://twitter.com/EdTechAssoc";
        data.connie.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.connie.instagram = null;
        /* Luiz */
        data.luiz = {};
        data.luiz.image = {};
        data.luiz.image.class = "col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-8 col-xs-offset-2";
        data.luiz.image.source = "/images/luiz_name.png";
        data.luiz.location = "Boca Raton, FL";
        data.luiz.education = "Florida Atlantic University";
        data.luiz.bio = "<p>Luiz comes to us from Campus Management where he has spent the last 12 years in the higher education software market. He started his career in Marketing, moved to Account Management, and eventually to Sales. Luiz is a great client champion and has been a top performer for his entire career, winning several accolades including Top Net New Deals Salesman in 2014. He also went on to break ground in Latin America as part of a company international expansion and amassed 12 new international clients, set up an operations office in Brazil and hired 5 people in that market before returning to the U.S market in late 2015. Luiz enjoys working in challenging environments and thrives around dynamic and energetic people.</p>";
        data.luiz.linkdin = "https://www.linkedin.com/company/education-technology-associates";
        data.luiz.twitter = "https://twitter.com/EdTechAssoc";
        data.luiz.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.luiz.instagram = null;
        /* Mel */
        data.mel = {};
        data.mel.image = {};
        data.mel.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.mel.image.source = "/images/mel_name.png";
        data.mel.location = "Indianapolis, IN";
        data.mel.education = "DePauw University (BA), Indiana Wesleyan University (MBA)";
        data.mel.bio = "<p>Mel Roberts brings software solutions to life. With 9 years of experience as a Business Analyst and Project Manager, she knows how to uncover hidden requirements, bridge the communication gap between the business and technology, prioritize work, and manage expectations.</p>" +
                        "<p>Prior to EdTech, Mel worked as a software consultant specializing in SQA, BA, and PM roles in a number of industries. Mel also translated the needs of the global quality and engineering community of a $600M manufacturing company into highly effective software requirements. Using Agile methodology, Mel led projects to build two new software systems, including a mobile app, from the ground up.</p>";
        data.mel.linkdin = "https://www.linkedin.com/in/melissa-roberts-0993b5b1";
        data.mel.twitter = "https://twitter.com/EdTechAssoc";
        data.mel.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.mel.instagram = null;
        /* Mark */
        data.mark = {};
        data.mark.image = {};
        data.mark.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.mark.image.source = "/images/mark_name.png";
        data.mark.location = "Indianapolis, IN";
        data.mark.education = "Purdue University";
        data.mark.bio = "<p>As an Account Manager for EdTech, Mark works collaboratively with new and existing partner institutions to deliver on our promise of student engagement.  Although enjoying all aspects of his role, Mark has a passion for meeting and working with new people.   Prior to joining EdTech, Mark spent over 5 years in higher education administration with a focus on domestic and international student success.  He also served 4 years as an Account Manager and Technical Recruiter for the largest staffing agency in the country. Mark is a graduate of Purdue University-home of the first and last person to walk on the moon.</p>";
        data.mark.linkdin = "https://www.linkedin.com/in/mark-chyba-516814109";
        data.mark.twitter = "https://twitter.com/EdTechAssoc";
        data.mark.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.mark.instagram = null;
        /* Brett */
        data.brett = {};
        data.brett.image = {};
        data.brett.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.brett.image.source = "/images/brett_name.png";
        data.brett.location = "Dallas, TX";
        data.brett.education = "AIU";
        data.brett.bio = "<p>Brett is a Senior Python Developer and broad spectrum geek. His experience in technology originated in tinkering with electronic destruction as a teenager and continues today in a more productive form of creating beautiful and useful web-based solutions. When not in his dark closet of computer chaos, he can be found creating mouth-watering and gorgeous culinary feats of gastronomy, or chasing his rambunctious progeny.</p>";
        data.brett.linkdin = "https://www.linkedin.com/in/brett-deangelis-82505a23";
        data.brett.twitter = "https://twitter.com/EdTechAssoc";
        data.brett.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.brett.instagram = null;
        /* Anton */
        data.anton = {};
        data.anton.image = {};
        data.anton.image.class = "col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-8 col-xs-8";
        data.anton.image.source = "/images/anton_name.png";
        data.anton.location = "Indianapolis, IN";
        data.anton.education = "Indiana University East";
        data.anton.bio = "<p>Anton is a Python Developer who enjoys all things technology. Anton’s ambition and tenacity for technology far exceed his years of experience.  He has developed expertise in .NET, Python, Java, AngularJS, MongoDB, MySQL, MSSQL, NginX, AWS, and a plethora of other programming languages that continue to peak his technology interest.  After an internship with Harrison College, Anton worked at OmniSite before joining EdTech.  When not busy working on the software problem of the day, he can likely be found tinkering on his computer or playing video games.</p>";
        data.anton.linkdin = "https://www.linkedin.com/in/antonmiles";
        data.anton.twitter = "https://twitter.com/EdTechAssoc";
        data.anton.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.anton.instagram = null;
        /* Megan */
        data.megan = {};
        data.megan.image = {};
        data.megan.image.class = "col-lg-4 col-lg-offset-6 col-md-4 col-md-offset-6 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4";
        data.megan.image.source = "/images/megan_name.png";
        data.megan.location = "Indianapolis, IN";
        data.megan.education = "Ball State University";
        data.megan.bio = "<p>Megan is the go to person for all things design at EdTech, bringing our creative side to life. With a degree in Visual Communications from Ball State University, Megan has a wide-ranging portfolio in art – from painting and ceramics to graphic design and web design.  Aside from design, Megan loves to work on her hand lettering projects and enjoys baking and traveling.  On the weekends, you can find her hanging with her friends or at the local Starbucks.</p>";
        data.megan.linkdin = "https://www.linkedin.com/in/meganhesler";
        data.megan.twitter = "https://twitter.com/EdTechAssoc";
        data.megan.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.megan.instagram = "https://instagram.com/mjhdesigns_";
        /* Anna */
        data.anna = {};
        data.anna.image = {};
        data.anna.image.class = "col-lg-4 col-lg-offset-2 col-md-6 col-md-offset-2 col-sm-8 col-sm-offset-1 col-xs-8 col-xs-offset-1";
        data.anna.image.source = "/images/anna_name.png";
        data.anna.location = "Indianapolis, IN";
        data.anna.education = "Indiana University East";
        data.anna.bio = "<p>Anna is a junior Web Developer at EdTech, with a passion for learning. She is a recent graduate from Indiana University East, with a degree in Informatics. Anna has had experience with a number of programming technologies, including her personal favorites - Python and AngularJS. In her spare time she enjoys knitting and playing the ukulele.</p>";
        data.anna.linkdin = "https://www.linkedin.com/in/anna-harrison-83a38628";
        data.anna.twitter = "https://twitter.com/EdTechAssoc";
        data.anna.facebook = "https://www.facebook.com/EdTechAssociates/";
        data.anna.instagram = null;

        return data;
    }

    DataService.$inject = [];

    angular
        .module("EdTech.DataService", ["ngSanitize"])
        .service("DataService", DataService);
}());