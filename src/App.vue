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
/*Popup in component PropertyHeader*/
.popup-property-content {
  z-index: 1502!important;
}

/*Popover in views Home*/
.popover-property-menu {
  .dx-overlay-content {
    border-radius: 50px;

    > .dx-popover-arrow {
      visibility: hidden;
    }

    > .dx-popup-content {
      padding: 8px 8px;

      > .icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 32px;

        .icon-item {
          padding: 0 12px;

          .icon-name {
            padding: 0 6px;
          }
        }
      }
    }
  }
}
</style>
