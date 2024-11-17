import React from "react";

const ContactForm = () => {
  return (
    <div className="contactFormContainerDiv">
      <h1
        className=" linearGradientEffect contactFormHeader">
        Lets work together!
      </h1>
      <p className="contactIntroductionPara">
        Hello my self Ali I am inviting you to work with me would you like to work
        with me if yes then contact me on the given number or email address.
      </p>
      {/* Input fields */}
      <form className="inputForm">
        <div className="inputNameContainerDiv">
          <input
            type="text"
            placeholder="First name"
            className="contactInputs"
          />
          <input
            type="text"
            placeholder="Last Name" 
            className="contactInputs"
          />
        </div>
        <div className="inputEmailPhoneContainerDiv ">
          <input
            type="Email"
            placeholder="Email address"
            className="contactInputs"
          />
          <input
            type="text"
            placeholder="Phone number" 
            className="contactInputs"
          />
        </div>
        <div>
            <select className="inputSelect">
                <option value="" disabled selected>Select and option</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="fullstack">Fullstack Development</option>
            </select>
        </div>
        <textarea rows={7} placeholder="Message" className="inputSelect">
            </textarea>
            <div className="messageButtonDiv">
                <button className="messageButton">Send Message</button>
            </div>
      </form>
    </div>
  );
};

export default ContactForm;
