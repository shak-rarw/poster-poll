// Kod undian lengkap dengan had 2 undi dan paparan jumlah undi

const form = document.getElementById("poll-form");
const resultDiv = document.getElementById("poll-result");
const resultList = document.getElementById("result-list");
const totalVotesDisplay = document.getElementById("totalVotes");

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

    const selected = document.querySelector('input[name="poll"]:checked');

    if (!selected) {
        alert("Sila pilih satu pilihan sebelum undi.");
        return;
    }

    if (voteCount >= 2) {
        alert("Anda hanya boleh mengundi 2 kali sahaja.");
        return;
    }

    const choice = selected.value;
    if (votes.hasOwnProperty(choice)) {
        votes[choice]++;
        voteCount++;

        // Simpan semula dalam localStorage
        localStorage.setItem("pollVotes", JSON.stringify(votes));
        localStorage.setItem("voteCount", voteCount);

        displayResults();
    } else {
        alert("Pilihan tidak sah.");
    }
});

function displayResults() {
    form.style.display = "none";
    resultDiv.style.display = "block";
    resultList.innerHTML = "";

    let total = 0;
    for (let semester in votes) {
        if (votes.hasOwnProperty(semester)) {
            total += votes[semester];
            const li = document.createElement("li");
            li.textContent = `${semester}: ${votes[semester]} vote(s)`;
            resultList.appendChild(li);
        }
    }

    // Paparkan jumlah keseluruhan undian
    if (totalVotesDisplay) {
        totalVotesDisplay.textContent = `Jumlah keseluruhan undian: ${total}`;
    }
}

// Paparkan keputusan terus jika pengguna dah undi sebelum ini
if (voteCount > 0) {
    displayResults();
}
