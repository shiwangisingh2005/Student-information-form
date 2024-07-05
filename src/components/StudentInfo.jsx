import React from 'react';
import './StudentInfo.css';

const StudentInfo = () => {
    return (
        <div className="student-info-container">
            <div className="form-container">
                <h2>Student Information</h2>
                <form>
                    <div className="form-group">
                        <label>Student Name:</label>
                        <input type="text" name="studentName" />
                    </div>
                    <div className="form-group">
                        <label>Student Address:</label>
                        <input type="text" name="studentAddress" />
                    </div>
                    <div className="form-group">
                        <label>Student Contact:</label>
                        <input type="text" name="studentContact" />
                    </div>
                    <div className="form-group">
                        <label>Father's Name:</label>
                        <input type="text" name="fatherName" />
                    </div>
                    <div className="form-group">
                        <label>Father's Contact:</label>
                        <input type="text" name="fatherContact" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default StudentInfo;
