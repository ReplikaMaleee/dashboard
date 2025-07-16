document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = this;

  emailjs.send("service_bfa4l4i", "template_it8hpea", {
    name: form.name.value,
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value,
    q4: form.q4.value,
  }).then(() => {
    form.style.display = "none";
    document.getElementById("thanksMessage").style.display = "block";

    // Sembunyikan <h1> "Jawab Jujur Ya 🥺"
    const heading = document.querySelector("h1");
    if (heading) {
      heading.style.display = "none";
    }
  }, (error) => {
    alert("Gagal mengirim! 😢\n" + JSON.stringify(error));
  });
});
