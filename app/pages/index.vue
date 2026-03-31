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
          <NuxtLink to="/over-ons" class="btn btn-primary"
            >Lees meer over ons</NuxtLink
          >
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
  background: linear-gradient(
    to bottom,
    var(--c-sand-primary-light),
    var(--c-bg-body)
  );
}

.hero-inner {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--c-charcoal-dark);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--c-text-muted);
  margin-bottom: var(--spacing-lg);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}
</style>
