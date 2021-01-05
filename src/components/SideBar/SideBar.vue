<template src="./SideBar.html">
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      selectedId: '1',
      selectedSubId: '',
    };
  },
  methods: {
    onClickSelect(id) {
      this.selectedId = id;
      if (this.selectedId !== '3') {
        this.selectedSubId = '';
      }
    },
    onClickSelectSub(id) {
      this.selectedSubId = id;
      this.selectedId = '3';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "SideBar";
</style>
