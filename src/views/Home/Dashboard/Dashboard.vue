<template src="./Dashboard.html">
</template>

<script>

import {
  DxColumn,
  DxColumnChooser,
  DxDataGrid,
  DxFilterRow,
  DxHeaderFilter,
  DxPaging,
  DxSelection,
} from 'devextreme-vue/data-grid';
import { DxPopover, DxPosition } from 'devextreme-vue/popover';
import { mapGetters } from 'vuex';
import notify from 'devextreme/ui/notify';
import store from '@/store';
import { FETCH_PROPERTIES, ADD_PROPERTY } from '@/store/actions.type';
import PropertyHeader from '@/components/Header/PropertyHeader.vue';

const popoverRefOption = 'some-ref-name';
export default {
  name: 'Dashboard',
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSelection,
    DxHeaderFilter,
    DxPopover,
    DxPosition,
    DxPaging,
    DxColumnChooser,
    PropertyHeader,
  },
  mounted() {
    store.dispatch(FETCH_PROPERTIES, {
      filters: {
        _page: 1,
        _limit: 5,
      },
    });
  },
  data() {
    return {
      property: {},
      selectedRowIndex: -1,
      popoverRefOption,
      animationConfig: {
        show: {
          type: 'slide',
          duration: 500,
          from: {
            left: 330,
            opacity: 0,
          },
          to: {
            opacity: 1,
          },

        },
      },
    };
  },
  computed: {
    ...mapGetters(['properties', 'isLoading']),
    popover() {
      return this.$refs[popoverRefOption].instance;
    },
    selectedRow() {
      // Array key select
      return this.properties.reduce((rs, property) => {
        if (property.check === true) {
          return [...rs, property.id];
        }
        return rs;
      }, []);
    },
  },
  methods: {
    async addProperty(e) {
      // call api
      e.id = await store.dispatch(ADD_PROPERTY, e);
      // push data
      this.properties.unshift(e);
      // show message
      notify({
        message: 'You have submitted the form',
        width: 250,
        position: {
          my: 'right top',
          at: 'right top',
        },
      }, 'success', 3000);
    },

    clickOnShow(e, rowInfo) {
      // check duplicate click
      if (this.selectedRowIndex === rowInfo.rowIndex) {
        this.popover.hide();
        // set default flag
        this.selectedRowIndex = -1;
      } else {
        this.popover.show(e.currentTarget);
        // save data row click
        this.property = rowInfo.data;
        // save flag
        this.selectedRowIndex = rowInfo.rowIndex;
      }
    },

  },
};
</script>

<style lang="scss" scoped>
  @import "Dashboard";
</style>
