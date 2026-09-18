// ==========================================================================
// Prestige Transfert — Interactions du site
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Année dynamique dans le footer ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Empêche de sélectionner une date de prise en charge passée ----
  var dateInput = document.getElementById('date');
  if (dateInput) {
    var today = new Date();
    var iso = today.getFullYear() + '-' +
      String(today.getMonth() + 1).padStart(2, '0') + '-' +
      String(today.getDate()).padStart(2, '0');
    dateInput.setAttribute('min', iso);
  }

  // ---- Menu mobile ----
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Ferme le menu quand on clique sur un lien (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Envoi du formulaire de contact via Web3Forms (AJAX) ----
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = form.querySelector('.btn-submit');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      status.className = 'form-status';
      status.textContent = '';

      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (response.ok && data && data.success !== false) {
              form.reset();
              status.textContent = 'Merci, votre demande a bien été envoyée. Nous vous recontactons rapidement.';
              status.classList.add('success');
            } else {
              var message = (data && (data.message || (data.errors && data.errors.map(function (err) { return err.message; }).join(', '))))
                || "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.";
              throw new Error(message);
            }
          });
        })
        .catch(function (error) {
          status.textContent = error.message || "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.";
          status.classList.add('error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }

});
