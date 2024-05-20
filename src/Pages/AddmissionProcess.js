import React from 'react'
import Layout from '../Components/Layout'
import { NavLink } from 'react-router-dom';

const AddmissionProcess = () => {
  return (
    <Layout>
      <div className='container mt-5'><br/></div>
    <div className="Process gradient-bg " id="admissionProcess">
      <div className="container mt-5">
      <h1 className=" addmission-text text-center mb-4 mt-5 ">Online Application for Academic Year 2024-2025</h1>
      <img src="/Assets/addmission-2.jpg" alt="Admission Open" className="img-fluid mb-5"  style={{ width: '100%', height: 'auto' }} />
        <h3 className="addmission-text text-center brand-purple mb-4">Our Admission Process</h3>
        <div className="accordion style-2 accordion-flush" id="processAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span >Online Process</span>
              </button>
            </h2>
            <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#processAccordion" >
              <div className="accordion-body">
                <ol className="bigNumbers">
                  <li>Complete the online application form.</li>
                  <li className="mb-1">The following documents are to be uploaded while filling the online application form:</li>
                  <div style={{ marginLeft: '80px', lineHeight: '35px' }} className="mt-3 mb-5">
                    <p>a. Student’s Birth Certificate.</p>
                    <p>b. Student’s Aadhaar Card.</p>
                    <p>c. School Leaving Certificate (can be submitted later if currently not available) (Std 2 onwards).</p>
                    <p>d. UDISE Number (Unified District Information System for Education) from current school (Std 2 onwards).</p>
                    <p>e. Student's previous/current class Report Card (Std 2 onwards).</p>
                    <p>f. Address proof (any one) : a) Ration Card. b) Electricity Bill c) Passport d) Aadhar Card.</p>
                    <p>g. Aadhar card of any one parent/guardian.</p>
                    <p>h. Pan Card of any one parent/guardian.</p>
                    <p>i. Passport size photograph of the student.</p>
                    <p>j. Caste Certificate (if applicable).</p>
                  </div>
                  <li>After submitting the online application form, if there are seats available in the standard that you have applied in, an email with a payment link for the first term fees will be sent to you. Parents are requested to make the necessary payment online.</li>
                </ol>
                <NavLink to="https://forms.gle/jgN2T8C7xiV1TA5w9" className="btn btn-success d-block mx-auto">Admission Open 2024-25</NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <span>Visiting The School</span>
              </button>
            </h2>
            <div className="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#processAccordion" >
              <div className="accordion-body">
                <ol className="bigNumbers">
                  <li>Complete the application form either online or collect the form from the school.</li>
                  <li className="mb-1">Please submit the completed application form along with following documents at the School Office:</li>
                  <div style={{ marginLeft: '80px', lineHeight: '35px' }} className="mt-3 mb-5">
                    <p>a. Photocopy of Student’s Birth Certificate.</p>
                    <p>b. Photocopy of Student’s Aadhaar Card.</p>
                    <p>c. School Leaving Certificate (can be submitted later if currently not available) (Std 2 onwards).</p>
                    <p>d. UDISE Number (Unified District Information System for Education) from current school (Std 2 onwards).</p>
                    <p>e. Photocopy of Student's previous/current class Report Card (Std 2 onwards).</p>
                    <p>f. Photocopy of Address proof (any one) : a) Ration Card. b) Electricity Bill c) Passport d) Aadhar Card.</p>
                    <p>g. Photocopy of Aadhar card of any one parent/guardian.</p>
                    <p>h. Photocopy of Pan Card of any one parent/guardian.</p>
                    <p>i. 3 Passport size photographs of the student.</p>
                    <p>j. Caste Certificate (if applicable).</p>
                  </div>
                  <li>Please submit a Cheque with the first term fees to the School Office. All payments at the School are to be made by Cheque. Please mention the name of your ward, and contact number on the rear side of the Cheque. Fees once paid will be strictly non-refundable.</li>
                </ol>
                <br />
                <p><strong>Admissions are on a first come first served basis</strong> and seats are limited. Admissions will only be confirmed once the necessary documents and the first term fees payment is made. Fees once paid will be strictly non-refundable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default AddmissionProcess