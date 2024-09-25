<script setup lang="ts">
  const { navBarRoutes } = useNav()
</script>

<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="route in navBarRoutes"
          :key="route.name"
        >
          <a :href="route.path">{{ route.meta.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
