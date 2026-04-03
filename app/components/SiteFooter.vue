<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img
          src="~/assets/images/logo.png"
          alt="Logo Cemhuis Zaanstad"
          class="footer-logo-img"
        />
        <div>
          <h3 class="footer-title">Cemhuis Zaanstad</h3>
          <p class="footer-desc">Alevitische Culturele Verenigingen</p>
        </div>
      </div>

      <div class="footer-contact">
        <div class="footer-col">
          <h4 class="col-title">Adres</h4>
          <p>Ds. Martin Luther Kingweg 155</p>
          <p>1503 KW Zaandam</p>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Contact</h4>
          <a href="mailto:cemhuiszaanstad.acv@gmail.com" class="footer-link"
            >cemhuiszaanstad.acv@gmail.com</a
          >
          <p class="kvk">KvK 40618082</p>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Socials</h4>
          <div class="social-links">
            <a
              href="https://www.facebook.com/cemhuis.zaanstad/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Alevitisch Culturele Vereniging
          Zaanstad. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--c-charcoal-dark);
  color: var(--c-white);
  padding: var(--spacing-xl) 0 var(--spacing-md) 0;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.footer-logo-img {
  height: 64px;
  width: auto;
}

.footer-title {
  color: var(--c-sand-primary);
  margin-bottom: var(--spacing-xs);
  font-size: 1.5rem;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.footer-contact {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .footer-contact {
    grid-template-columns: repeat(3, 1fr);
  }
}

.col-title {
  color: var(--c-white);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
}

.footer-col p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-xs);
}

.footer-link {
  color: var(--c-sand-primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-bottom: var(--spacing-xs);
}

.footer-link:hover {
  color: var(--c-white);
}

.kvk {
  font-size: 0.85rem;
  margin-top: var(--spacing-sm);
  color: rgba(255, 255, 255, 0.5);
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.social-btn {
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition);
}

.social-btn:hover {
  color: var(--c-sand-primary);
  transform: translateY(-2px);
}

.footer-bottom {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
