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
              <p>40618082</p>
            </div>
          </div>

          <div
            class="map-container glass-panel animate-fade-in"
            style="animation-delay: 0.1s"
          >
            <iframe
              src="https://www.google.com/maps?q=CEMHUIS+ZAANSTAD&output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.5fr;
  }
}

.contact-info {
  padding: var(--spacing-xl);
  /* Optional: removed text-align: center if it looks better left-aligned next to map */
}

h2 {
  font-size: 1.7rem;
  margin-bottom: var(--spacing-xl);
  color: var(--c-charcoal-dark);
}

.info-item {
  margin-bottom: var(--spacing-lg);
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item strong {
  display: block;
  color: var(--c-sand-primary-dark);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.info-item p,
.info-item a {
  color: var(--c-charcoal);
  font-size: 1.1rem;
  line-height: 1.5;
}

.info-item a {
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: var(--transition);
}

.info-item a:hover {
  text-decoration-color: var(--c-sand-primary-dark);
}

.map-container {
  padding: 12px;
  min-height: 350px;
  display: flex;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  min-height: 350px;
  border-radius: var(--radius-sm);
  background: var(--c-sand-primary-light);
}
</style>
