<script setup lang="ts">
const boardMembers = [
  {
    id: 1,
    name: "Voorbeeld Naam 1",
    role: "Voorzitter",
    image: "https://via.placeholder.com/300?text=Foto",
  },
  {
    id: 2,
    name: "Voorbeeld Naam 2",
    role: "Secretaris",
    image: "https://via.placeholder.com/300?text=Foto",
  },
  {
    id: 3,
    name: "Voorbeeld Naam 3",
    role: "Penningmeester",
    image: "https://via.placeholder.com/300?text=Foto",
  },
  {
    id: 4,
    name: "Voorbeeld Naam 4",
    role: "Bestuurslid",
    image: "https://via.placeholder.com/300?text=Foto",
  },
  {
    id: 5,
    name: "Voorbeeld Naam 5",
    role: "Bestuurslid",
    image: "https://via.placeholder.com/300?text=Foto",
  },
];
</script>

<template>
  <div class="page-bestuur">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <h1>Ons Bestuur</h1>
          <p>
            Maak kennis met het team achter het Alevitisch Culturele Vereniging
            Zaanstad.
          </p>
        </div>

        <div class="grid">
          <div
            v-for="member in boardMembers"
            :key="member.id"
            class="card glass-panel animate-fade-in"
          >
            <div class="card-img-wrapper">
              <img :src="member.image" :alt="member.name" class="card-img" />
            </div>
            <div class="card-content">
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
