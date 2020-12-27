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
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    'app-sidebar': SideBar,
    // 'app-content': Properties,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
