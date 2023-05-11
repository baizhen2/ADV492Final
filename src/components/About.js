import React from 'react';
import '../css/About.css';

function AboutPage() {
    const paragraphs = [
      'Whether you are visiting a site or creating an account for a certain platform, there will often be times when you are presented with a Terms of Service document and/or a Privacy Policy, to which most people will simply skip the readings and click on the confirmation that they have read it. As a result, “I agree to the terms and conditions” is now referred to as “the biggest lie on the internet”.',
      'The problem that comes with this is that users usually truly do not know what they are consenting to when it comes to providing websites with their personal data. There is an overall lack of awareness when it comes to the extent of permissions users are granting to different technological services and as a result, it can often be a lot more than typical users would be comfortable with. It also provides companies with a lot of power to take advantage of their users, as they know that nearly all of them are not taking the time to read through these permissions that they are requesting.',
      'However, all of the blame cannot be put onto the users here. In a study by Jonathan Obar from York University (<a href="https://ssrn.com/abstract=4293363">https://ssrn.com/abstract=4293363</a>), out of 70 digital services (including social media, popular applications, banks, etc.), 57 of the 70 services would require more than an hour of reading both the terms of service and privacy policy and 34 of 70 would require more than two hours. Some sites even would require up to 10.2 hours and 7.1 hours respectively, to show the extent of the length for some of these.',
      'There’s a clear problem with the transparency of the terms of service and privacy policies of these websites. Users deserve to know how their data is being manipulated and what permissions they are signing away without having to read through hours and hours of difficult-to-digest documentation. As a result, we have created this website to try and summarize some of these policies and permissions to our website visitors so that the privacy information for each of the websites and services that they use are all readily accessible and easily digestible.',
      'To learn more about different studies and reports related to this topic as well as some other avenues that you can take to try and combat this problem, you can also visit: <a href="https://www.biggestlieonline.com/">https://www.biggestlieonline.com/</a>.',
    ];
  
    return (
      <div className='paragraphs-container'>
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    );
  }
  
  export default AboutPage;
  