/* ================================================
   Luxury Car Collection — Scripts
   Entrance animations + Random Fact buttons
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Fade-in cards on scroll --- */
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  /* --- Random Facts Data --- */
  const facts = {
    revuelto: [
      "The Revuelto\u2019s 6.5L V12 is assisted by three electric motors, producing a combined 1,001 HP.",
      "Its name \u201CRevuelto\u201D translates to \u201Cscrambled\u201D in Spanish \u2014 a nod to the fighting bull tradition.",
      "It\u2019s the first Lamborghini with a dual-clutch 8-speed gearbox instead of a single-clutch unit.",
      "The hybrid system allows up to 10 km of pure electric driving for silent city cruising.",
      "Each carbon-fibre monocoque is handcrafted in Sant\u2019Agata Bolognese, Italy.",
      "The Revuelto can reach a top speed of over 350 km/h \u2014 supercar territory and beyond.",
      "Its Y-shaped headlights are a design signature inspired by the Lamborghini Terzo Millennio concept.",
      "Despite the hybrid system, the Revuelto weighs just 1,772 kg \u2014 lighter than many rivals."
    ],
    cullinan: [
      "The Cullinan is named after the largest gem-quality rough diamond ever found \u2014 3,106 carats.",
      "Its \u201CMagic Carpet Ride\u201D air suspension scans the road ahead and adjusts damping in real time.",
      "Every Cullinan features a rear \u201Cviewing suite\u201D \u2014 two leather chairs and a cocktail table from the boot.",
      "Rolls-Royce tested the Cullinan in the Arctic Circle, the Middle East desert, and at high altitude.",
      "The Black Badge variant uses darker chrome, carbon-fibre elements, and an extra 29 HP over standard.",
      "Rolls-Royce hand-paints the coachline on every car \u2014 a single artist takes up to three hours per line.",
      "The starlight headliner contains up to 1,344 fibre-optic lights arranged in bespoke constellations.",
      "Closing the doors? A button does it. The Cullinan\u2019s effortless doors self-close at the touch of a switch."
    ],
    rsq8r: [
      "ABT Sportsline, based in Kempten, Germany, has been tuning Audi and VW vehicles since 1896.",
      "The RS Q8-R\u2019s 4.0L twin-turbo V8 is boosted from 600 HP to a staggering 740 HP by ABT.",
      "Only 125 units of the ABT RS Q8-R were produced \u2014 each individually numbered.",
      "ABT adds a bespoke widebody kit that extends the fenders by 40 mm on each side.",
      "The RS Q8-R rides on custom ABT forged 23-inch wheels wrapped in high-performance Conti tyres.",
      "Despite weighing over 2.3 tonnes, the RS Q8-R sprints 0\u2013100 km/h in just 3.4 seconds.",
      "ABT equips the RS Q8-R with uprated intercoolers and a custom ECU map for maximum reliability.",
      "The interior features ABT-branded Alcantara, carbon-fibre trim, and illuminated door sills."
    ]
  };

  /* --- Button click handler --- */
  document.querySelectorAll('.fact-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const car = btn.dataset.car;
      const msgEl = document.getElementById('fact-' + car);
      const pool = facts[car];

      // Pick a random fact
      const fact = pool[Math.floor(Math.random() * pool.length)];

      // Animate out then in
      msgEl.classList.remove('visible');
      setTimeout(() => {
        msgEl.textContent = fact;
        msgEl.classList.add('visible');
      }, msgEl.textContent ? 300 : 10);
    });
  });

});
