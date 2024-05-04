import React, { useState, useEffect } from "react";
import "./css/Auth.css"; // Import CSS styles

function App() {
  // Define state variables for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [grantInterest, setGrantInterest] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setFormSubmitted(true);
  };

  // Form validation effect
  useEffect(() => {
    // Add form validation logic here
  }, [fullName, email, phoneNumber, annualRevenue, lookingFor, location, industry, grantInterest]);

  return (
    <div className="page-wrapper">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="main-wrapper">
        <section className="section">
          <div className="side-panel"></div>
          <div className="container">
            {/* Contact Form Component */}
            <ContactForm
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              annualRevenue={annualRevenue}
              setAnnualRevenue={setAnnualRevenue}
              lookingFor={lookingFor}
              setLookingFor={setLookingFor}
              location={location}
              setLocation={setLocation}
              industry={industry}
              setIndustry={setIndustry}
              grantInterest={grantInterest}
              setGrantInterest={setGrantInterest}
              handleSubmit={handleSubmit}
              formSubmitted={formSubmitted}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="global">
      <div className="html w-embed">
        {/* Styles and Scripts */}
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm(props) {
  // Destructure props
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    annualRevenue,
    setAnnualRevenue,
    lookingFor,
    setLookingFor,
    location,
    setLocation,
    industry,
    setIndustry,
    grantInterest,
    setGrantInterest,
    handleSubmit,
    formSubmitted,
  } = props;

  return (
    <div className="contact_column2 is-right">
      <div className="logo_container">
        {/* Logo Image */}
      </div>
      <div id="contact-form" className="form w-form">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          {/* Full Name */}
          <input
            className="field fullname w-input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {/* Email */}
          <input
            className="field business-email w-input"
            type="email"
            placeholder="Business Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Phone Number */}
          <input
            className="field phone-number w-input"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {/* Annual Revenue */}
          <div className="field_wrap">
            {/* Radio Buttons for Annual Revenue */}
          </div>
          {/* Looking For */}
          <div className="field_wrap">
            {/* Radio Buttons for What are you looking for? */}
          </div>
          {/* Location */}
          <div className="field_wrap is-radio">
            {/* Radio Buttons for Where are you located? */}
          </div>
          {/* Industry */}
          <div className="field_wrap is-radio">
            {/* Dropdown for Industry */}
          </div>
          {/* Grant Interest */}
          <div className="field_wrap is-radio">
            {/* Radio Buttons for Are you interested in applying for a grant? */}
          </div>
          {/* Submit Button */}
          <input type="submit" value="Apply Now" className="submit_button w-button" />
          {/* Success Message */}
          {formSubmitted && <div className="success w-form-done">Thank you! Your submission has been received!</div>}
        </form>
      </div>
    </div>
  );
}

export default App;
