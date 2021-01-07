<template src="./SideBar.html">
</template>

<script>
import { CHECK_AUTH } from '../../store/actions.type';

export default {
  name: 'SideBar',
  data() {
    return {
      selectedId: '1',
      selectedSubId: '',
    };
  },
  mounted() {
    this.$store.dispatch(CHECK_AUTH)
      .then(() => {
        console.log('Oke');
      })
      .catch((err) => {
        console.log(err);
      });
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
