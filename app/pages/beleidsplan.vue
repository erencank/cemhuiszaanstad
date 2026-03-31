<script setup lang="ts">
const query = groq`*[_type == "policyPlan"] | order(startYear desc) {
  _id,
  title,
  startYear,
  endYear,
  description,
  "fileUrl": file.asset->url
}`;
const { data: rawData } = await useSanityQuery(query);
const policyPlans = computed(() => rawData.value?.data || rawData.value || []);
</script>

<template>
  <div class="page-beleidsplan">
    <section class="section">
      <div class="container layout-content">
        <article
          v-for="plan in policyPlans"
          :key="plan._id"
          class="prose glass-panel animate-fade-in"
          style="margin-bottom: var(--spacing-xl)"
        >
          <h1>{{ plan.title }} {{ plan.startYear }} - {{ plan.endYear }}</h1>
          <!-- Uses SanityContent component to render the rich Portable Text array -->
          <div class="portable-content" v-if="plan.description">
            <SanityContent :value="plan.description" />
          </div>

          <div class="action-box" v-if="plan.fileUrl">
            <p>Wilt u het volledige beleidsplan lezen?</p>
            <a
              :href="plan.fileUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
              >Download {{ plan.title }} (PDF)</a
            >
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout-content {
  max-width: 800px;
  margin: 0 auto;
}

.prose {
  padding: var(--spacing-xl);
}

.prose h1 {
  margin-bottom: var(--spacing-sm);
}

.prose :deep(.lead) {
  font-size: 1.2rem;
  color: var(--c-sand-primary-dark);
  margin-bottom: var(--spacing-lg);
  font-weight: 500;
}

.prose :deep(h2) {
  font-size: 1.75rem;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--c-charcoal-dark);
}

.prose :deep(p) {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.prose :deep(ul) {
  list-style: disc;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  color: var(--c-text-muted);
}

.prose :deep(ol) {
  list-style: decimal;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  color: var(--c-text-muted);
}

.prose :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.action-box {
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--c-sand-primary-light);
  border-radius: var(--radius-md);
  text-align: center;
}

.action-box p {
  color: var(--c-charcoal-dark);
  font-weight: 500;
}
</style>
