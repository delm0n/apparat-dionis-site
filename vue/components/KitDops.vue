<template>
  <div class="dops-container">
    <ul class="kit__list">
      <li v-for="(item, index) in getDops" :key="index" class="kit__item">
        <div class="kit__item-content">
          <label class="kit__item-checkbox checkbox">
            <input
              v-model="item.selected"
              class="checkbox__disabled"
              type="checkbox"
            />
            <span class="checkbox__active"> </span>
          </label>
          <div class="kit__item-img">
            <my-image
              class="kit-icon"
              :alt="'#'"
              :floder="'kit'"
              :imgName="item.icon"
              :mobile="false"
              :lazyLoad="false"
            />
          </div>
          <p
            class="kit__item-name"
            @click="$emit('action-modal', index)"
            v-html="item.name"
          ></p>
        </div>
        <div class="kit__item-price">
          <p
            class="name-mobile"
            @click="$emit('action-modal', index)"
            v-html="item.name"
          ></p>
          <span class="old" v-html="item.oldPrice + ' руб.'"></span>
          <span class="new" v-html="item.price + ' руб.'"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  computed: { ...mapGetters(["getDops"]) },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin dop() {
  cursor: pointer;
  color: #565656;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  max-width: 168px;

  @include fluidFontSize(16, 20, 992, 1920);

  @media (max-width: 576px) {
    font-size: 15px;
  }
}

.dops-container {
  height: 100%;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  overflow: hidden;
  .kit__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    position: absolute;
    overflow-y: scroll;
    height: 100%;
    padding-right: 10px;
    width: 100%;

    @include scroll-box();

    @media (max-width: 768px) {
      padding-top: 10px;
    }

    .kit__item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #c8c8c8;

      @media (max-width: 576px) {
        justify-content: start;
        padding-bottom: 0;
        border-bottom: none;
        gap: 15px;
      }

      @media (max-width: 375px) {
        gap: 9px;
      }

      &-content {
        display: flex;
        gap: 19px;
        align-items: center;

        @media (max-width: 576px) {
          gap: 13px;
        }
      }

      &-img {
        .kit-icon {
          img {
            width: 50px;

            @media (max-width: 576px) {
              width: 40px;
            }
          }
        }
      }

      &-price {
        @media (max-width: 576px) {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0px 10px;
        }

        .name-mobile {
          display: none;
          @include dop();

          @media (max-width: 576px) {
            display: block;
            grid-column: 1/3;
            grid-row: 1/2;
          }
        }

        span {
          display: block;
          font-family: "Roboto";
          font-style: normal;
          white-space: nowrap;

          @media (max-width: 576px) {
            font-family: "Stolzl";
            color: #4f4f4f;
          }

          &.old {
            color: #c8c8c8;
            font-size: 14px;
            font-weight: 700;
            line-height: 14px; /* 100% */
            text-decoration: line-through;

            @media (max-width: 576px) {
              font-size: 10px;
              font-weight: 700;
              line-height: 17px;
              grid-column: 2/3;
              grid-row: 2/3;
            }
          }

          &.new {
            color: #323232;
            font-size: 16px;
            font-weight: 900;
            line-height: 22px; /* 137.5% */

            @media (max-width: 576px) {
              font-size: 12px;
              font-weight: 700;
              font-weight: 400;
              line-height: 19px;
              grid-row: 2/3;
            }
          }
        }
      }

      &-name {
        @include dop();

        @media (max-width: 576px) {
          display: none;
        }
      }
    }
  }
}
</style>