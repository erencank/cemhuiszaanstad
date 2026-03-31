<script setup lang="ts">
const query = groq`*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  time,
  location,
  description
}`;
const { data: rawData } = await useSanityQuery(query);
const events = computed(() => rawData.value?.data || rawData.value || []);
</script>

<template>
  <div class="page-events">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Kalender & Evenementen</h1>
          <p>Een overzicht van binnenkort verwachte activiteiten.</p>
        </div>

        <div class="event-list">
          <div
            v-for="event in events"
            :key="event._id"
            class="event-card glass-panel animate-fade-in"
          >
            <div class="event-date">
              <span class="day">{{ new Date(event.date).getDate() }}</span>
              <span class="month">{{
                new Date(event.date).toLocaleString("nl-NL", { month: "short" })
              }}</span>
            </div>
            <div class="event-details">
              <h2>{{ event.title }}</h2>
              <div class="event-meta">
                <span>🕒 {{ event.time }}</span>
                <span>📍 {{ event.location }}</span>
              </div>
              <p>{{ event.description }}</p>
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

.event-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 800px;
  margin: 0 auto;
}

.event-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
}

@media (min-width: 768px) {
  .event-card {
    flex-direction: row;
    align-items: flex-start;
  }
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  background: var(--c-sand-primary-light);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  color: var(--c-charcoal-dark);
}

.day {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.month {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.event-details {
  flex: 1;
}

.event-meta {
  display: flex;
  gap: var(--spacing-md);
  color: var(--c-text-muted);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
}

.event-meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
