<script setup lang="ts">
  const { navBarRoutes } = useNav()
  const router = useRouter()
  const goToProfile = (id: string) => {
    router.push(`/profile/${id}`)
    console.log('Go to profile', id)
  }
</script>

<template>
  <nav class="flex justify-between items-center bg-white h-10 shadow-sm px-2">
    <h1>
      <ULink
        to="/"
        class="text-xl"
        >Finance Tracker</ULink
      >
    </h1>
    <div class="flex justify-around items-center space-x-2">
      <ul class="flex space-x-2 justify-end">
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
      <UAvatar
        @click="goToProfile('kokokolollopopopo')"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
        class="cursor-pointer"
      />
    </div>
  </nav>
</template>
