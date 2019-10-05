import BannerArea from './BannerArea'
import ContactArea from './ContactArea'

let mainTexts = [// All Text given by TIF team
    (
        <p>Have you ever built a working prototype for any competition or project and don't know how to go forward?<br />
            Are you lacking mentorship or funding to make your prototype a product?<br />
            Look no further, we are here.<br /><br />
            Tech and Innovation Fair (TIF) is one of the flagship events of Shaastra 2019 that provides a platform for hardcore tech-based projects and prototypes to develop into a minimum viable product (MVP) through rigorous business and technical mentoring by experts in the industry. TIF provides networking opportunities to selected teams with entrepreneurs, angel investors and other experts in the field. The winning team gets a pre-incubation opportunity in the IIT Madras Incubation Cell.<br /><br />

            We have launched a new initiative under TIF this year called Junior Makeathon (JMT). This program is specially focused on high school students to inculcate maker culture.</p>
    ),
    (
        <p>IIT Madras is a pioneer for its exceptional excellence driving innovation and entrepreneurship culture.
        The ecosystem consists of cutting edge research, industrial interactions, India’s first university-driven Research Park, and a stellar record of incubation in rural, social and industrial technologies.
        Apart from creating fine engineers, the institute also fosters new entrepreneurs with creative ideas and solid strategies.
        4 out of the top 5 ​upcoming startups listed in the Economic Times Startup Awards were initially IIT Madras student projects that were successfully incubated into startups.
        The IIT Madras Incubation Cell and other unique facilities for students owe the credit for these winning colors.
        We envision to exalt IIT Madras’ rich startup ecosystem in our mission to promote innovation and revolutionize the hardcore tech startups in India. <br /><br />

            Do you dream to convert your innovation to a revolution? Come, join TIF, we will help you to skyrocket your project…
        </p>
    ),
    (
        <p>The Tech and Innovation Fair will have 3 stages :<br /><br />

            <b>Stage 1</b>: Initial Shortlisting -<br />

            All the participating teams will be required to submit a review of their prototype in the form of a video and documents describing the details. More information about the format can be found on the Registration Link.
            After a thorough consideration of all prototypes, the top 20 will be selected by the judges for the
            next round.<br /><br />

            <b>Stage 2</b>: Mentoring -<br />

            The selected teams will get a chance to connect with experts and mentors and will get mentorship on how to develop a business model. This will be for a month’s duration and will equip the teams with the necessary knowledge on building a startup and enhance their business expertise for presenting a pitch.<br /><br />

            <b>Stage 3</b>: Finale -<br />

            This is when the Tech and Innovation Fair will happen. The 20 teams will get the opportunity to come to IIT Madras and present their prototypes in front of the 50k+ Tech-enthusiastic people in SHAASTRA 2020! There will be networking opportunities, exploring opportunities, learning opportunities and a lot more. There will be a series of workshops that the teams will have to attend and apply the things they learn here in their final pitch on the last day of Shaastra. The top 3 winning teams will be rewarded based on their final pitch!<br /><br />

            So Gear Up and Give It All You Got!!!</p>
    ),
    (
        <p>
            We go beyond the conventional ‘closed room pitching’ to ensure that budding businessmen/women are given exposure and opportunity to take their idea forward.<br />
            <ul>
                <li>Prizes worth ₹1.5 lakh.</li>
                <li>Mentorship to the top teams; helping them understand more about the potential of their projects and an insight into how markets work</li>
                <li>Possible incubation opportunity by Incubation Cell of IIT Madras</li>
                <li>Possible funding opportunities through VC’s and other investors</li>
                <li>Networking sessions with experts in various fields, professors and other relevant people as part of the event</li>
                <li>A chance to showcase your projects and ideas in front of thousands of people during Shaastra</li>
            </ul>
        </p>
    )
]

let images = [//All images given by TIF team
    'b4.CR2', 'b5.jpg', 'b6.jpg'
]

export default () => (

    <div id="myContainer">
        <a name="banner1"></a><BannerArea bodyTitle="About TIF" bodyText={mainTexts[0]} image={images[0]} id="banner1" />
        <a name="banner2"></a><BannerArea bodyTitle="Why TIF?" bodyText={mainTexts[1]} image={images[1]} id="banner2" />
        <a name="banner3"></a><BannerArea bodyTitle="How Does It Work?" bodyText={mainTexts[2]} image={images[2]} id="banner3" />
        <a name="banner4"></a><BannerArea bodyTitle="What's in Store For You?" bodyText={mainTexts[3]} image={images[0]} id="banner4" />
        <a name="banner5"></a><ContactArea />
    </div>

)