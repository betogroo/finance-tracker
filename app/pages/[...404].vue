<script setup lang="ts">
  const router = useRouter()
  definePageMeta({
    showInNavBar: false,
    requiresAuth: false,
    title: '404 - Not Found',
    layout: 'no-nav-bar',
  })
</script>

<template>
  <UCard :ui="{ divide: 'divide-none' }">
    <template #header>
      <h1 class="text-center text-6xl font-bold">404</h1>
    </template>
    <p class="text-center text-xl">Página não encontrada!</p>
    <UButton
      @click="router.back()"
      color="black"
      variant="outline"
      leading-icon="mdi-arrow-left"
      block
      class="mt-2"
      >Voltar</UButton
    >
  </UCard>
</template>
