<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = [
  { name: "Over ons", path: "/" },
  { name: "Bestuur", path: "/bestuur" },
  { name: "Events", path: "/events" },
  { name: "Beleidsplan", path: "/beleidsplan" },
  { name: "Jaarverslagen", path: "/jaarverslagen" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <header class="header" :class="{ 'header-scrolled': true }">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">
        <img
          src="~/assets/images/logo.png"
          alt="Logo Cemhuis Zaanstad"
          class="logo-img"
        />
        <span class="logo-text">CEMHUIS ZAANSTAD</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <!-- We use NuxtLink for internal navigation -->
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Mobile Hamburger -->
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle Menu">
        <span class="bar" :class="{ 'bar-top-open': isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-mid-open': isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-bot-open': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Nav -->
    <div class="mobile-nav" :class="{ 'mobile-nav-open': isMenuOpen }">
      <nav class="mobile-nav-links">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="mobile-nav-link"
          active-class="mobile-nav-link-active"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--c-white-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  height: 60px;
  width: auto;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c-charcoal-dark);
  letter-spacing: 0.05em;
}

.desktop-nav {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--c-text-muted);
  position: relative;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--c-charcoal-dark);
}

.nav-link-active {
  color: var(--c-sand-primary-dark);
}

.nav-link-active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--c-sand-primary-dark);
  border-radius: 2px;
}

/* Hamburger Menu */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 110;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

.bar {
  width: 100%;
  height: 2px;
  background: var(--c-charcoal-dark);
  border-radius: 10px;
  transition: var(--transition);
  transform-origin: 1px;
}

.bar-top-open {
  transform: rotate(45deg);
}
.bar-mid-open {
  opacity: 0;
  transform: translateX(20px);
}
.bar-bot-open {
  transform: rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: var(--c-white);
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: var(--shadow-md);
}

.mobile-nav-open {
  max-height: 400px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) var(--spacing-lg);
  gap: var(--spacing-md);
}

.mobile-nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--c-charcoal-dark);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-nav-link-active {
  color: var(--c-sand-primary-dark);
}
</style>
