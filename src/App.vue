<template>
  <div id="app">
    <aside>
      <app-sidebar/>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    'app-sidebar': SideBar,
  },
};
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
