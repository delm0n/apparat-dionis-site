<template>
  <section id="transformer">
    <div class="transformer-title">
      <div class="container">
        <div class="title-box">
          <h2>Аппарат-трансформер</h2>
          <p class="subtitle">
            До 6 режимов работы — с клампом на 2 дюйма <br />
            возможны любые модификации и улучшения
          </p>
        </div>
      </div>
    </div>

    <div class="transformer-main">
      <div class="container">
        <div class="transformer-wrapper">
          <div class="transformer-content">
            <div
              v-for="(item, index) in tabs"
              :key="index"
              v-show="item.show"
              class="transformer-item"
            >
              <transition name="fade">
                <transformer-tab-item
                  @update-slider="updateSlider"
                  v-show="item.show"
                  :item="item"
                />
              </transition>
            </div>
          </div>

          <div class="transformer-tabs">
            <div
              v-for="(item, index) in tabs"
              :key="index"
              :class="'tab-item ' + (item.show ? 'tab-item--active' : '')"
              v-html="item.name"
              @click="showedItem(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="transformer-offer">
      <div class="container">
        <div
          :class="
            (getCart.length ? 'transformer-offer__wrapper-active' : '') +
            ' transformer-offer__wrapper'
          "
        >
          <div class="cart-box">
            <div class="cart-swiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(dop, index) in getCart"
                  :key="index"
                  class="swiper-slide cart-item"
                >
                  <my-image
                    class="cart-item__icon"
                    :alt="'#'"
                    :floder="'kit'"
                    :imgName="dop.icon"
                    :mobile="false"
                    :lazyLoad="false"
                  />

                  <div class="cart-item__content">
                    <p class="cart-item__name" v-html="dop.name"></p>
                    <div class="cart-item__price">
                      <span class="new" v-html="dop.price + ' руб.'"></span>
                      <svg
                        class="cart-icon"
                        @click="
                          dopDeleteFromCart(dop.id);
                          updateSlider();
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#B9CD2A" />
                        <path
                          d="M8.54663 8L17.8231 17.2765"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M8 17.2764L17.2765 7.99986"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div v-show="getCart.length > 1" class="cart-controls">
                <svg
                  class="cart-prev"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="16"
                  viewBox="0 0 31 16"
                  fill="none"
                >
                  <path
                    d="M0.292891 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM31 7L0.999998 7V9L31 9V7Z"
                    fill="white"
                  />
                </svg>

                <svg
                  class="cart-next"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="16"
                  viewBox="0 0 31 16"
                  fill="none"
                >
                  <path
                    d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                    fill="white"
                  />
                </svg>

                <div class="cart-pagination"></div>
              </div>
            </div>
          </div>

          <div class="order-box">
            <p
              v-html="'Итого: ' + getLastPriceCart.toLocaleString() + ' руб.'"
            ></p>
            <button @click="openModal" class="button">Перейти к заказу</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import TransformerTabItem from "./TransformerTabItem.vue";
import { mapGetters, mapMutations } from "vuex";
import { Collapse } from "vue-collapsed";
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  components: { MyImage, TransformerTabItem, Collapse },
  computed: {
    ...mapGetters(["getDops", "getLastPriceCart", "getCart"]),
  },
  data() {
    return {
      tabs: [
        {
          show: true,
          alt: "Чистый спирт",
          happenImg: "transformer-1",
          peculiar: [
            "Подходит для создания ректификата",
            "Позволяет повысить крепость продукта на выходе до 96,6°",
            "Обеспечивает безопасный продукт",
          ],
          mobileShow: false,
          doplist: [],
          subtitle: `Достигните пиков крепости напитка. Готовьте ректификат прямо на кухне и оттачивайте своё мастерство на максимум!`,
          dopImg: "dop-1",
          name: "Чистый спирт",
        },

        {
          show: false,
          alt: "Сверхкрепкие дистилляты",
          happenImg: "transformer-2",
          peculiar: [
            "Подходит для опытных винокуров",
            "Позволяет повышать крепость продукта на выходе до 90°",
            "Сохраняет ароматические и вкусовые свойства напитка",
          ],

          mobileShow: false,
          doplist: [],

          doing: ["Абсент", "Авторские напитки", "Высокоградусный самогон"],
          subtitle: `Повышайте обороты и получайте качественный, а главное — совершенно безопасный алкоголь при перегонке браги или спирта-сырца.`,
          dopImg: "dop-2",
          name: "Сверхкрепкие <br> дистилляты",
        },

        {
          show: false,
          alt: "Ароматизация",
          happenImg: "transformer-3",
          peculiar: [
            "Подходит для экспериментов ",
            "Позволяет получить крепость продукта на выходе до 40–45°",
            "Насыщает продукт вкусовыми и ароматическими свойствами",
          ],
          mobileShow: false,
          doplist: [],

          doing: ["Авторские напитки", "Ароматные водки", "Ликёры"],
          subtitle: `Не отказывайте себе в удовольствии почувствовать себя творцом — создайте по-настоящему уникальный продукт. Для придания дистилляту особых оттенков вкуса и запаха на тарелки внутри царги можно выкладывать любые фрукты, ягоды, листья и орехи.`,
          dopImg: "dop-3",
          name: "Ароматизация",
        },

        {
          show: false,
          alt: "Режим укрепления",
          happenImg: "transformer-4",
          peculiar: [
            "Подходит для экспериментов ",
            "Позволяет повысить крепость продукта на выходе до 75°",
            "Сохраняет ароматические и вкусовые свойства браги",
          ],
          mobileShow: false,
          doplist: [],

          doing: [
            "Джины (сухой или голландский)",
            "Фруктовые водки",
            "Абсент",
            "Домашний коньяк",
            "Авторские напитки",
            "Ликёры",
          ],

          subtitle: `Переходите на более сложный режим — изобретайте авторские напитки. Делайте популярный алкоголь, как в магазине, в домашних условиях.`,
          dopImg: "dop-4",
          name: "Режим укрепления",
        },

        {
          show: false,
          alt: "Базовый режим",
          happenImg: "transformer-5",
          peculiar: [
            "Отлично подходит для начинающих винокуров",
            "Позволяет с лёгкостью контролировать температуру и крепость алкоголя на выходе",
            "Сохраняет ароматические и вкусовые свойства браги",
          ],
          mobileShow: false,
          doplist: [],

          doing: ["Традиционный самогон", "Полугар"],

          subtitle: `Самогонный аппарат работает в самом простом и популярном режиме — классической дистилляции.`,
          dopImg: "dop-5",
          name: "Базовый <br> режим",
        },

        {
          show: false,
          alt: "Приготовление браги",
          happenImg: "transformer-6",
          peculiar: [
            "Подходит для всех винокуров",
            "Полная герметичность ",
            "Ударопрочность и долговечность",
          ],
          mobileShow: false,
          doplist: [],

          doing: [
            "Сахарные браги",
            "Фруктово-овощные браги ",
            "Зерновые браги",
          ],
          subtitle: `Ставьте брагу прямо в кубе самогонного аппарата. Медицинская сталь устойчива к коррозии, она не магнитится и не окисляется.`,
          dopImg: "dop-6",
          name: "Приготовление <br> браги",
        },
      ],

      myTransformSwiper: null,
    };
  },

  created() {
    //загружаем допы на страницу 1
    Array.prototype.push.apply(
      this.tabs[0].doplist,
      this.getDops.filter(
        (el) =>
          el.id == goods.defleg ||
          el.id == goods.rpn_nerj ||
          el.id == goods.rpn_cu ||
          el.id == goods.spn_nerj ||
          el.id == goods.spn_cu ||
          el.id == goods.uzel
      )
    );

    //загружаем допы на страницу 2
    Array.prototype.push.apply(
      this.tabs[1].doplist,
      this.getDops.filter(
        (el) =>
          el.id == goods.rpn_nerj ||
          el.id == goods.rpn_cu ||
          el.id == goods.spn_nerj ||
          el.id == goods.spn_cu ||
          el.id == goods.defleg
      )
    );

    //загружаем допы на страницу 4
    Array.prototype.push.apply(
      this.tabs[3].doplist,
      this.getDops.filter(
        (el) =>
          el.id == goods.rpn_nerj ||
          el.id == goods.rpn_cu ||
          el.id == goods.spn_nerj ||
          el.id == goods.spn_cu ||
          el.id == goods.gusset
      )
    );

    //загружаем допы на страницу 6
    Array.prototype.push.apply(
      this.tabs[5].doplist,
      this.getDops.filter((el) => el.id == goods.hidroz)
    );
  },

  methods: {
    showedItem(index) {
      this.tabs.forEach((element, i) => {
        element.mobileShow = false;
        i == index ? (element.show = true) : (element.show = false);
      });
    },

    updateSlider() {
      setTimeout(() => {
        this.myTransformSwiper.update();
      }, 100);
    },

    TransformSwiper() {
      this.myTransformSwiper = new Swiper(".cart-swiper", {
        slidesPerView: 2.6,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: ".cart-next",
          prevEl: ".cart-prev",
        },
        pagination: {
          el: ".cart-pagination",
          type: "progressbar",
        },
        // initialSlide: "lastSlide",
        modules: [Navigation, Pagination],
        breakpoints: {
          1280: {
            slidesPerView: 2.6,
          },

          577: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          0: {
            slidesPerView: 1.4,
            spaceBetween: 15,
          },
        },
        on: {
          update: function (swiper) {
            swiper.slideTo(
              document.querySelectorAll(".cart-box .swiper-slide").length
            );
          },
        },
      });
    },

    openModal() {
      this.openOrderCart();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 10);
    },

    ...mapMutations(["dopDeleteFromCart", "openOrderCart"]),
  },

  mounted() {
    this.TransformSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // position: absolute;
}

#transformer {
  @extend %padd;
  overflow: hidden;

  .transformer-title {
    background: #5d68a3;
    padding: 30px 0;

    .title-box {
      margin-bottom: 0;
    }

    h2,
    p {
      color: #fff;
    }
  }

  .transformer-main {
    background: rgba(225, 225, 225, 0.15);
    padding: 50px 0;

    @media (max-width: 992px) {
      padding: 30px 0;
    }

    .transformer-wrapper {
      display: flex;
      align-items: stretch;
      gap: 30px;

      @media (max-width: 1366px) {
        gap: 25px;
      }

      @media (max-width: 1115px) {
        gap: 20px;
      }

      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }

      @media (max-width: 767px) {
        flex-direction: column-reverse;
        max-width: 385px;
        margin: 0 auto;
      }
    }

    .transformer-content {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      flex-grow: 1;

      @media (max-width: 767px) {
        width: 100%;
        min-height: 700px;
      }

      .transformer-item {
        height: 100%;
      }
    }

    .transformer-tabs {
      margin-top: 100px;
      display: grid;
      grid-template-rows: repeat(6, 87px);
      gap: 50px;
      max-width: 23%;
      min-width: 220px;
      width: 100%;

      @media (max-width: 1440px) {
        gap: 40px;
      }

      @media (max-width: 1366px) {
        grid-template-rows: repeat(6, 74px);
        gap: 25px;
      }

      @media (max-width: 1115px) {
        grid-template-rows: repeat(6, 66px);
        gap: 20px;
      }

      @media (max-width: 992px) {
        max-width: none;
        min-width: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 66px);
        margin-top: 0;
      }

      @media (max-width: 576px) {
        gap: 10px 20px;
        grid-template-rows: repeat(3, 54px);
      }

      .tab-item {
        cursor: pointer;
        background-color: transparent;
        max-width: 331px;
        width: 100%;
        height: auto;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 3px solid #5d68a3;
        opacity: 1;
        color: #5d68a3;
        text-align: center;
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @include fluidFontSize(16, 22, 992, 1920);

        @media (max-width: 768px) {
          border: 2px solid #5d68a3;
        }

        @media (max-width: 576px) {
          font-size: 12px;
          line-height: normal;
          padding: 0 10px;
        }

        &--active {
          border: 1px solid #5d68a3;
          font-weight: 300;
        }
      }
    }
  }

  .transformer-offer {
    background: #5d68a3;
    padding: 50px 0;

    @media (max-width: 992px) {
      padding: 30px 0;
    }

    &__wrapper {
      overflow: hidden;
      display: flex;
      gap: 30px;
      align-items: center;
      transform: translateX(-70%);
      transition: all 0.5s;
      padding: 14px 0;

      @media (max-width: 992px) {
        padding: 0;
        gap: 0px;
        flex-direction: column;
        align-items: start;
        transform: translate(0);
      }

      &-active {
        transform: translate(0);
        @media (max-width: 992px) {
          gap: 30px;
        }
      }

      .cart-item {
        display: flex;
        gap: 20px;
        align-items: center;
        color: #fff;
        font-family: "Stolzl";
        font-style: normal;
        min-height: 70px;
        width: 100%;

        @media (max-width: 576px) {
          gap: 15px;
        }

        &__name {
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

        &__icon {
          img {
            width: 70px;
            @media (max-width: 1440px) {
              width: 50px;
            }
          }
        }

        &__price {
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

            @media (max-width: 576px) {
              width: 21px;
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
      }

      .order-box {
        max-width: calc(224px + 30px);
        width: 100%;
        p {
          color: #fff;
          font-family: "Stolzl";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 20px;

          @include fluidFontSize(18, 22, 992, 1920);

          @media (min-width: 993px) {
            text-align: center;
          }
        }
      }

      .cart-box {
        position: relative;

        width: 100%;

        @media (min-width: 993px) {
          border-right: 2px solid #fff;
          width: 70%;
          padding-right: 35px;
        }

        .cart-swiper {
          @media (min-width: 769px) {
            margin: 0 45px;
          }
          overflow: hidden;

          .swiper-wrapper {
            align-items: center;
          }
        }

        .cart-pagination {
          display: none;
          @media (max-width: 768px) {
            display: block;
            position: relative;
            margin-top: 10px;
            height: 2px;
            background: rgba(255, 255, 255, 0.4);

            .swiper-pagination-progressbar {
              &-fill {
                background: #fff;
              }
            }
          }
        }

        .cart-next,
        .cart-prev {
          position: absolute;
          top: 50%;
          z-index: 5;
          cursor: pointer;
          &.swiper-button-disabled {
            opacity: 0.6;
          }

          @media (max-width: 768px) {
            display: none;
          }
        }

        .cart-prev {
          left: 0;
        }

        .cart-next {
          right: 35px;
        }
      }
    }
  }
}
</style>