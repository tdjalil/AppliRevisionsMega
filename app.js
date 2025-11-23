// --- NAVIGATION ---
const tabs = document.querySelectorAll(".tabBtn");
const sections = document.querySelectorAll(".tab");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        sections.forEach(s => s.classList.remove("active"));
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// --- FICHES ---
let ficheIndex = 0;

function showFiche() {
    document.getElementById("ficheTitle").textContent = fiches[ficheIndex].titre;
    document.getElementById("ficheContent").textContent = fiches[ficheIndex].contenu;
}

document.getElementById("nextFiche").onclick = () => {
    ficheIndex = (ficheIndex + 1) % fiches.length;
    showFiche();
};

document.getElementById("prevFiche").onclick = () => {
    ficheIndex = (ficheIndex - 1 + fiches.length) % fiches.length;
    showFiche();
};

showFiche();

// --- QUIZ ---
let questionIndex = 0;
let score = 0;

function showQuestion() {
    const q = quiz[questionIndex];
    document.getElementById("quizQuestion").textContent = q.question;

    const optionsBox = document.getElementById("quizOptions");
    optionsBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            if (i === q.answer) {
                score++;
                document.getElementById("quizFeedback").textContent = "Bonne réponse ! 👍";
            } else {
                document.getElementById("quizFeedback").textContent = "Faux ❌";
            }
            document.getElementById("score").textContent = score;
            document.getElementById("total").textContent = quiz.length;
        };
        optionsBox.appendChild(btn);
    });
}

document.getElementById("nextQuestion").onclick = () => {
    questionIndex = (questionIndex + 1) % quiz.length;
    document.getElementById("quizFeedback").textContent = "";
    showQuestion();
};

showQuestion();
