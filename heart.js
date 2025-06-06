document.getElementById("predictionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(document.querySelector('[name="age"]').value);
    const gender = document.querySelector('[name="gender"]').value;
    const chol = parseInt(document.querySelector('[name="chol"]').value);
    const bp = parseInt(document.querySelector('[name="bp"]').value);
    const hr = parseInt(document.querySelector('[name="hr"]').value);

    let result = "";
    let riskClass = "";

    if (chol > 240 || bp > 140 || hr < 100 || age > 60 || (gender === "male" && age > 55)) {
        result = "⚠️ High risk of heart disease.";
        riskClass = "high-risk";
    } else {
        result = "✅ Low risk of heart disease.";
        riskClass = "low-risk";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
    resultDiv.className = riskClass;
});