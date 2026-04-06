<script setup lang="ts">
import { ref, computed } from "vue";

const query = groq`*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  time,
  location,
  description
}`;
const { data: rawData } = await useSanityQuery(query);
const events = computed(
  () => (rawData.value as any)?.data || rawData.value || [],
);

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = computed(() => {
  return events.value.filter((e: any) => {
    if (!e.date) return false;
    const eventDate = new Date(e.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });
});

const pastEvents = computed(() => {
  return events.value
    .filter((e: any) => {
      if (!e.date) return false;
      const eventDate = new Date(e.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate < today;
    })
    .reverse(); // Most recent past events first
});

const showPastEvents = ref(false);
</script>

<template>
  <div class="page-events">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Kalender & Evenementen</h1>
          <p>Een overzicht van binnenkort verwachte activiteiten.</p>
        </div>

        <!-- Upcoming Events -->
        <div class="event-list">
          <div v-if="upcomingEvents.length === 0" class="no-events glass-panel">
            Momenteel zijn er geen evenementen gepland.
          </div>
          <div
            v-for="event in upcomingEvents"
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
                <span v-if="event.time">🕒 {{ event.time }}</span>
                <span v-if="event.location">📍 {{ event.location }}</span>
              </div>
              <div v-if="event.description" class="portable-content">
                <SanityContent :value="event.description" />
              </div>
            </div>
          </div>
        </div>

        <!-- Past Events Section -->
        <div v-if="pastEvents.length > 0" class="past-events-wrapper">
          <div class="divider"></div>
          <button
            @click="showPastEvents = !showPastEvents"
            class="btn btn-outline toggle-btn"
          >
            {{
              showPastEvents
                ? "Verberg eerdere evenementen"
                : "Toon eerdere evenementen (" + pastEvents.length + ")"
            }}
          </button>

          <div
            v-if="showPastEvents"
            class="event-list past-event-list animate-fade-in"
          >
            <div
              v-for="event in pastEvents"
              :key="event._id"
              class="event-card glass-panel past-card"
            >
              <div class="event-date past-date">
                <span class="day">{{ new Date(event.date).getDate() }}</span>
                <span class="month">{{
                  new Date(event.date).toLocaleString("nl-NL", {
                    month: "short",
                  })
                }}</span>
                <span class="year">{{
                  new Date(event.date).getFullYear()
                }}</span>
              </div>
              <div class="event-details">
                <h2>{{ event.title }}</h2>
                <div class="event-meta">
                  <span v-if="event.time">🕒 {{ event.time }}</span>
                  <span v-if="event.location">📍 {{ event.location }}</span>
                </div>
                <div
                  v-if="event.description"
                  class="portable-content past-content"
                >
                  <SanityContent :value="event.description" />
                </div>
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

.event-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 800px;
  margin: 0 auto;
}

.no-events {
  text-align: center;
  padding: var(--spacing-lg);
  color: var(--c-text-muted);
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

.year {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 4px;
}

.event-details {
  flex: 1;
}

.event-details h2 {
  margin-bottom: var(--spacing-xs);
  color: var(--c-charcoal-dark);
}

.event-meta {
  display: flex;
  gap: var(--spacing-md);
  color: var(--c-text-muted);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
}

.event-meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Portable Text Styles */
.portable-content :deep(p) {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  color: var(--c-charcoal);
}
.portable-content :deep(p:last-child) {
  margin-bottom: 0;
}
.portable-content :deep(ul) {
  list-style: disc;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

/* Past Events Section */
.past-events-wrapper {
  margin-top: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-bottom: var(--spacing-lg);
}

.toggle-btn {
  margin-bottom: var(--spacing-xl);
}

.past-event-list {
  text-align: left;
}

.past-card {
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.4); /* Extra frosted */
}

.past-date {
  background: rgba(0, 0, 0, 0.05);
  color: var(--c-text-muted);
}
</style>
