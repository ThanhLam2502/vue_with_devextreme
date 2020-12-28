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
      :width="900"
      :height="570">
      <form
        @submit.prevent="createProject"
      >
        <DxForm
          :form-data="property"
          :show-colon-after-label="true"
          :show-validation-summary="true"
          validation-group="customerData"
        >
          <DxGroupItem caption="Add Property">
            <DxSimpleItem data-field="Photo" :text="Photo"/>
            <DxSimpleItem data-field="Project ID" />
            <DxSimpleItem data-field="Country" />
            <DxSimpleItem data-field="City" />
            <DxSimpleItem data-field="Location" />
            <DxSimpleItem data-field="Project Name" />
            <DxSimpleItem data-field="Developer Name" />
            <DxSimpleItem data-field="Property Type" />
          </DxGroupItem>
          <DxButtonItem
            :button-options="buttonOptions"
            horizontal-alignment="right"
          />
        </DxForm>
      </form>
    </DxPopup>
  </div>
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup';
import DxForm, { DxButtonItem, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';

export default {
  name: 'PropertyHeader',
  components: {
    DxPopup,
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxButtonItem,
  },
  data() {
    return {
      isPopupVisible: false,
      property: {
        type: Object,
      },
      buttonOptions: {
        text: 'Create',
        type: 'success',
        useSubmitBehavior: true,
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
      this.$emit('createProperty', this.property);
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
