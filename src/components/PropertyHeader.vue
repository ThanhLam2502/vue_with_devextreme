<template src="./PropertyHeader.html">
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup';
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxButton } from 'devextreme-vue/button';
import { DxPatternRule, DxRequiredRule, DxValidator } from 'devextreme-vue/validator';
import { DxValidationGroup } from 'devextreme-vue/validation-group';
import { DxSelectBox } from 'devextreme-vue/select-box';
import Property from '../model/property';

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

  data() {
    return {
      groupRefKey,
      isPopupVisible: false,
      countries: [
        {
          id: 1,
          name: 'ThaiLand',
        },
        {
          id: 2,
          name: 'Viet Nam',
        },
        {
          id: 3,
          name: 'Nu Nhi Quoc',
        },
        {
          id: 4,
          name: 'Thien Dang',
        },
      ],
      property: Property,
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

      this.$emit('createProperty', this.property);
      this.property = new Property();
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
          this.property.photo = base64Img;
        };
        reader.readAsDataURL(input);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
 @import "./PropertyHeader.scss";
</style>
