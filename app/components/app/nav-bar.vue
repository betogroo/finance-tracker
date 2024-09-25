<script setup lang="ts">
  const router = useRouter()
  const routes = router.getRoutes()
  const navBarRoutes = routes
    .filter((route) => route.meta && route.meta.showInNavBar === true)
    .sort((a, b) => (a.meta.order ?? 10) - (b.meta.order ?? 10))
</script>

<template>
  <div>
    <ul>
      <li
        v-for="route in navBarRoutes"
        :key="route.name"
      >
        <a :href="route.path">{{ route.meta.title }}</a>
      </li>
    </ul>
  </div>
</template>
