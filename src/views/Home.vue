<template>
  <div class="property">
    <property-header/>
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
        <DxColumn data-field="Photo"
                  :allowFiltering="false"
                  :allowSearch="false"
                  :width="236" alignment="left"
                  cell-template="cellPhotoTemplate"/>
        <DxColumn data-field="propertyID"
                  :allowFiltering="true"
                  :width="236" alignment="left"/>
        <DxColumn data-field="Country" :width="236" alignment="left"/>
        <DxColumn data-field="City" :width="236" alignment="left"/>
        <DxColumn data-field="Location" :width="236" alignment="left"/>
        <DxColumn data-field="Project Name" :width="236" alignment="left"/>
        <DxColumn data-field="Developer Name" :width="236" alignment="left"/>
        <DxColumn data-field="Property Type" :width="236" alignment="left"/>

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
  DxColumn,
  DxDataGrid,
  DxFilterRow,
  DxSelection,
} from 'devextreme-vue/data-grid';
import PropertyHeader from '@/components/PropertyHeader.vue';

export default {
  name: 'Home',
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSelection,
    PropertyHeader,
  },
  data() {
    return {
      properties: [
        {
          check: true,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 1,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: true,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 2,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 3,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 4,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 5,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 6,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 7,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 8,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 9,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 10,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 11,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
        {
          check: false,
          Photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          propertyID: 12,
          Country: 'Thailand',
          City: 'Bangkok',
          Location: 'Wattana',
          'Project Name': 'Noble Ploenchit.',
          'Developer Name': 'Sansiri',
          'Property Type': 'Apartment',
        },
      ],
    };
  },
  computed: {
    selectedRow() {
      return this.properties.reduce((rs, property) => {
        if (property.check === true) {
          return [...rs, property.propertyID];
        }
        return rs;
      }, []);
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
