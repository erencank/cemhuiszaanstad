<script setup lang="ts">
const query = groq`*[_type == "term"] | order(title asc) {
  _id,
  title,
  description
}`;
const { data: rawData } = await useSanityQuery(query);
const terms = computed(() => rawData.value?.data || rawData.value || []);
</script>

<template>
  <div class="page-begrippen">
    <section class="section">
      <div class="container layout-content">
        <div class="page-header">
          <h1>Begrippen</h1>
          <p>Een overzicht van veelgebruikte termen binnen het Alevitisme.</p>
        </div>

        <div class="terms-list">
          <article
            v-for="term in terms"
            :key="term._id"
            class="term-card glass-panel animate-fade-in"
          >
            <h2>{{ term.title }}</h2>
            <div class="term-description portable-content">
              <SanityContent :value="term.description" />
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.terms-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.term-card {
  padding: var(--spacing-xl);
}

.term-card h2 {
  font-size: 1.5rem;
  color: var(--c-charcoal-dark);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--c-sand-primary-light);
  display: inline-block;
}

.portable-content :deep(p) {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.portable-content :deep(ul) {
  list-style: disc;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
</style>
