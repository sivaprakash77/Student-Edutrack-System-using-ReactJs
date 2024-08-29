import React, { useState } from 'react';
import './App.css';
import { PiStudentDuotone } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import logo from './Asset/Logo.png'
function Student() {
    const [regularStudents, setRegularStudents] = useState(8);
    const [remedialStudents, setRemedialStudents] = useState(13);
    const [inPaidClubs, setInPaidClubs] = useState(0);

    return (
        <div className="student">
            <div className="slide">
                <img src={logo} alt="Logo" className="logo" />
                <ul>
                    <li><p><FaUserGroup style={{width:'140px',height:'50px'}} /></p>Student Management</li>
                    <li><p><CiDiscount1 style={{width:'140px',height:'50px',color:'white'}} /></p>Financial Management</li>
                    <li><p><CiDiscount1 style={{width:'140px',height:'50px',color:'white'}} /></p>Quality Control</li>
                    <li><p><CiDiscount1 style={{width:'140px',height:'50px',color:'white'}} /></p>Report Delivery</li>
                    <li><p><CiDiscount1 style={{width:'140px',height:'50px',color:'white'}} /></p>    Attendance</li>
                </ul>
            </div>

            <div className="main-content">
                <h2>Student Management</h2>
                <div className="student-stats">
                    <div
                        className="stat-item regular"
                        onMouseEnter={() => setRegularStudents(regularStudents + 1)}
                    >   <p><PiStudentDuotone style={{height:'70px',width:'80px'}}/></p>
                        <p>{regularStudents}</p>
                        <span>Regular Students</span>
                    </div>
                    <div
                        className="stat-item remedial"
                        onMouseEnter={() => setRemedialStudents(remedialStudents + 1)}
                    >  
                     <p><FaUserTie style={{height:'70px',width:'80px'}}/></p>
                        <p>{remedialStudents}</p>
                        <span>Remedial Students</span>
                    </div>
                    <div
                        className="stat-item paid-clubs"
                        onMouseEnter={() => setInPaidClubs(inPaidClubs + 1)}
                    >
                        <p><PiStudentDuotone style={{height:'70px',width:'80px'}}/></p>
                        <p>{inPaidClubs}</p>
                        <span>In Paid Clubs</span>
                    </div>
                </div>
                 <hr></hr>
                 <h4>Menu</h4>
                <div className="menu">
                    <div className="menu-item"><p><FaUserAlt style={{height: '50px', width:'100px',color:'blue'}} /></p> Regular Enrollment</div>
                    <div className="menu-item"><p><FaBook style={{height: '50px', width:'100px',color:'blue'}} /></p>Remedial Enrollment</div>
                    <div className="menu-item"><p><PiStudentDuotone style={{height: '50px', width:'100px',color:'blue'}} /></p>Club Management</div>
                    <div className="menu-item"><p><FaBookOpenReader style={{height: '50px', width:'100px',color:'blue'}} /></p>Classroom Management</div>
                    <div className="menu-item"><p><MdEmail style={{height: '50px', width:'100px',color:'blue'}} /></p>SMS / Email</div>
                    <div className="menu-item"><p><FaFileAlt style={{height: '50px', width:'100px',color:'blue'}} /></p>Attendance</div>
                    <div className="menu-item"><p><FaClinicMedical style={{height: '50px', width:'100px',color:'blue'}} /></p>Clinic</div>
                </div>
            </div>
        </div>
    );
}

export default Student;