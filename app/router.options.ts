import type {RouterOptions} from '@nuxt/schema'

export default <RouterOptions>{
    scrollBehavior(to, from, savedPosition) {
        if (to.path === "/") {
            return {
                top: 0,
                behavior: "smooth"
            }
        } else {
            return {
                top: window.innerHeight,
                behavior: "smooth"
            }
        }
    }
}