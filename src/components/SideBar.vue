<template>
  <div class="sidebar">
    <div class="logo">
      LOGO HERE
    </div>
    <nav class="nav">
      <ul class="list">
        <li
          class="list-item"
          :class="{selected: selectedId==='1'}"
          @click="onClickSelect('1')"
        >Dashboard
        </li>
        <li
          class="list-item"
          :class="{selected: selectedId==='2'}"
          @click="onClickSelect('2')"
        >Action Center
        </li>
        <li
          class="list-item parent"
          :class="{selected: selectedId==='3'}"
          @click="onClickSelect('3')"
          v-b-toggle.subMenu
        >Lists
        </li>
        <ul class="list-sub">
          <b-collapse id="subMenu">
            <li
              class="list-sub-item"
              :class="{selected: selectedSubId==='3-1'}"
              @click="onClickSelectSub('3-1')"
            >
              <img src="../assets/images/Icon.svg">
              <span class="sub-item-text">Properties</span>
            </li>
            <li
              class="list-sub-item"
              :class="{selected: selectedSubId==='3-2'}"
              @click="onClickSelectSub('3-2')"
            >
              <img src="../assets/images/Icon.svg">
              <span class="sub-item-text">Projects</span>
            </li>
            <li
              class="list-sub-item"
              :class="{selected: selectedSubId==='3-3'}"
              @click="onClickSelectSub('3-3')"
            >
              <img src="../assets/images/Icon.svg">
              <span class="sub-item-text">People</span>
            </li>
            <li
              class="list-sub-item"
              :class="{selected: selectedSubId==='3-4'}"
              @click="onClickSelectSub('3-4')"
            >
              <img src="../assets/images/Icon.svg">
              <span class="sub-item-text">Companies</span>
            </li>
          </b-collapse>
        </ul>
        <li
          class="list-item"
          :class="{selected: selectedId==='4'}"
          @click="onClickSelect('4')"
        >Global Developer Marketplace
        </li>
        <li
          class="list-item"
          :class="{selected: selectedId==='5'}"
          @click="onClickSelect('5')"
        >Marketing Hub
        </li>
        <li
          class="list-item"
          :class="{selected: selectedId==='6'}"
          @click="onClickSelect('6')"
        >Reports
        </li>
        <li
          class="list-item"
          :class="{selected: selectedId==='7'}"
          @click="onClickSelect('7')"
        >Settings
        </li>
        <li
          class="list-item"
          :class="{selected: selectedId==='8'}"
          @click="onClickSelect('8')"
        >Chat
        </li>
      </ul>
    </nav>
    <div class="user-preview">
      <img :src="'https://imgur.com/I80W1Q0.png'" class="img-user-preview">
      <div class="user-name">Roger Claeys</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      selectedId: '1',
      selectedSubId: '',
    };
  },
  methods: {
    onClickSelect(id) {
      this.selectedId = id;
      if (this.selectedId !== '3') {
        this.selectedSubId = '';
      }
    },
    onClickSelectSub(id) {
      this.selectedSubId = id;
      this.selectedId = '3';
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 215px;
  height: 100%;
  color: #7A98B1;
  box-shadow: -38px 1px 85px rgba(0, 0, 0, 0.2);
  text-decoration: none solid rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(0deg, #2e3344 0%, #003c6e 100%);

  .logo {
    height: 22px;
    font-size: 16px;
    font-weight: 700;
    margin-top: 32px;
    text-align: center;
  }

  .nav {
    margin-top: 74px;
    font-weight: 600;
    flex: 1;

    .list {
      list-style: none;
      padding: 0;
      font-size: 14px;

      @mixin active {
        color: #ffffff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-position: center center;
        text-decoration: none solid rgba(255, 255, 255);
      }

      .list-item {
        //width: 201px;
        height: 50px;
        padding: 0 0 0 30px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        &.parent {
          outline: none;

          &.not-collapsed {
            margin-bottom: 0;
          }
        }

        &.selected {
          @include active;
          background-image: linear-gradient(25deg, #0091dc 0%, #00e1f1 100%);
        }

        &:hover {
          color: #ffffff;
          cursor: pointer;
          background-color: #093153;
        }
      }

      .list-sub {
        padding: 0;
        margin-bottom: 12px;

        .list-sub-item {
          //width: 201px;
          height: 50px;
          padding: 0 0 0 26px;
          display: flex;
          align-items: center;

          &:hover {
            cursor: pointer;
          }

          &.selected {
            @include active;
            background-image: linear-gradient(90deg, #252936 0%, rgba(37, 41, 54, 0) 100%);
          }

          .sub-item-text {
            padding-left: 6.8px;
          }
        }
      }
    }
  }

  .user-preview {
    height: 75px;
    color: #ffffff;
    font-size: 14px;
    background-color: #252936;
    background-size: cover;
    text-decoration: none solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    .img-user-preview {
      width: 45px;
      height: 45px;
      border-radius: 100px;
    }

    .user-name {
      font-weight: bold;
      padding: 0 24px;
      color: #ffffff;
      font-size: 14px;
      text-decoration: none solid rgb(255, 255, 255);
    }
  }
}
</style>
