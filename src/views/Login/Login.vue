<template src="./Login.html">
</template>

<script>
import { mapState } from 'vuex';
import { LOGIN } from '@/store/actions.type';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({ name: 'home' }));
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.error,
    }),
  },
};
</script>

<style lang="scss" scoped>
  @import "Login";
</style>
