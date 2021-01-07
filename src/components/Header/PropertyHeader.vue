<template src="./PropertyHeader.html">
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup';
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxButton } from 'devextreme-vue/button';
import { DxPatternRule, DxRequiredRule, DxValidator } from 'devextreme-vue/validator';
import { DxValidationGroup } from 'devextreme-vue/validation-group';
import { DxSelectBox } from 'devextreme-vue/select-box';
import countries from '@/constants/Country';
import Property from '@/model/property';
import { LOGOUT } from '@/store/actions.type';

const groupRefKey = 'targetGroup';

export default {
  name: 'PropertyHeader',
  components: {
    DxSelectBox,
    DxPopup,
    DxTextBox,
    DxButton,
    DxValidator,
    DxRequiredRule,
    DxPatternRule,
    DxValidationGroup,
  },
  props: {
    property: {
      type: Property,
      default: () => new Property(),
    },
  },
  data() {
    return {
      groupRefKey,
      countries,
      imgBase64: '',
      isPopupVisible: false,
    };
  },
  computed: {
    validationGroup() {
      return this.$refs[this.groupRefKey].instance;
    },
  },
  methods: {
    showAddPropertyPopup() {
      this.isPopupVisible = true;
    },
    onHiddenBtnClicked() {
      this.isPopupVisible = false;
    },
    createProject() {
      const result = this.validationGroup.validate();
      if (!result.isValid) return;

      this.$emit('createProperty', { ...this.property, photo: this.imgBase64 });
      this.isPopupVisible = false;
    },
    onChangeFileUpload(event) {
      const [file] = event.target.files;
      this.encodeImage(file);
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Img = e.target.result;
          this.imgBase64 = base64Img;
        };
        reader.readAsDataURL(input);
      }
    },
    clickLogout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
 @import "PropertyHeader";
</style>
