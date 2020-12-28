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
        <DxSelection
          mode="multiple"
        />
        <DxColumn
          :width="44"
          cell-template="cellOptionTemplate"/>
        <DxColumn data-field="photo"
                  :allowFiltering="false"
                  :allowSearch="false"
                  :width="236" alignment="left"
                  cell-template="cellPhotoTemplate"/>
        <DxColumn data-field="propertyID"
                  :allowFiltering="true"
                  :width="236" alignment="left"/>
        <DxColumn data-field="country" :width="236" alignment="left"/>
        <DxColumn data-field="city" :width="236" alignment="left"/>
        <DxColumn data-field="location" :width="236" alignment="left"/>
        <DxColumn data-field="projectName" :width="236" alignment="left"/>
        <DxColumn data-field="developerName" :width="236" alignment="left"/>
        <DxColumn data-field="propertyType" :width="236" alignment="left"/>

        <template #cellOptionTemplate>
          <font-awesome-icon icon="ellipsis-v"/>
        </template>
        <template #cellPhotoTemplate="{ data }">
          <img :src="data.value">
        </template>
        <DxFilterRow :visible="true"/>
      </DxDataGrid>
    </div>
  </div>
</template>

<script>
import {
  DxColumn, DxDataGrid, DxFilterRow, DxSelection,
} from 'devextreme-vue/data-grid';
// import { mapGetters } from 'vuex';
// import store from '../store';
import notify from 'devextreme/ui/notify';
import PropertyHeader from '../components/PropertyHeader.vue';
// import FETCH_PROPERTIES from '../store/actions.type';

export default {
  name: 'Home',
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSelection,
    PropertyHeader,
  },
  // mounted() {
  //   store.dispatch(FETCH_PROPERTIES);
  // },
  data() {
    return {
      properties: [
        {
          check: true,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 1,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: true,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 2,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 3,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 4,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 5,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 6,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 7,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 8,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 9,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 10,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 11,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
        {
          check: false,
          photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 12,
          country: 'Thailand',
          city: 'Bangkok',
          location: 'Wattana',
          projectName: 'Noble Ploenchit.',
          developerName: 'Sansiri',
          propertyType: 'Apartment',
        },
      ],
      propertiesCount: 2136,
    };
  },
  computed: {
    // ...mapGetters(['properties']),
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
      console.log(e);
      notify({
        message: 'You have submitted the form',
        width: 250,
        position: {
          my: 'right top',
          at: 'right top',
        },
      }, 'success', 3000);
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
        img {
          width: 82px;
          height: 56px;
          display: block;
        }

        ::v-deep .dx-row > td {
          vertical-align: middle;
        }
      }
    }
  }
</style>
<!--cssClass="property-cell"-->
