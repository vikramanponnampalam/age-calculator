document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  if (!dobInput) return;

  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const result = document.getElementById("result");
  if (age >= 0) {
    result.textContent = `🎉 You are ${age} years old.`;
  } else {
    result.textContent = "⚠️ Please enter a valid date of birth.";
  }
});
