import imgrfo from '../asset/img/RFO_m0.png';
import rfo_ia from '../asset/img/RFO_IA.png';
import rfo_lf0 from '../asset/img/RFO_lf0.png';
import rfo_lf1 from '../asset/img/RFO_lf1.png';
import rfl_cn from '../asset/img/RFO_components.png';
import rfl_hf0 from '../asset/img/RFO_hf0.png';
import rfl_hf1 from '../asset/img/RFO_hf1.png';
import rfl_hf2 from '../asset/img/RFO_hf2.png';
import rfl_hf3 from '../asset/img/RFO_hf3.png';
import rfl_hf4 from '../asset/img/RFO_hf4.png';
import rfl_hf5 from '../asset/img/RFO_hf5.png';
import imgdd from '../asset/img/DD_m0.png';
import ddp0 from '../asset/img/DD_p0.png';
import ddp1 from '../asset/img/DD_p1.png';
import ddp2 from '../asset/img/DD_p2.png';
import ddstoryboards from '../asset/img/DD_storyboard.png';
import ddia from '../asset/img/DD_IA.png';
import ddlf from '../asset/img/DD_lf.png';
import ddw0 from '../asset/img/DD_w0.png';
import ddw1 from '../asset/img/DD_w1.png';
import ddw2 from '../asset/img/DD_w2.png';
import imgchgh from '../asset/img/CHGH_m0.png';
import imgTW from '../asset/img/TW_m0.png';
import twcv from '../asset/videos/TW_creating.MP4';
import twci from '../asset/img/TW_c0.jpg';

export const contents = {
    RedFlagsOut: {
        "url": "RedFlagsOut",
        "img": imgrfo,
        "title": "Red Flags Out",
        "subtitle": "A dating app focusing on Red Flags",
        "overview": "Red Flags Out is dedicated to transforming the dating landscape by emphasizing healthy and respectful relationships. Our primary goal is to create a dating environment that prioritizes open communication, trust, and personal boundaries. Through our platform, we empower users to recognize and address potential red flags early on, promoting safe and meaningful connections based on mutual respect.",
        "duration": "9 Weeks<br/>9 March - 11 May 2023",
        "teammembers": "",
        "problemstatement": "In the realm of online dating, there is an urgent need to address the issue of <span className='bg-white px-1'>unnoticed red flags</span>, which can lead to <span className='bg-white px-1'>unhealthy relationships</span> and <span className='bg-white px-1'>dating failures</span>. Existing dating platforms often lack effective mechanisms for detecting and addressing these red flags, leaving users vulnerable and their time wasted. Consequently, there is a critical demand for a dating app that <span className='bg-white px-1'>prioritizes the identification of red flags.</span>",
        "requirements": "<h4>Unique Selling Point</h4>" +
            "Red Flags Out prioritizes your safety, revolutionizing connections by proactively identifying red flags. Using advanced algorithms, we filter out profiles with concerns before you see them, ensuring peace of mind. With a unique focus on safety, we empower informed decisions, redefine dating, and foster secure environments for genuine connections." +
            "<h4 className='mt-3'>Business Goals</h4><ul><li>User acquisition: Attract users seeking an efficient, safe, and responsible dating experience.</li><li>User retention: Keep existing users through abundant potential matches, red flag identification tools, and safety tips.</li><li>Subscription: Offer a premium version with features like priority matching, ad-free experience, and personalized advice from experts.</li><li>Brand reputation: Establish a robust reputation as a trusted and responsible dating platform prioritizing user safety and well-being.</li><li>Market share: Target a significant percentage of the rapidly growing dating app market.</li><li>Partnership: Collaborate with relationship counseling services and safety organizations to enhance value.</li></ul>" +
            "<h4 className='mt-3'>Target Users</h4>Individuals who are looking for a safe, efficient, and responsible way to connect with potential partners. People aged between 21 - 35 who had some previous relationship experience and know exactly what to avoid in the future." +
            "<h4 className='mt-3'>User Goals</h4><ul><li>Early red flag detection in matching</li><li>Personalized match recommendations.</li><li>Learn about healthy relationships, warning signs of abuse, and stay safe while dating.</li><li>Find meaningful and positive relationships.</li></ul>" +
            "<h4 className='mt-3'>Usability Objectives</h4><ul><li>User Acquisition Rate: Aim to reach 5,000 new users within the first three months of app launch.</li><li>User Retention: Strive to achieve a 50% user retention rate within the first six months of users joining the app.</li><li>Customer Satisfaction: Target a minimum rating of 3.5 out of 5 in the customer feedback survey, encompassing ratings and reviews.</li></ul>" +
            "<h4 className='mt-3'>User Scenarios</h4><ul><li>John has had many bad relationships and is tired of wasting his time on partners with red flags. She signs up for the red flag-focused dating app hoping to find someone who shares his values and priorities.</li><li>Mandy is a busy professional who doesn't have time to waste on bad dates. She uses the red flag-focused dating app to quickly screen potential partners and weed out anyone with obvious warning signs.</li><li>Jamie is a survivor of domestic abuse and is understandably cautious about getting involved with anyone who might exhibit abusive behavior. She feels more secure using a dating app that focuses on identifying red flags and potential warning signs.</li></ul>",
        "personas": "",
        "IA": rfo_ia,
        "lowfidelity": [{ img: rfo_lf0, txt: "Identify your red flags with guidance" }, { img: rfo_lf1, txt: "Define your red flags" }],
        // {
        //     "txt": ["Identify your red flags with guidance", "Define your red flags"],
        //     "img": [rfo_lf0, rfo_lf1]

        // },
        "components": {
            "txt": "I carefully selected a peach red color as the main color for my project with the intention of creating a warm, vibrant, and inviting atmosphere for users. To add a touch of energy and excitement, I also included some yellow in the color palette.",
            "img": rfl_cn
        },
        "highfidelity": {
            "title": ["Red Flags Home", "My Red Flags", "My Red Flags - Add", "Common Red Flags", "Scenario", "Match"],
            "txt": ["Embark on your journey of understanding red flags in relationships and discover your own personal warning signs right here.", "Add and sort your personal Red Flags.", "Add Common Red Flags from default list or add personalized Red Flag.", "Filter by category and add the common Red Flags to your personal list.", "Go through the scenario and select your answer to continue.", "Like the prompts and get ready to match."],
            "img": [rfl_hf0, rfl_hf1, rfl_hf2, rfl_hf3, rfl_hf4, rfl_hf5]
        },
        "reflection": "<span className='bg-white px-1'>Ensure clarity in  text usage</span>: Be concise yet clear in  UI text. Poor wording can lead to misunderstandings or a diminished user experience. Strive for straightforward and easily comprehensible language to enhance user understanding and provide a seamless experience.<br><br><span className='bg-white px-1'>Enhance user flow with shortcuts</span>: Incorporate skip functions to improve the experience for returning users."
    },
    Deepdive: {
        "url": "Deepdive",
        "img": imgdd,
        "title": "Deepdive",
        "subtitle": "A learning and tracking app for freedivers",
        "overview": "DeepDive is a unique app is designed to introduce users to the sport of freediving, enabling them to log and monitor their dives in a single, user-friendly platform. Notably, the app stands out by offering freediving lessons and providing divers with an all-in-one tool to track their progress.",
        "duration": "4 Weeks<br/>9 February - 9 March 2023",
        "teammembers": "Zoe Lo<br>Mital Kamani",
        "problemstatement": "Diving is a thrilling and widely enjoyed sport, but it also poses risks when not executed with adequate training and safety measures. Although there are various resources available to help divers learn and keep track of their progress, such as instructor-led training, diving logs, and certification courses, there is a demand for a comprehensive mobile application that can assist divers in tracking their progress, learning new skills, and maintaining their safety.",
        "requirements": "<h4>Unique Selling Point</h4>" +
            "This app is one of its kind to offer lessons on freediving. It also allows divers to track their journey all in one place. It would be refreshingly cool and easy to use. " +
            "<h4 className='mt-3'>Business Goals</h4><ul><li>Attract new freedivers and retain existing ones</li><li>Understanding freedivers’ patterns and performances through Data collection and analysis</li><li>Allowing learners to subscribe to a premium version that provides personalized learning and tracking</li><li>Motivating game mechanics</li><li>Advertising and Other Revenue</li></ul>" +
            "<h4 className='mt-3'>Target Users</h4>Divers aged between 16 to 35." +
            "<h4 className='mt-3'>User Goals</h4><ul><li>Learn more about the freediving sport.</li><li>Improve their skills and techniques.</li><li>Track their training progress.</li><li>Gain safety tips and follow the guidelines.</li></ul>",
        "personas": "",
        "storyboards": ddstoryboards,
        "IA": ddia,
        "persona": [ddp0, ddp1, ddp2],
        "lowfidelity": [{ img: ddlf, txt: "" }],
        "wireframe": [{ img: ddw0, txt: "Logging a new dive" }, { img: ddw1, txt: "Read the summary and overview of your tracking data" }, { img: ddw2, txt: "Starting a lesson" }]
    },
    CHGH: {
        "url": "CHGH",
        "img": imgchgh,
        "title": "Cheng Hsin General Hospital",
        "subtitle": "Responsive Web Design",
        "overview": "Cheng Hsin General Hospital is a modern general hospital located in Taipei, and it is famous for cardiology. The goal of this project was to build a responsive website featuring the new international medical services and provide more convenient online services for the general public.",
        "duration": "Jun 2019 - Oct 2020",
        "role": "<ul><li>Integrated the needs of 80+ departments.</li><li>Executed from design to web development.</li><li>Improved usability according to feedbacks from users</li></ul>",
        "problemstatement": "The previous hospital website was constructed nearly a decade ago. Given the hospital's substantial expansion of services, the old website became inadequate for accommodating the extensive information. For instance, the recently established International Medical Services Center necessitated a multi-language website to cater to international patients. Additionally, the inability of departments to edit their information on the old website, due to outsourcing, posed significant inconvenience.",
        "development": "Our team used .NET to build the four websites. Once I confirmed the design, I began developing the websites using HTML, CSS, and JavaScript. Meanwhile, other engineers focused on the back-end code. The schedule was tight, and due to time constraints, we had to develop and test simultaneously. When the project was approximately 80% complete, my teammates shifted their focus to other systems. I took full responsibility for completing the websites and publishing them independently. Throughout the development process, I directly received feedback and continuously improved the functionality by incorporating their requirements."
    },
    TheWindow: {
        "url": "TheWindow",
        "img": imgTW,
        "title": "The Window",
        "subtitle": "Installation Art",
        "overview": "In the daytime, 'The Window' is no different from other windows. Serving as an outlet for our visions, we can see through it clearly. However, when night falls, the lights come on, and it loses its transparent qualities. 'The Window' melds the city lights into a glossy surface, concealing the unseen void behind it.<br><br>'The Window' is an installation artwork that radiates in the nighttime. We utilized Arduino to control the PWM signal.",
        "duration": "Mar 2017 - Jun 2017",
        "role": "<ul><li>Lead the team.</li><li>Solve communication problems within the team</li><li>Code the interaction for the lights.</li>",
        "creatingprocess": {
            "txt": "To make the three-meter-tall installation stand in the wind, we sought advice from an iron factory professional. To make it stand in the rain, we applied waterproof measures. We laser-cut small dots on acrylic to make the entire area shine, and we used Arduino to control the light. Sitting in front of The Window, I solely defined the lighting styles and wrote the code.",
            "img": twci,
            "video": twcv
        }
    }

}