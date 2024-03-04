document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("jobApplicationForm");
    const viewApplicationsBtn = document.getElementById("viewApplicationsBtn");
    const applicationsTable = document.getElementById("applicationsTable");
    let applications = []; // Store submitted applications
  
    form.addEventListener("submit", function(e) {
        e.preventDefault();
  
        // Validation for first name
        if (form.firstName.value === '') {
            alert("Please fill out your first name.");
            return;
        }
  
        // Validation for phone number format
        const phoneNumberPattern = /^\+?\d{5,15}$/; // Adjust regex according to your needs
        if (!phoneNumberPattern.test(form.phoneNumber.value)) {
            // alert("Please enter a valid phone number.");
            return;
        }
  
        // Assuming validation is passed, construct application data object
        const applicationData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phoneNumber: form.phoneNumber.value,
            emailAddress: form.emailAddress.value,
            street: form.street.value,
            city: form.city.value,
            state: form.state.value,
            zipCode: form.zipCode.value,
            resume: form.resume.value, // This will only capture the file name, not the file itself
            coverLetter: form.coverLetter.value,
            educationLevel: form.educationLevel.value,
            schoolName: form.schoolName.value,
            major: form.major.value,
            graduationYear: form.graduationYear.value,
            jobTitles: form.jobTitles.value,
            companyNames: form.companyNames.value,
            employmentDates: form.employmentDates.value,
            jobResponsibilities: form.jobResponsibilities.value,
            skills: form.skills.value,
            certifications: form.certifications.value,
            startDate: form.startDate.value,
            workSchedule: form.workSchedule.value,
            relocate: form.relocate.checked,
            referenceName: form.referenceName.value,
            relationship: form.relationship.value,
            whyCompany: form.whyCompany.value,
            terms: form.terms.checked,
            privacy: form.privacy.checked,
        };
  
        // Add application to the applications array
        applications.push(applicationData);
  
        console.log("Application submitted: ", applicationData);
        alert("Application submitted successfully.");
    });
  
    viewApplicationsBtn.addEventListener("click", function() {
        applicationsTable.innerHTML = ''; // Clear the table
        applicationsTable.classList.add('table-responsive');
  
        let table = '<table><tr><th>Name</th><th>Email</th><th>Phone Number</th><th>Resume</th><th>Cover Letter</th></tr>';
        applications.forEach(app => {
            table += `<tr>
                        <td>${app.firstName} ${app.lastName}</td>
                        <td>${app.emailAddress}</td>
                        <td>${app.phoneNumber}</td>
                        <td>${app.resume}</td>
                        <td>${app.coverLetter}</td>
                      </tr>`;
        });
        table += '</table>';
        applicationsTable.innerHTML = table;
        applicationsTable.style.display = 'block';
    });
  });
  