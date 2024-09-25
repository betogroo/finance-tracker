const useNav = () => {
  const router = useRouter()
  const routes = ref(router.getRoutes())
  const navBarRoutes = computed(() => {
    return routes.value
      .filter((route) => route.meta && route.meta.showInNavBar === true)
      .sort((a, b) => (a.meta.order ?? 10) - (b.meta.order ?? 10))
  })

  return { navBarRoutes }
}

export default useNav
