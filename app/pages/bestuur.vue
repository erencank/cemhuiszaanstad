<script setup lang="ts">
const query = groq`*[_type == "committee"] | order(order asc) {
  _id,
  title,
  description,
  members[]{
    role,
    "person": person->{
      _id,
      name,
      "image": image.asset->url
    }
  }
}`;
const { data: rawData } = await useSanityQuery(query);
const committees = computed(() => rawData.value?.data || rawData.value || []);
</script>

<template>
  <div class="page-bestuur">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Onze Organisatie</h1>
          <p>
            Maak kennis met de verschillende organen en commissies binnen het
            Alevitisch Culturele Vereniging Zaanstad.
          </p>
        </div>

        <div
          v-for="committee in committees"
          :key="committee._id"
          class="committee-section animate-fade-in"
        >
          <div class="committee-header">
            <h2>{{ committee.title }}</h2>
            <div
              v-if="committee.description"
              class="committee-desc portable-content"
            >
              <SanityContent :value="committee.description" />
            </div>
          </div>

          <div class="grid" v-if="committee.members">
            <div
              v-for="memberEntry in committee.members"
              :key="memberEntry.person?._id"
              class="card glass-panel"
            >
              <div class="card-img-wrapper">
                <img
                  v-if="memberEntry.person?.image"
                  :src="memberEntry.person.image"
                  :alt="memberEntry.person?.name"
                  class="card-img"
                />
                <div v-else class="card-img-placeholder"></div>
              </div>
              <div class="card-content">
                <h3>{{ memberEntry.person?.name || "Onbekend" }}</h3>
                <p class="role">{{ memberEntry.role }}</p>
              </div>
            </div>
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

.committee-section {
  margin-bottom: 4rem;
}

.committee-header {
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.committee-header h2 {
  font-size: 2rem;
  color: var(--c-charcoal-dark);
  margin-bottom: var(--spacing-sm);
  display: inline-block;
  position: relative;
}

.committee-header h2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 20%;
  width: 60%;
  height: 3px;
  background: var(--c-sand-primary-dark);
  border-radius: 2px;
}

.committee-desc {
  color: var(--c-text-muted);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  margin-top: var(--spacing-md);
}

.portable-content :deep(p) {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.portable-content :deep(ul) {
  list-style: disc;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  text-align: left;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-lg);
}

.card {
  overflow: hidden;
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-img-wrapper {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--c-sand-primary-light);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.card-img-placeholder {
  width: 100%;
  height: 100%;
  background: var(--c-sand-primary);
  opacity: 0.2;
}

.card:hover .card-img {
  transform: scale(1.05);
}

.card-content {
  padding: var(--spacing-md);
  text-align: center;
}

.role {
  color: var(--c-sand-primary-dark);
  font-weight: 500;
  margin: 0;
}
</style>
