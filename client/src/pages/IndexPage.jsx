import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/IndexPage.css";
import Newsletter from "../components/Newsletter";
import doorimg from "../images/doorimg.png";

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className="IndexPageTwo">
        <h1>Redefining primary care</h1>
        <p>
          This is no ordinary doctor’s office. Rather than do things the typical
          way, we’ve created a membership-based primary care practice truly
          designed around our patients’ needs.
        </p>
        <br />
        <p>
          We work with your insurance just like a regular doctor's office would,
          but we offer so much more. A Cloud Medic membership makes it faster,
          easier, and more enjoyable to look after your health
        </p>
      </div>
      <div className="IndexPageThree">
        <div className="IndexPageThreeText">
          <h1>Better health starts here</h1>
          <h2>It takes a village!</h2>
          <p>
            The journey to find your best health isn't one to go at alone. In
            fact, we think it takes a team. Your assigned Care Team works
            together to treat the system not the symptom, so that nothing slips
            through the cracks.
          </p>
          <h2>One size does not fit all!</h2>
          <p>
            Your Care Team designs a personalized plan that's built to fit your
            needs and lifestyle, with ongoing check-ins to ensure
            accountability.
          </p>
          <h2>Cut through the noise.</h2>
          <p>
            Cloud Medic takes the work out of wellness, with evidence-based
            wellness programing & assessments that never bow down to trends.
          </p>
        </div>
        <div className="IndexPageThreePic">
          <img src={doorimg} alt="" />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;
