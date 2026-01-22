function generateTeamCard(member) {
  const { name, role, email, img } = member;

  const teamCard = `
    <div class="card-team col">
      <div class="d-flex bg-black">
        <div class="col-4 img-card">
          <img class="img-fluid" src="./${img}" alt="${name}" />
        </div>
        <div class="text-card text-white p-3 col-8">
          <h3>${name}</h3>
          <p>${role}</p>
          <a href="mailto:${email}">${email}</a>
        </div>
      </div>
    </div>`;

  return teamCard;
}

function printCards() {
  const list = document.getElementById("email-list")

  for (const member of teamMembers) {
    containerElement.innerHTML += generateTeamCard(member);
  }
}

printCards();
