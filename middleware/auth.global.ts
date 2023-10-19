export default defineNuxtRouteMiddleware((to, from) => {
    const accessToken = useCookie('gateway.accessToken')
  
    // check if user is not logged in => redirect to login page
    if (!accessToken.value && to.path !== '/login' && to.path !== '/signup') {
      return navigateTo('/login')
    }
  })
  