let secret = null;

function draw() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    PEOPLE.forEach(person => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${person.img}" alt="${person.name}">
        <div><strong>${person.name}</strong></div>
        <div>${person.role}</div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("off");
            count();
        });

        grid.appendChild(card);
    });

    count();
}

function count() {
    const remaining = document.querySelectorAll(".card:not(.off)").length;

    document.getElementById("count").textContent =
        remaining === 1
            ? "🎉 Bare én kandidat igjen!"
            : `${remaining} kandidater igjen`;
}

function newGame() {
    secret = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];

    document.getElementById("secretImg").src = secret.img;

    document.getElementById("secretName").textContent = secret.name;

    document.getElementById("secretRole").textContent = secret.role;

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("off");
    });

    count();
}

document.getElementById("newGame").addEventListener("click", newGame);

draw();
newGame();