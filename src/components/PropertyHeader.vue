<template>
  <div class="header">
    <div class="property-title">
      Properties
      <span class="property-total">2,136 Total</span>
    </div>
    <button class="property-add-btn" @click="showAddPropertyPopup">
      <img src="../assets/images/add_icon.svg" alt="">
      <span class="btn-add-text">Add Property</span>
    </button>

    <DxPopup
      :visible="isPopupVisible"
      v-on:hidden="onHiddenBtnClicked()"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :width="700"
      :height="570">
      <form  @submit.prevent="createProject">
        <div class="dx-fieldset">
          <div class="dx-fieldset-header">Create Property</div>
          <div class="dx-field">
            <div class="dx-field-label">Photo</div>
            <div class="dx-field-value">
             <input type="file" v-on:change="onChangeFileUpload">
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">Property ID</div>
            <div class="dx-field-value">
              <DxTextBox
                :show-clear-button="true"
                v-model="property.propertyID"
                placeholder="Enter property ID"
              />
            </div>
          </div>
        </div>
        <button type="submit">Upload</button>
      </form>
    </DxPopup>
  </div>
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup';
import DxTextBox from 'devextreme-vue/text-box';

export default {
  name: 'PropertyHeader',
  components: {
    DxPopup,
    DxTextBox,
  },
  data() {
    return {
      isPopupVisible: false,
      property: {
        photo: File,
      },
    };
  },
  methods: {
    showAddPropertyPopup() {
      this.isPopupVisible = true;
    },
    onHiddenBtnClicked() {
      this.isPopupVisible = false;
    },
    createProject() {
      this.property.check = false;
      console.log(this.property);
      this.$emit('createProperty', this.property);
    },
    onChangeFileUpload(event) {
      const [file] = event.target.files;
      this.property.photo = file;
      this.encodeImage(this.property.photo);
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Img = e.target.result;
          console.log(this.base64Img);
        };
        reader.readAsDataURL(input);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 98px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .property-title {
    height: 41px;
    font-size: 30px;
    color: #0091dc;
    text-decoration: none solid rgb(0, 145, 220);

    .property-total {
      align-self: center;
      width: 72px;
      height: 19px;
      font-size: 14px;
      color: #6b6b6b;
      text-decoration: none solid rgb(107, 107, 107);
    }
  }

  .property-add-btn {
    border: 0;
    outline: none;
    width: 158px;
    height: 44px;
    margin-left: 58px;
    font-weight: bold;
    border-radius: 5px;
    background-image: linear-gradient(90deg, #0091dc 0%, #00e1f1 100%);
    background-position: center center;
    background-size: cover;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    cursor: pointer;

    & > .btn-add-text {
      padding-left: 8px;
    }
  }

}
</style>
