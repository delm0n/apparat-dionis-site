<template>
  <div class="transformer-tab-item">
    <div class="transformer-item__happen">
      <my-image
        class="happen-img"
        :alt="item.alt"
        :floder="'transformer'"
        :imgName="item.happenImg"
        :media="768"
      />

      <div class="happen-text">
        <h3 v-html="item.name"></h3>

        <collapse :when="mobile ? item.mobileShow : true">
          <p class="happen-text-item" v-html="item.subtitle"></p>
          <p class="happen-text-title">Особенности:</p>
          <ul>
            <li
              v-for="(pec, idx) in item.peculiar"
              :key="idx"
              v-html="pec"
              class="happen-text-item"
            ></li>
          </ul>
          <template v-if="item.doing">
            <p class="happen-text-title">
              Что можно приготовить в этом режиме?
            </p>

            <ul>
              <li
                v-for="(doo, idx) in item.doing"
                :key="idx"
                v-html="doo"
                class="happen-text-item"
              ></li>
            </ul>
          </template>
        </collapse>

        <div
          class="showmore-mobile"
          @click="item.mobileShow = !item.mobileShow"
          :style="
            item.mobileShow
              ? 'transform: translateY(5px)'
              : 'transform: translateY(0)'
          "
        >
          <p>{{ item.mobileShow ? "Скрыть" : "Узнать подробнее" }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            :style="
              item.mobileShow
                ? 'transform: rotate(180deg)'
                : 'transform: rotate(0deg)'
            "
          >
            <path
              d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3V4H4.5V3H3.5Z"
              fill="#323232"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="transformer-item__doplist">
      <my-image
        class="doplist-img"
        :alt="item.alt"
        :floder="'transformer'"
        :imgName="item.dopImg"
        :media="768"
      />

      <div
        class="doplist-block"
        :style="
          mobile
            ? 'height: calc(' +
              item.doplist.length * 50 +
              'px + ' +
              (item.doplist.length ? 50 : 0) +
              'px)'
            : ''
        "
      >
        <p class="doplist-title">Вам понадобятся</p>

        <div class="doplist-scroll">
          <ul>
            <li
              v-for="(dop, index) in item.doplist"
              :key="index"
              class="doplist__item"
            >
              <my-image
                class="doplist__item-icon"
                :alt="'#'"
                :floder="'kit'"
                :imgName="dop.icon"
                :mobile="false"
                :lazyLoad="false"
              />
              <div class="doplist__item-content">
                <p class="doplist__item-name" v-html="dop.name"></p>
                <div class="doplist__item-price">
                  <span class="new" v-html="dop.price + ' руб.'"></span>

                  <div style="position: relative">
                    <transition name="fade">
                      <my-image
                        v-show="!dop.cart"
                        :alt="'#'"
                        class="cart-icon"
                        :floder="'transformer'"
                        :imgName="'cart'"
                        :lazyLoad="false"
                        :mobile="false"
                        @click="
                          dopAddCart(dop.id);
                          $emit('update-slider');
                        "
                      />
                    </transition>

                    <transition name="fade">
                      <p class="cart-icon--alternative" v-show="dop.cart">
                        <span :style="!dop.cart ? 'opacity: 0' : ''">
                          В корзине</span
                        >
                        <svg
                          :style="!dop.cart ? 'opacity: 0' : ''"
                          @click="
                            dopDeleteFromCart(dop.id);
                            $emit('update-slider');
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <rect
                            y="1.33691"
                            width="2"
                            height="12.7387"
                            rx="1"
                            transform="rotate(-42 0 1.33691)"
                            fill="#989898"
                          />
                          <rect
                            x="8.52393"
                            y="-0.000976562"
                            width="2"
                            height="12.7387"
                            rx="1"
                            transform="rotate(42 8.52393 -0.000976562)"
                            fill="#989898"
                          />
                        </svg>
                      </p>
                    </transition>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import { Collapse } from "vue-collapsed";

export default {
  data() {
    return {
      mobile: window.innerWidth < 768,
    };
  },

  props: {
    item: Object,
  },
  components: { MyImage, Collapse },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 767px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: mapMutations(["dopAddCart", "dopDeleteFromCart"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.transformer-tab-item {
  display: flex;
  height: 100%;
  align-items: stretch;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-out 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    position: absolute;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }

  img {
    max-width: 100%;
  }
  .transformer-item {
    &__happen {
      //   height: 100%;
      background: rgba(202, 202, 202, 0.2);
      width: 48%;

      @media (max-width: 767px) {
        width: 100%;
      }
      .happen-img {
        @include aspect() {
          aspect-ratio: 510/319;
          opacity: 0;
        }

        @media (max-width: 767px) {
          margin: 15px auto 0;

          @include aspect() {
            max-width: 386px;
            aspect-ratio: 386/241;
          }
        }
      }
      .happen-text {
        padding: 20px 30px;
        flex-grow: 1;

        @media (max-width: 1366px) {
          padding: 20px 20px;
        }

        @media (max-width: 1115px) {
          padding: 15px 10px;
        }

        &-title,
        &-item {
          color: #323232;
          font-family: "Stolzl";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131.818%;

          @include fluidFontSize(16, 22, 993, 1920);

          @media (max-width: 767px) {
            font-size: 14px;
          }
        }

        &-title {
          color: rgba(50, 50, 50, 0.7);
          font-weight: 400;
          margin-top: 10px;
        }

        ul {
          padding-left: 30px;
          transition: all 0.3s;
          will-change: auto;

          li {
            list-style-type: disc;
          }
        }
      }

      h3 {
        color: #323232;
        font-family: "Stolzl";
        font-size: 27px;
        font-style: normal;
        font-weight: 500;
        line-height: 125.926%;

        margin-bottom: 20px;
        @media (max-width: 1366px) {
          margin-bottom: 10px;
        }

        @include fluidFontSize(20, 27, 993, 1920);

        @media (max-width: 767px) {
          font-size: 27px;
        }

        br {
          display: none;
        }
      }

      .showmore-mobile {
        display: none;
        transition: all 0.3s;

        @media (max-width: 767px) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          justify-content: space-between;

          svg {
            transition: all 0.3s;
          }

          p {
            color: rgba(50, 50, 50, 0.6);
            font-family: "Stolzl";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px; /* 150% */
          }
        }
      }
    }

    &__doplist {
      width: 52%;
      padding: 30px 20px 20px;
      @media (max-width: 767px) {
        width: 100%;
      }

      @media (max-width: 1366px) {
        padding: 20px 15px 15px;
      }

      @media (max-width: 1115px) {
        padding: 15px 10px;
      }
      @media (max-width: 767px) {
        padding: 20px 10px;
      }

      .doplist-block {
        height: 430px;
        margin-top: 50px;
        padding-top: 10px;
        border-top: #d1d1d1 2px solid;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        @media (max-width: 1440px) {
          height: 355px;
        }
        @media (max-width: 992px) {
          height: 275px;
        }
        @media (max-width: 767px) {
          max-height: 300px;
        }

        .doplist-scroll {
          position: relative;
          height: 100%;
        }

        .doplist-title {
          color: #d1d1d1;
          font-family: "Stolzl";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 138.889%;
          padding-bottom: 20px;

          @media (max-width: 1280px) {
            padding-bottom: 10px;
          }

          @media (max-width: 767px) {
            font-size: 15px;
          }
        }

        ul {
          @include scroll-box();

          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: space-between;
          position: absolute;
          overflow-y: scroll;
          height: 100%;
          left: 0;
          top: 0;
          width: 100%;
        }
      }

      .doplist__item {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #323232;
        font-family: "Stolzl";
        font-style: normal;

        &-name {
          font-size: 22px;
          font-weight: 400;
          line-height: 131.818%;
          margin-bottom: 5px;
          padding-right: 10px;

          @include fluidFontSize(17, 22, 768, 1920);

          @media (max-width: 767px) {
            font-size: 16px;
            margin-bottom: 2px;
          }
        }

        &-price {
          display: flex;
          gap: 10px;
          align-items: center;

          .cart-icon {
            display: block;
            cursor: pointer;
            transition: all 0.4s;

            &:hover {
              transform: scale(1.1);
            }

            &--alternative {
              height: 25px;
              display: flex;
              align-items: center;
              gap: 5px;

              span {
                // color: #b9cd2a;
                color: rgba(50, 50, 50, 0.5);
                font-family: "Stolzl";
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 138.889%;

                @include fluidFontSize(14, 18, 320, 1920);
              }

              &:hover {
                svg rect {
                  fill: #b9cd2a;
                }
              }

              svg {
                cursor: pointer;
                rect {
                  transition: all 0.4s;
                }
              }
            }
          }

          .new {
            display: block;
            font-size: 18px;
            font-weight: 300;
            line-height: 138.889%;

            @media (max-width: 767px) {
              font-size: 14px;
            }
          }
        }

        &-icon {
          img {
            width: 70px;

            @media (max-width: 1440px) {
              width: 50px;
            }
          }
        }
      }

      .doplist-img {
        picture {
          justify-content: center;
        }

        @include aspect() {
          opacity: 0;
          aspect-ratio: 491/476;
          width: 100%;
          max-width: 491px;

          @media (max-width: 767px) {
            aspect-ratio: 123/119;
            max-width: 369px;
          }
        }
      }
    }
  }
}
</style>