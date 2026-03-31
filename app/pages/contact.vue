<template>
  <div class="page-contact">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Neem Contact Op</h1>
          <p>
            Heeft u vragen of wilt u langskomen? U bent altijd van harte welkom.
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-info glass-panel animate-fade-in">
            <h2>Contactgegevens</h2>

            <div class="info-item">
              <strong>Adres:</strong>
              <p>Ds. Martin Luther Kingweg 155<br />1503 KW Zaandam</p>
            </div>

            <div class="info-item">
              <strong>E-mail:</strong>
              <p>
                <a href="mailto:cemhuiszaanstad.acv@gmail.com"
                  >cemhuiszaanstad.acv@gmail.com</a
                >
              </p>
            </div>

            <div class="info-item">
              <strong>KvK-nummer:</strong>
              <p>40062652</p>
            </div>
          </div>

          <div
            class="contact-form glass-panel animate-fade-in"
            style="animation-delay: 0.1s"
          >
            <h2>Stuur ons een bericht</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Naam</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Uw volledige naam"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">E-mailadres</label>
                <input
                  type="email"
                  id="email"
                  placeholder="uw.naam@voorbeeld.nl"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Bericht</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Typ hier uw bericht..."
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const submitForm = () => {
  alert(
    "Dankuwel voor uw bericht! We nemen zo spoedig mogelijk contact met u op.",
  );
};
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.5fr;
  }
}

.contact-info,
.contact-form {
  padding: var(--spacing-xl);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
}

.info-item {
  margin-bottom: var(--spacing-md);
}

.info-item strong {
  display: block;
  color: var(--c-charcoal-dark);
  margin-bottom: 4px;
}

.info-item p,
.info-item a {
  color: var(--c-text-muted);
}

.info-item a:hover {
  color: var(--c-sand-primary-dark);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--c-charcoal-dark);
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-sm);
  background: var(--c-white);
  transition: var(--transition);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--c-sand-primary-dark);
  box-shadow: 0 0 0 3px rgba(169, 150, 119, 0.2);
}

button[type="submit"] {
  width: 100%;
  margin-top: var(--spacing-sm);
}
</style>
