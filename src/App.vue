<template>
  <div class="corpo">

    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path :  '/'  ">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import {routes} from './routes'

export default {

  data() {
    return {
      routes
    }
  }

}
</script>

<style>

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter, .pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {
  transition: opacity 1.5s;
}
</style>