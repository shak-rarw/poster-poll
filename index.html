const form = document.getElementById("poll-form");
const resultDiv = document.getElementById("poll-result");
const resultList = document.getElementById("result-list");
const totalVotesDisplay = document.getElementById("totalVotes");
const imageOptions = document.querySelectorAll(".option");
const selectedInput = document.getElementById("selectedValue");

// Data undian
let votes = {
    "Sem 1 A": 0,
    "Sem 1 B": 0,
    "Sem 2 A": 0,
    "Sem 2 B": 0
};

// Ambil undian semasa dari localStorage kalau ada
if (localStorage.getItem("pollVotes")) {
    votes = JSON.parse(localStorage.getItem("pollVotes"));
}

// Ambil bilangan undian pengguna dari localStorage
let voteCount = parseInt(localStorage.getItem("voteCount")) || 0;

// Pilihan gambar
imageOptions.forEach(option => {
    option.addEventListener("click", function () {
        imageOptions.forEach(opt => opt.classList.remove("selected"));
        this.classList.add("selected");
        selectedInput.value = this.dataset.value;
    });
});

// Fungsi submit undi
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (voteCount >= 2) {
        alert("Anda hanya boleh mengundi 2 kali sahaja.");
        return;
    }

    const selectedValue = selectedInput.value;

    if (selectedValue) {
        votes[selectedValue]++;
        voteCount++;

        // Simpan semula dalam localStorage
        localStorage.setItem("pollVotes", JSON.stringify(votes));
        localStorage.setItem("voteCount", voteCount);

        displayResults();
    } else {
        alert("Sila pilih salah satu poster sebelum mengundi.");
    }
});

// Fungsi paparan keputusan
function displayResults() {
    form.style.display = "none";
    resultDiv.style.display = "block";
    resultList.innerHTML = "";

    let total = 0;
    for (let semester in votes) {
        total += votes[semester];
        const li = document.createElement("li");
        li.textContent = `${semester}: ${votes[semester]} undian`;
        resultList.appendChild(li);
    }

    totalVotesDisplay.textContent = `Jumlah keseluruhan undian: ${total}`;
}

// Papar terus jika pengguna sudah undi
if (voteCount > 0) {
    displayResults();
}
