<template>
  <div class="page-home">
    <section class="hero section">
      <div class="container hero-inner">
        <h1 class="hero-title animate-fade-in">
          Welkom bij het Alevitisch Culturele Vereniging Zaanstad
        </h1>
        <p class="hero-subtitle animate-fade-in" style="animation-delay: 0.1s">
          Een traditie van liefde, rechtvaardigheid en respect voor mens, dier
          en milieu, verbonden door muziek en vrijdenken.
        </p>
        <div class="hero-actions animate-fade-in" style="animation-delay: 0.2s">
          <NuxtLink to="#over-ons" class="btn btn-primary"
            >Lees meer over ons</NuxtLink
          >
        </div>
      </div>
    </section>

    <section id="over-ons" class="section about-section">
      <div class="container layout-content">
        <div class="grid-content">
          <div
            class="text-content animate-fade-in"
            style="animation-delay: 0.1s"
          >
            <h2>Over ons</h2>
            <p>
              Wij zijn een vereniging die zich inzet voor het behoud en de
              verspreiding van de Alevitische levensovertuiging. De Alevitische
              levensbeschouwing is voor ons een rijke bron van cultuur,
              spiritualiteit en menselijkheid. Ze draait om waarden als
              gelijkheid, rechtvaardigheid, respect en verbondenheid – waarden
              die ons inspireren om bij te dragen aan een samenleving waarin
              iedereen zich gezien en gehoord voelt.
            </p>
            <p>
              Onze missie is om de Alevitische cultuur en levensvisie levend te
              houden en te delen met anderen. Dat doen we met een breed aanbod
              aan culturele en educatieve activiteiten, zoals muziek- en
              dansoptredens, lezingen en vieringen die mensen samenbrengen en
              verbinden.
            </p>
          </div>

          <div
            class="text-content animate-fade-in"
            style="animation-delay: 0.2s"
          >
            <h2>Alevitisme</h2>
            <p>
              Het Alevitisme is een humanistische levensovertuiging met eigen
              religieuze ceremonies (Cem) waar man en vrouw gelijkwaardig aan
              deelnemen. Muziek (Saz/Bağlama) en zang (Deyiş) nemen een centrale
              plek in binnen onze rijkdom aan spirituele tradities.
            </p>
            <p>
              Belangrijke uitgangspunten binnen onze filosofie zijn de liefde
              voor de mens en de natuur. "Zie geen enkel menselijk wezen als
              inferieur" en "De waarheid bevindt zich in onszelf, en niet in
              gebouwen" zijn essentiële Alevitische waarden. Wij bieden een
              warme, open en gastvrije omgeving waar iedereen zichzelf mag zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  background-image: url("~/assets/images/main_cover.png");
  background-size: cover;
  background-position: center;
  padding: var(--spacing-xl) 0;
}

.hero-inner {
  text-align: center;
  max-width: 800px;
  margin: 0 16px;
  padding: var(--spacing-xl) var(--spacing-md);
}

@media (min-width: 768px) {
  .hero-inner {
    margin: 0 auto;
  }
}

.hero-title {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--c-white);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6), 0 4px 24px rgba(0, 0, 0, 0.4);
}

.hero-subtitle {
  font-size: 1.35rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.7);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.layout-content {
  max-width: 1000px;
  margin: 0 auto;
}

.grid-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
}

@media (min-width: 768px) {
  .grid-content {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.text-content h2 {
  font-size: 2.25rem;
  color: var(--c-charcoal-dark);
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
}

.text-content h2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--c-sand-primary-dark);
  border-radius: 2px;
}

.text-content p {
  color: var(--c-text-muted);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  font-size: 1.05rem;
}
</style>
