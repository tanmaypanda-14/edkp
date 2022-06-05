import Navbar from "../components/NavBar";
import '../styles/UserDetails.css'
import PropTypes from 'prop-types';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function UserDetails(props){

    let years = [ ];
    let centers = [{
        label: "Faculty of Engineering and Technology",
        value:"Faculty of Engineering and Technology"
    },
    {
        label: "Science",
        value:"Science"
    },
    {
        label: "Polytechnic",
        value:"Polytechnic"
    },
    {
        label: "Fine Arts ,Media and Journalism",
        value:"Fine Arts ,Media and Journalism"
    },
    {
        label: "Governance",
        value:"Governance"
    },
    {
        label: "Public Policy",
        value:"Public Policy"
    },
    {
        label: "Economics",
        value:"Economics"
    },
    {
        label: "Commerce",
        value:"Commerce"
    },
    {
        label: "Sustainability Studies",
        value:"Sustainability Studies"
    },
    {
        label: "Peace Studies",
        value:"Peace Studies"
    },
    {
        label: "Design",
        value:"Design"
    },
    {
        label: "Faculty of Tourism Studies",
        value:"Faculty of Tourism Studies"
    },
    {
        label: "Management",
        value:"Management"
    },
    {
        label: "Pharmacy",
        value:"Pharmacy"
    },
    {
        label: "Law",
        value:"Law"
    },
    {
        label: "Liberal Arts",
        value:"Liberal Arts"
    },
    {
        label: "Education",
        value:"Education"
    },
    ]
    let schools = [{
        label: "School of Mechanical Engineering",
        value:"School of Mechanical Engineering"
    },   
    {
        label: "School of Computer Science",
        value:"School of Computer Science"
    },
    {
        label: "School of Electronics & Communication Engineering",
        value:"School of Electronics & Communication Engineering"
    },
    {
        label: "School of Electrical Engineering",
        value:"School of Electrical Engineering"
    },
    {
        label: "School of Civil Engineering",
        value:"School of Civil Engineering"
    },
    {
        label: "School of Chemical Engineering",
        value:"School of Chemical Engineering"
    },
    {
        label: "School of Polymer Engineering",
        value:"School of Polymer Engineering"
    },
    {
        label: "School of Petroleum Engineering",
        value:"School of Petroleum Engineering"
    },

    ]
    let trimesters = [{
        label:"1",
        value:"1"
    },
    {
        label:"2",
        value:"2"
    },
    {
        label:"3",
        value:"3"
    },
    {
        label:"4",
        value:"4"
    },
    {
        label:"5",
        value:"5"
    },
    {
        label:"6",
        value:"6"
    },
    {
        label:"7",
        value:"7"
    },
    {
        label:"8",
        value:"8"
    },
    {
        label:"9",
        value:"9"
    },
    {
        label:"10",
        value:"10"
    },
    {
        label:"11",
        value:"11"
    },
    {
        label:"12",
        value:"12"
    },
    ]
    let groups = [{
        label:"MIT-WPU",
        value:"MIT-WPU"
    }]
    let divStreams = [{
        label:"UG B.Tech.",
        value:"UG B.Tech."
    }]
    let years2 = [{
        label:"First Year",
        value:"First Year"
    },
    {
        label:"Second Year",
        value:"Second Year"
    },
    {
        label:"Second Year",
        value:"Second Year"
    },
    {
        label:"Third Year",
        value:"Third Year"
    },
    {
        label:"Fourth Year",
        value:"Fourth Year"
    },
    {
        label:"Fifth Year",
        value:"Fifth Year"
    },
    ]

    let [year, setYear] = useState("⬇️ Select a year ⬇️");
    let [center, setCenter] = useState("Select center");
    let [school, setSchool] = useState("Select School");
    let [trimester, setTrimester] = useState("Select Trimester");
    let [group, setGroup] = useState("Select Group");
    let [divStream, setDivStream] = useState("Select Division Stream")
    let [year2, setYear2] = useState("Select your Year")
    const history = useNavigate();
    //for the dropdown of years logic
    let yr = new Date();
    for(var i = 2000; i < yr.getFullYear(); i++){
    var j = i+1;
    years.unshift({ label: i+"-"+j , value:  i+"-"+j }  )
    }

    let handleYearChange = (e) => {
        setYear(e.target.value);
      }

    let handleCenterChange = (e) => {
        setCenter(e.target.value);
      }

    let handleSchoolChange = (e) => {
        setSchool(e.target.value);
      }

    let handleTrimesterChange = (e) => {
        setTrimester(e.target.value);
      }
    
    let handleGroupChange = (e) => {
        setGroup(e.target.value);
      }
    
    let handleDivStreamChange = (e) => {
        setDivStream(e.target.value);
      }

    let handleYear2Change = (e) => {
        setYear2(e.target.value);
      }

    let handleErase = (e)=>{
        setYear("⬇️ Select a year ⬇️");
        setCenter("Select center");
        setSchool("Select School")
        setTrimester("Select Trimester");
        setGroup("Select Group");
        setDivStream("Select Division Stream");
        setYear2("Select your Year");
    }

    const handleProceed = () => {

            history('/certificate-list');
    }

    const logout = () => {

            history('/');
    }

    return(
        <>
        <nav>
            <Navbar username="anc"/>
        </nav>
        <body>
            <div className="main">
                <div className="upper-section"><em>User Details</em> </div>
                <div className="section">
                    <div className="top-box"></div>
                    <div className="middle-box">
                        <div className="content1">
                            <div className="box one">
                                <label for="admit-academic-year">ADMIT ACADEMIC YEAR</label>
                                <select onChange={handleYearChange}> 
                                <option value="⬇️ Select a year ⬇️"> -- Select a year -- </option>
                                {years.map((year) => <option  key={year.label} value={year.value}> {year.value} </option>)}
                                </select>
                            </div>

                            <div className="box two">  
                            <label for="center-change">CENTER</label>
                                <select onChange={handleCenterChange}> 
                                <option value="Select Center"> -- Select a center -- </option>
                                {centers.map((center) => <option  key={center.label} value={center.value}> {center.value} </option>)}
                                </select>
                            </div>

                            <div className="box three">
                            <label htmlFor="school" name="School">SCHOOL</label>
                                <select onChange={handleSchoolChange}>
                                <option value="Select School"> -- Select a school -- </option>
                                {schools.map((school) => <option  key={school.label} value={school.value}> {school.value} </option>)}
                                </select>
                            </div>

                            <div className="box four">
                            <label htmlFor="trimester" name="Trisemester">TRIMESTER</label>
                                <select onChange={handleTrimesterChange}>
                                <option value="Select Trimester"> -- Select a trimester -- </option>
                                {trimesters.map((trimester) => <option  key={trimester.label} value={trimester.value}> {trimester.value} </option>)}
                                </select>

                            </div>

                        </div>
                        <div className="content2">
                            <div className="box one">
                                <label for="group">GROUP</label>
                                <select onChange={handleGroupChange}> 
                                <option value="⬇️ Select a group ⬇️"> -- Select a group -- </option>
                                {groups.map((group) => <option  key={group.label} value={group.value}> {group.value} </option>)}
                                </select>
                            </div>

                            <div className="box two">  
                            <label for="division-stream">DIVISION STREAM</label>
                                <select onChange={handleDivStreamChange}> 
                                <option value="Select Division Stream"> -- Select a Stream -- </option>
                                {divStreams.map((divStream) => <option  key={divStream.label} value={divStream.value}> {divStream.value} </option>)}
                                </select>
                            </div>

                            <div className="box three">
                            <label for="year">YEAR</label>
                                <select onChange={handleYear2Change}> 
                                <option value="Select Division Stream"> -- Select your Year -- </option>
                                {years2.map((year2) => <option  key={year2.label} value={year2.value}> {year2.value} </option>)}
                            </select>
                            </div>

                        </div>
                    </div>

                    <div className="lower-box">
                        <button className="erase-btn" onClick={handleErase} name="erase">Erase  <i class="fa-solid fa-eraser"></i></button>
                    </div>
                
                </div>
                <div className="lower-btn">
                    <button name="logout" className="logout-btn" onClick={logout}>Log Out</button>
                    <button name="proceed" className="proceed-btn" onClick={handleProceed}>Proceed</button>
                </div>
            </div>
        </body>
        </>
    )
}
