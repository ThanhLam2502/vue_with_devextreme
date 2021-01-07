<template src="./Register.html">
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import { REGISTER } from '../../store/actions.type';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      validate: {
        isLong: false,
        isLowerCase: false,
        isUpperCase: false,
        isDigit: false,
      },
    };
  },
  computed: {
    isValidPass() {
      const check = this.validate;
      return check.isLong && check.isLowerCase && check.isUpperCase && check.isDigit;
    },
    ...mapState({ errors: (state) => state.auth.error }),
  },
  methods: {
    onSignUp() {
      if (!this.isValidPass) return;
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({ name: 'login' }));
    },

    debounceInput: _.debounce(function validate() {
      const passInput = this.password;

      this.validate.isLong = passInput.length >= 8;
      this.validate.isUpperCase = !!/[A-Z]/.exec(passInput);
      this.validate.isLowerCase = !!/[a-z]/.exec(passInput);
      this.validate.isDigit = !!/[0-9]/.exec(passInput);
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
  @import "Register";
</style>
