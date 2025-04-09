document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedbackForm")

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate form
    if (validateForm()) {
      // In a real application, you would send this data to a server
      // For now, we'll just show a success message
      alert("Thank you for your feedback! Your responses have been submitted successfully.")

      // Reset the form
      feedbackForm.reset()
    }
  })

  function validateForm() {
    let isValid = true

    // Check if student name is filled
    const studentName = document.getElementById("studentName").value.trim()
    if (studentName === "") {
      alert("Please enter your full name.")
      isValid = false
      return isValid
    }

    // Check if email is valid
    const studentEmail = document.getElementById("studentEmail").value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(studentEmail)) {
      alert("Please enter a valid email address.")
      isValid = false
      return isValid
    }

    // Check if student ID is filled
    const studentId = document.getElementById("studentId").value.trim()
    if (studentId === "") {
      alert("Please enter your student ID.")
      isValid = false
      return isValid
    }

    // Check if department is selected
    const department = document.getElementById("department").value
    if (department === "") {
      alert("Please select your department.")
      isValid = false
      return isValid
    }

    // Check if semester is selected
    const semester = document.getElementById("semester").value
    if (semester === "") {
      alert("Please select your semester.")
      isValid = false
      return isValid
    }

    // Check if course is selected
    const course = document.getElementById("course").value
    if (course === "") {
      alert("Please select a course.")
      isValid = false
      return isValid
    }

    // Check if all ratings are selected
    const contentRating = document.querySelector('input[name="contentRating"]:checked')
    if (!contentRating) {
      alert("Please rate the course content quality.")
      isValid = false
      return isValid
    }

    const teachingRating = document.querySelector('input[name="teachingRating"]:checked')
    if (!teachingRating) {
      alert("Please rate the teaching quality.")
      isValid = false
      return isValid
    }

    const labRating = document.querySelector('input[name="labRating"]:checked')
    if (!labRating) {
      alert("Please rate the lab facilities.")
      isValid = false
      return isValid
    }

    return isValid
  }
})
