import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    games: true,
    study: false,
    cooking: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstName,
        lastName,
        email,
        contact,
        gender,
        selectedOption,
        subjects,
        resume,
        url,
        about
    );
    // Add your form submission logic here
};
const handleReset = () => {
  // Reset all state variables here
  setFirstName("");
  setLastName("");
  setEmail("");
  setContact("");
  setGender("male");
  setSubjects({
      english: true,
      maths: false,
      physics: false,
  });
  setResume("");
  setUrl("");
  setSelectedOption("");
  setAbout("");
};
  return (
  
      <div className="Outer">
        <fieldset>
          <form>
            <h1>Form In React</h1>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              required
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              required
              name="firstname"
              id="firstname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Enter Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Contact</label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              required
              name="contact"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></input>
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            female
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            other
            <label>Your Hobbies</label>
            <input
              type="checkbox"
              name="hobby"
              id="games"
              checked={subjects.games === true}
              onChange={(e) => handleSubjectChange("games")}
            />
            Games
            <input
              type="checkbox"
              name="hobby"
              id="study"
              checked={subjects.study === true}
              onChange={(e) => handleSubjectChange("study")}
            />
            Study
            <input
              type="checkbox"
              name="hobby"
              id="cooking"
              checked={subjects.cooking === true}
              onChange={(e) => handleSubjectChange("cooking")}
            />
            Cooking
            <label>Upload Resume</label>
            <input
              type="file"
              name="file"
              id="file"
              placeholder="Enter Upload File"
              required
              onChange={(e) => setResume(e.target.files[0])}
            />
            <label for="url">Enter URL*</label>
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Enter url"
              required
              onChange={(e) => setUrl(e.target.value)}
            />
            <label>Select your choice</label>
            <select
              name="select"
              id="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled selected={selectedOption === ""}>
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="t">MongoDB</option>
              </optgroup>
            </select>
            <label for="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              onChange={(e) =>
                setAbout(e.target.value)
            }
              placeholder="About your self"
              required
            ></textarea>
            <button type="reset" value="reset" onClick={() => handleReset()}>
              Reset
            </button>
            <button type="submit" value="Submit"  onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    
  );
}

export default App;
