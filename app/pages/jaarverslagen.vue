<script setup lang="ts">
const query = groq`*[_type == "report"] | order(year desc) {
  _id,
  title,
  year,
  "fileUrl": file.asset->url,
  "size": file.asset->size
}`;
const { data: rawData } = await useSanityQuery(query);
const reports = computed(() => rawData.value?.data || rawData.value || []);

const formatSize = (bytes: number | undefined) => {
  if (!bytes) return "Onbekend";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};
</script>

<template>
  <div class="page-jaarverslagen">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Jaarverslagen</h1>
          <p>
            Transparantie is belangrijk voor ons. Hier kunt u onze officiële
            jaarverslagen en financiële stukken inzien.
          </p>
        </div>

        <div class="documents-list">
          <div
            v-for="report in reports"
            :key="report._id"
            class="doc-card glass-panel animate-fade-in"
          >
            <div class="doc-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="doc-info">
              <h3>{{ report.title }}</h3>
              <p>
                Geüpload: {{ report.year }} • PDF ({{
                  formatSize(report.size)
                }})
              </p>
            </div>
            <a
              :href="report.fileUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary doc-dl"
              >Download</a
            >
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

.documents-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 700px;
  margin: 0 auto;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition);
}

.doc-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--c-sand-primary);
}

.doc-icon {
  color: var(--c-sand-primary-dark);
  background: var(--c-sand-primary-light);
  padding: 12px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.doc-info {
  flex: 1;
}

.doc-info h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.doc-info p {
  margin-bottom: 0;
  font-size: 0.85rem;
}

.doc-dl {
  padding: 8px 16px;
  font-size: 0.9rem;
}
</style>
