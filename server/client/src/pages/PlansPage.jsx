import React, { useContext } from "react";
import Plans from "../components/Plans";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/PlansPage.css";
import Newsletter from "../components/Newsletter";
import PlanPerks from "../components/PlanPerks";
import {
  VscMailRead,
  VscOrganization,
  VscRuby,
  VscChecklist,
  VscHome,
  VscMove,
} from "react-icons/vsc";
const PlansPage = () => {
  return (
    <div>
      <Navigation />
      <div className="PlansPageMain">
        <h1>Memberships made for everyone.</h1>
        <p>
          Experience personalized medical care that gets to the root cause of
          your symptoms. Healing takes time–start today.
        </p>
        <div className="Plans">
          <Plans
            type="Family"
            duration="Yearly"
            special="Most popular"
            amount="7500"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Plans
            type="Individual"
            duration="Yearly"
            amount="3000"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Plans
            type="Student"
            duration="Yearly"
            amount="2000"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </div>
      </div>
      <div className="PlansPageTwo">
        <h1>Your membership includes</h1>
        <ul>
          <li>365 messaging and support</li>
          <hr />
          <li>Personalized nutrition and lifestyle plans</li>
          <hr />
          <li>Experts to help navigate the healthcare maze</li>
          <hr />
          <li>Advanced diagnostic testing for hormones, genetics and more</li>
          <hr />
          <li>
            Same/next-day appointments, in-person or over text, that start on
            time
          </li>
        </ul>
      </div>
      <div className="PlansPageThree">
        <h1>One membership. Everything you need.</h1>
        <div className="PlanPerks">
          <PlanPerks
            image={<VscHome />}
            title="Care Team"
            description="Your clinician, health coach and care manager work together as a team to treat you holistically and provide continuous support."
          />
          <PlanPerks
            image={<VscMove />}
            title="Visits"
            description="In-depth visits let us get to know you inside and out and personalize your care. All visits are included in your membership."
          />
          <PlanPerks
            image={<VscMailRead />}
            title="Unlimited messaging"
            description="Your Care Team is always here for you: connect with them anytime through your Cloud medic dashboard."
          />
          <PlanPerks
            image={<VscChecklist />}
            title="Personalized health plan"
            description="Your unique health plan covers nutrition, movement, sleep and more to help you achieve your health goals and is customized throughout your care."
          />
          <PlanPerks
            image={<VscOrganization />}
            title="Ongoing support"
            description="Your team is by your side throughout your health journey to answer any questions, give recommendations and support you as you heal."
          />
          <PlanPerks
            image={<VscRuby />}
            title="Membership perks"
            description="Enjoy preferred pricing on offers from our health and wellness partners, including healthy eating options, fitness classes, and more."
          />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PlansPage;
