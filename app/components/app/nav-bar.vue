<script setup lang="ts">
  const { navBarRoutes } = useNav()
</script>

<template>
  <nav>
    <ul class="flex space-x-2 justify-end mr-4">
      <template
        v-for="(route, i) in navBarRoutes"
        :key="route.name"
      >
        <li>
          <ULink
            class="hover:underline"
            active-class="font-semibold"
            :to="route.path"
          >
            {{ route.meta.title }}
          </ULink>
        </li>
        <div
          v-if="i < navBarRoutes.length - 1"
          class="space-x-1"
        >
          |
        </div>
      </template>
    </ul>
  </nav>
</template>
