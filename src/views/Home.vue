<template>
  <div class="property">
    <property-header @createProperty="addProperty"/>
    <div class="table">
      <DxDataGrid id="dataGrid-home"
                  :data-source="properties"
                  key-expr="propertyID"
                  :showBorders="false"
                  :showRowLines="false"
                  :showColumnLines="false"
                  :selected-row-keys="selectedRow"
      >
        <DxHeaderFilter
          :visible="true"
        />
        <DxFilterRow
          :visible="true"
        />
        <DxSelection
          mode="multiple"
          showCheckBoxesMode="always"
        />
        <DxColumn
          :width="44"
          cell-template="cellOptionTemplate"/>
        <DxColumn data-field="photo"
                  :allowFiltering="false"
                  :allowSearch="false"
                  :width="236" alignment="left"
                  cell-template="cellPhotoTemplate"
        />
        <DxColumn data-field="propertyID"
                  :allowFiltering="true"
                  caption="ID"
                  :width="236" alignment="left"
        />
        <DxColumn data-field="country" :width="236" alignment="left"/>
        <DxColumn data-field="city" :width="236" alignment="left"/>
        <DxColumn data-field="location" :width="236" alignment="left"/>
        <DxColumn data-field="projectName" :width="236" alignment="left"/>
        <DxColumn data-field="developerName" :width="236" alignment="left"/>
        <DxColumn data-field="propertyType" :width="236" alignment="left"/>

        <template #cellOptionTemplate>
          <div class="icon-option" @click.stop="clickOnShow">
            <font-awesome-icon icon="ellipsis-v"/>
          </div>
        </template>

        <template #cellPhotoTemplate="{ data }">
          <img :src="data.value">
        </template>
      </DxDataGrid>
    </div>
    <DxPopover
      :width="300"
      :ref="popoverRefOption"
      position="right"
    >
      <div class="icon">
        <div class="icon-item">
          <font-awesome-icon icon="eye"/>
          <span>View</span>
        </div>
        <div class="icon-item">
          <font-awesome-icon icon="edit"/>
          <span>Edit</span>
        </div>
        <div class="icon-item">
          <font-awesome-icon icon="copy"/>
          <span>Duplicate</span>
        </div>
        <div class="icon-item">
          <font-awesome-icon icon="trash-alt"/>
          <span>Delete</span>
        </div>
      </div>
    </DxPopover>
  </div>
</template>

<script>
import {
  DxColumn,
  DxDataGrid,
  DxFilterRow,
  DxHeaderFilter,
  DxSelection,
} from 'devextreme-vue/data-grid';
import { DxPopover } from 'devextreme-vue/popover';
import { mapGetters } from 'vuex';
import notify from 'devextreme/ui/notify';
import store from '../store';
import PropertyHeader from '../components/PropertyHeader.vue';
import FETCH_PROPERTIES from '../store/actions.type';

const popoverRefOption = 'some-ref-name';

export default {
  name: 'Home',
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSelection,
    DxHeaderFilter,
    DxPopover,
    PropertyHeader,
  },
  mounted() {
    store.dispatch(FETCH_PROPERTIES);
  },
  data() {
    return {
      popoverRefOption,
    };
  },
  computed: {
    ...mapGetters(['properties']),
    popover() {
      return this.$refs[popoverRefOption].instance;
    },
    selectedRow() {
      return this.properties.reduce((rs, property) => {
        if (property.check === true) {
          return [...rs, property.propertyID];
        }
        return rs;
      }, []);
    },
  },
  methods: {
    addProperty(e) {
      this.properties.push(e);
      notify({
        message: 'You have submitted the form',
        width: 250,
        position: {
          my: 'right top',
          at: 'right top',
        },
      }, 'success', 3000);
    },
    clickOnShow(e) {
      if (this.popover) {
        this.popover.show(e.currentTarget);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .property {
    margin-left: 215px;
    padding-left: 67px;
    background-color: #fafafa;

    .table {
      > #dataGrid-home {
        td > img {
          width: 82px;
          height: 56px;
          display: block;
        }

        .icon-option {
          padding: inherit;
        }

        ::v-deep .dx-data-row > td {
          vertical-align: middle;
        }

        ::v-deep .dx-header-row {
          > .dx-datagrid-action {
            & .dx-sort-indicator {
              color: #0091dc;
            }

            & .dx-column-indicators {
              color: #0091dc;
            }
          }
        }

      }
    }
  }

</style>

<style lang="scss">
  .dx-overlay-content {
    border-radius: 50px!important;
    width: 350px!important;
    height: 120px;

    >.dx-popover-arrow {
      visibility: hidden;
    }
    >.dx-popup-content {
      >.icon{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>
