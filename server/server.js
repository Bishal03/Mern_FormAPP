const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT =process.env || 3000;
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://bishalmajhi03:Bishal03@cluster0.hcdzl3v.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const sopDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  highestEducation: String,
  instituteCompleted: String,
  studyField: String,
  workExperience: String,
  admittedInstitute: String,
  programOfStudy: String,
  applyingCountry: String,
  futureGoals: String,
  englishScores: {
    listening: String,
    reading: String,
    speaking: String,
    writing: String,
  },
  paidFirstYearTuition: String,
  tuitionFeePaid: String,
  didGIC: String,
  gicAmountPaid: String,
});

const SOPData = mongoose.model("SOPData", sopDataSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vicky03majhi@gmail.com",
    pass: "gqmdvhmiccaozxox",
  },
});

app.post("/api/submit", async (req, res) => {
  const formData = req.body;
  try {
    const newSOPData = new SOPData(formData);
    await newSOPData.save();

    // Send an email to the user with the form data
    const mailOptions = {
      from: "vicky03majhi@gmail.com",
      to: formData.email,
      subject: "Statement of Purpose Form Submission to ",
      html: `<p>Thank you for submitting the form. Here is the information you provided:
      <div>
            <form style="padding: 20px; background: #3c3c3c; border-radius: 10px;color:white">
            <label>Email</label><br />
            <input type="email" value="${formData.email}" disabled /><br/>
            <label>Full Name</label><br />
            <input type="text" value="${formData.name}" disabled/><br/>     
            <label>Highest Level of Education</label><br />
            <input type="text" value="${
              formData.highestEducation
            }" disabled/><br/>     
            <label>Institue where you Completed your highest level of Education ?</label><br />
            <input type="text" value="${
              formData.instituteCompleted
            }" disabled/><br/>     
            <label>What did you study ?</label><br />
            <input type="text" value="${formData.studyField}" disabled/><br/>     
            <label>Do you have any relevant work experience? * Write None if no work
            experience. Provide the following details if yes: <br />
            <ol type="1">
              <li>Job Title</li>
              <li>Company Name</li>
              <li>Job Duties</li>
            </ol>
            Sample Answer: I worked as a Sales Manager
            at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this
            role, I managed sales operations, reaching out to leads, lead the
            outreach program, ensured meeting monthly targets.</label><br />
            <input type="text" value="${formData.workExperience}" disabled/><br/>     
            <label>What institute did you get admitted to in Canada ?</label><br />
            <input type="text" value="${
              formData.admittedInstitute
            }" disabled/><br/>     
            <label>What is your program of study in Canada ?</label><br />
            <input type="text" value="${formData.programOfStudy}" disabled/><br/>     
            <label>Which country are you applying from ?</label><br />
            <input type="text" value="${formData.applyingCountry}" disabled/><br/>     
            <label>What are your future goals ?</label><br />
            <input type="text" value="${formData.futureGoals}" disabled/><br/>     
            <label>English Scores - Listening</label><br />
            <input type="text" value="${
              formData.englishScores.listening
            }" disabled/><br/>     
            <label>English Scores - Reading</label><br />
            <input type="text" value="${
              formData.englishScores.reading
            }" disabled/><br/>     
            <label>English Scores - Speaking</label><br />
            <input type="text" value="${
              formData.englishScores.speaking
            }" disabled/><br/>     
            <label>English Scores - Writing</label><br />
            <input type="text" value="${
              formData.englishScores.writing
            }" disabled/><br/>     
            <label>Did you pay your first year tuition ? </label><br />
            <input type="text" value="${
              formData.paidFirstYearTuition
            }" disabled/><br/>     
            <label> How much tuition fee did you pay ?</label><br />
            <input type="text" value="${formData.tuitionFeePaid}" disabled/><br/>     
            <label>Did you do a GIC ? </label><br />
            <input type="text" value="${formData.didGIC}" disabled/><br/>     
            <label>How much did you pay towards GIC ? </label><br />
            <input type="text" value="${formData.gicAmountPaid}" disabled/><br/>     
            </form>
      </div>
            <br/></p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res
      .status(200)
      .json({ message: "Form data saved and email sent successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Error saving form data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
