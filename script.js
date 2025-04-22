const form = document.getElementById("poll-form");
const resultDiv = document.getElementById("poll-result");
const resultList = document.getElementById("result-list");

// Tambahan: tempat untuk paparkan jumlah undian
const totalVotesDiv = document.getElementById("total-votes");

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

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (voteCount >= 2) {
        alert("Anda hanya boleh mengundi 2 kali sahaja.");
        return;
    }

    const selected = document.querySelector('input[name="poll"]:checked');

    if (selected) {
        const choice = selected.value;
        votes[choice]++;
        voteCount++;

        // Simpan semula dalam localStorage
        localStorage.setItem("pollVotes", JSON.stringify(votes));
        localStorage.setItem("voteCount", voteCount);

        displayResults();
    } else {
        alert("Sila pilih satu pilihan sebelum undi.");
    }
});

function displayResults() {
    form.style.display = "none";
    resultDiv.style.display = "block";
    resultList.innerHTML = "";

    let totalVotes = 0;

    for (let semester in votes) {
        const li = document.createElement("li");
        li.textContent = `${semester}: ${votes[semester]} vote(s)`;
        resultList.appendChild(li);
        totalVotes += votes[semester]; // Tambah ke jumlah keseluruhan
    }

    // Papar jumlah undian
    totalVotesDiv.textContent = `Jumlah undian keseluruhan: ${totalVotes}`;
}
