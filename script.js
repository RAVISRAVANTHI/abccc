function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
        addToHistory(expression, result);
    } catch {
        display.value = "Error";
    }
}

function addToHistory(expression, result) {
    const historyList = document.getElementById("historyList");
    let li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
}

function sendFeedback() {
    let feedback = document.getElementById("feedbackInput").value.trim();
    if (feedback) {
        document.getElementById("feedbackStatus").textContent = "✅ Feedback Sent!";
        document.getElementById("feedbackInput").value = "";
        setTimeout(() => {
            document.getElementById("feedbackStatus").textContent = "";
        }, 2000);
    } else {
        document.getElementById("feedbackStatus").textContent = "⚠️ Enter feedback!";
    }
}

function changeTheme() {
    let selected = document.getElementById("themeSelector").value;
    document.body.className = selected;  // Sets body class to 'light', 'dark', 'neon', or 'classic'
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = "0123456789.+-*/";

    if (validKeys.includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

function copyResult() {
    let result = document.getElementById("display").value;
    if (result) {
        navigator.clipboard.writeText(result);
        alert("✅ Result copied to clipboard!");
    } else {
        alert("⚠️ Nothing to copy.");
    }
}

 
// added more symbols like  factorial , root , squares ,angles in caluclator code

  function toRadians(degree) {
  return degree * (Math.PI / 180);
}

function factorial(n) {
  if (n < 0) return "Invalid";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculateFactorial() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = factorial(value);
}

function calculateSquare() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = Math.pow(value, 2);
}

function calculateRoot() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = Math.sqrt(value);
}

function calculateSin() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = Math.sin(toRadians(value)).toFixed(6);
}

function calculateCos() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = Math.cos(toRadians(value)).toFixed(6);
}

function calculateTan() {
  let value = parseFloat(document.getElementById("display").value);
  document.getElementById("display").value = Math.tan(toRadians(value)).toFixed(6);
}

// upto here


let history = [];

function addToHistory(expression, result) {
  history.push({ expression, result });
  updateHistoryUI();
}

function updateHistoryUI() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  history.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.expression} = ${entry.result}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteHistoryEntry(index);

    li.appendChild(deleteBtn);
    historyList.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  updateHistoryUI();
}

function deleteHistoryEntry(index) {
  history.splice(index, 1);
  updateHistoryUI();
}




function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function openPanel(panelId) {
  document.getElementById('dropdownMenu').style.display = 'none';
  document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
  document.getElementById(panelId).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
}
