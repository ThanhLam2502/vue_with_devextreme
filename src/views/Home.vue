<template>
  <div class="property">
    <div class="header">
      <div class="property-title">
        Properties
        <span class="property-total">2,136 Total</span>
      </div>
      <button class="property-add-btn">
        Add Property
      </button>
    </div>
    <div class="table">
      dsadad
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.property {
  margin-left: 215px;
  padding-left: 67px;
  background-color: #fafafa;

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
    .property-add-btn{
      border: 0;
      outline: none;
      width: 158px;
      height: 44px;
      margin-left: 58px;
      font-weight: bold;
      border-radius: 5px;
      background-image: linear-gradient(90deg, #0091dc 0%, #00e1f1 100% );
      background-position: center center;
      background-size: cover;
      font-size: 14px;
      color: #ffffff;
      text-decoration: none solid rgb(255, 255, 255);
    }

  }
}
</style>
