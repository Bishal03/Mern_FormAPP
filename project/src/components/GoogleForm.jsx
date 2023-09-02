import React, { useState } from "react";
import axios from "axios";
import sucess from "./sucess";

function SOPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    highestEducation: "",
    instituteCompleted: "",
    studyField: "",
    workExperience: "",
    admittedInstitute: "",
    programOfStudy: "",
    applyingCountry: "",
    futureGoals: "",
    englishScores: {
      listening: "",
      reading: "",
      speaking: "",
      writing: "",
    },
    paidFirstYearTuition: "",
    tuitionFeePaid: "",
    didGIC: "",
    gicAmountPaid: "",
  });

  const handleChange = (field, value) => {
    if (field.includes(".")) {
      const [parentField, childField] = field.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parentField]: {
          ...prevData[parentField],
          [childField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/submit", formData);
      alert(response.data.message);
      sucess()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formStyle = {
    border: "none",
    outline: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    padding: "5px",
    marginTop: "30px",
  };
  const headerStyle = {
    border: "0px",
    borderTop: "10px solid DodgerBlue", // Use "solid" instead of "indigo-800"
    borderRadius: "1.75%",
    background: "white",
    padding: "30px",
  };
  const contentStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
  };
  const buttonStyle ={
    background:"DodgerBlue",
    color:'white',
    border:"none",
    padding:"10px",
    width:"25%",
    borderRadius:"8px"
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        minHeight: "100vh", // Ensure the form takes at least the viewport height
        background: "#ececec",
      }}
    >
      <div style={{ width: "640px" }}>
        <img
          style={{ width: "640px" }}
          src="https://lh6.googleusercontent.com/YS_rKjy2zPKUIG5Iw92tweOA_nT2S0WiX1iVM9wRM-fczREcNDRRgyavbgfVIFwjn8MRGJ1PQuaYepzmjQ898lsxWg0EJpnjPBTgJuCxmOmsuJWcdiBf3AEPcVngdAuCQXCq4FUXBdr_EAZTBfIr6wHU-29Q5g"
          alt=""
        />
      </div>
      <div>
        <form method="POST" style={{ width: "640px" }} >
          <div style={headerStyle}>
            <h1>Customized SOP Generation Tool</h1>
            <p>
              Fill this questionnaire for the student. After submitting, you
              will receive an email at the email address that you have provided
              with a Statement of Purpose customized for you. You can use and
              modify that as per your needs.
            </p>
            <p>
              If you would like to get it edited, reviewed, or drafted by our
              experts, you can get in touch with us:{" "}
              <a href="https://effizient-immigration-inc.square.site/s/shop">
                https://effizient-immigration-inc.square.site/s/shop
              </a>
            </p>
          </div>
          <br />

          <div style={contentStyle}>
            <label>Email<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Full Name<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Age<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="number"
              value={formData.age}
              onChange={(e) => handleChange("age",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Highest Level of Education<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.highestEducation}
              onChange={(e) => handleChange("highestEducation",e.target.value)}
              required
              placeholder="Your answer"
            />
            <div />
          </div>
          <br />

          <div style={contentStyle}>
            <label>
              Institute where you completed your highest level of education<span style={{color:"red"}}>*</span>
            </label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.instituteCompleted}
              onChange={(e) => handleChange("instituteCompleted",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>What did you study ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.studyField}
              onChange={(e) => handleChange("studyField",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>
              Do you have any relevant work experience? * Write None if no work
              experience. Provide the following details if yes: <br />
              <ol type="1">
                <li>Job Title</li>
                <li>Company Name</li>
                <li>Job Duties</li>
              </ol>
              Sample Answer: I worked as a Sales Manager
              at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this
              role, I managed sales operations, reaching out to leads, lead the
              outreach program, ensured meeting monthly targets. <span style={{color:"red"}}>*</span>
            </label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.workExperience}
              onChange={(e) => handleChange("workExperience",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>What institute did you get admitted to in Canada ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.admittedInstitute}
              onChange={(e) => handleChange("admittedInstitute",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>What is your program of study in Canada ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.programOfStudy}
              onChange={(e) => handleChange("programOfStudy",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Which country are you applying from ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.applyingCountry}
              onChange={(e) => handleChange("applyingCountry",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>What are your future goals ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.futureGoals}
              onChange={(e) => handleChange("futureGoals",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>English Scores - Listening<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.englishScores.listening}
              onChange={(e) => handleChange("englishScores.listening",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>English Scores - Reading <span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.englishScores.reading}
              onChange={(e) => handleChange("englishScores.reading",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>English Scores - Speaking<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.englishScores.speaking}
              onChange={(e) => handleChange("englishScores.speaking",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>English Scores - Writing<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.englishScores.writing}
              onChange={(e) => handleChange("englishScores.writing",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Did you pay your first year tuition ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.paidFirstYearTuition}
              onChange={(e) => handleChange("paidFirstYearTuition",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>How much tuition fee did you pay ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.tuitionFeePaid}
              onChange={(e) => handleChange("tuitionFeePaid",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>Did you do a GIC ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="radiobutton"
              value={formData.didGIC}
              onChange={(e) => handleChange("didGIC",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />

          <div style={contentStyle}>
            <label>How much did you pay towards GIC ?<span style={{color:"red"}}>*</span></label>
            <br />
            <input
              style={formStyle}
              type="text"
              value={formData.gicAmountPaid}
              onChange={(e) => handleChange("gicAmountPaid",e.target.value)}
              required
              placeholder="Your answer"
            />
          </div>
          <br />
          <button style={buttonStyle} type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SOPForm;
