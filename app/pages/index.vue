<script setup lang="ts">
  definePageMeta({
    showInNavBar: true,
    requiresAuth: false,
    title: 'Home',
    order: 0,
  })
  interface SummaryFilter {
    label: string
    value: string
    disabled: boolean
  }

  const summaryFilters: SummaryFilter[] = [
    {
      label: 'Daily',
      value: 'd',
      disabled: false,
    },
    {
      label: 'Month',
      value: 'm',
      disabled: true,
    },
    {
      label: 'Year',
      value: 'y',
      disabled: false,
    },
  ]
  const summaryFilter = ref<SummaryFilter | undefined>(summaryFilters[0])
</script>

<template>
  <section class="flex justify-between mx-2">
    <h1 class="text-4xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu
        v-model="summaryFilter"
        placeholder="Exibir..."
        :options="summaryFilters"
      ></USelectMenu>
    </div>
  </section>
  <div v-if="summaryFilter">{{ summaryFilter.label }}</div>
</template>
