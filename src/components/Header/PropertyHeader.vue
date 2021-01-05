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
      isPopupVisible: false,
      countries,
    };
  },
  computed: {
    validationGroup() {
      return this.$refs[this.groupRefKey].instance;
    },

    propertyTemp: {
      get() {
        return this.property;
      },
      set(value) {
        Object.assign(this.property, value);
      },
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

          this.propertyTemp = new Property({
            ...this.property,
            photo: base64Img,
          });

          this.$emit('setImageUrl', base64Img);
          console.log(base64Img);
        };
        reader.readAsDataURL(input);
      }
    },
    setImageUrl(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
 @import "./PropertyHeader.scss";
</style>
