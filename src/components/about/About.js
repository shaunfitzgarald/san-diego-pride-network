import React from 'react';
import './About.css'; // This is the stylesheet for the About page

const About = () => {
  return (
    <div className="about-container">
      <h1>About San Diego Pride</h1>
      <p>
        San Diego Pride Network was established in 2024, inspired by the legacy of the Stonewall uprising, and has evolved into an independent nonprofit organization. Our roots in social advocacy have flourished into an expansive array of community-driven programs.
      </p>
      <p>
        Our activities are primarily funded through festival tickets, beverage sales, sponsorships, and exhibitor fees. These contributions amplify our philanthropic efforts to promote pride, equality, and respect for LGBTQ+ communities everywhere.
      </p>
      <h2>Our Mission and Vision</h2>
      <p>
        We are dedicated to building a world where LGBTQ+ individuals live free from prejudice. Our mission is to celebrate diversity, foster inclusion, and nurture respect for all members of our community, both locally and worldwide.
      </p>
      <h2>Commitment to Racial Justice and Equity</h2>
      <p>
        True to our mission, we are devoted to confronting and addressing racial injustice. Our ongoing initiatives — from recruitment and training to programming and community engagement — are intentional strides towards dismantling systemic racism and achieving true equity.
      </p>
      <h2>Join Us</h2>
      <p>
        Get involved and stay updated with San Diego Pride's initiatives. Subscribe for news, updates, and ways you can help us make a difference.
      </p>
      {/* Consider adding a subscription form or link here */}
    </div>
  );
};

export default About;
