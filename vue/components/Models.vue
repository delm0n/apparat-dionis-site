<template>
  <section id="models">
    <div class="container">
      <div class="title-box">
        <h2>Аппарат, который подстроится под ваши задачи</h2>
        <p class="subtitle">Аппарат, который подстроится под ваши задачи</p>
      </div>

      <div class="models-swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in getMain"
            :key="index"
            class="swiper-slide models-item"
          >
            <my-image
              class="models-item__img"
              :alt="item.name + ' аппарат дионис'"
              :floder="'models'"
              :imgName="item.img"
              :media="769"
            />

            <div class="models-item__title">
              <h3>{{ item.nameModel }}</h3>
              <p v-html="item.subtitle"></p>
            </div>

            <ul class="models-item__list">
              <li><b>Объём</b> <span v-html="item.volume"></span></li>
              <li><b>Выход</b> <span v-html="item.exit"></span></li>
              <li><b>Параметры</b> <span v-html="item.param"></span></li>
            </ul>

            <div class="models-item__offer">
              <div class="offer-price">
                <p
                  class="new"
                  v-html="item.price.toLocaleString() + ' РУБ.'"
                ></p>
                <p
                  class="old"
                  v-html="item.oldPrice.toLocaleString() + ' РУБ.'"
                ></p>
              </div>
              <button @click="openModal(item.id)" class="button">
                Заказать аппарат
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Swiper, FreeMode } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  computed: mapGetters(["getMain"]),

  mounted() {
    let myModelsSwiper;
    const ModelsSwiper = () => {
      myModelsSwiper = new Swiper(".models-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        grabCursor: true,
        freeMode: true,
        modules: [FreeMode],
        breakpoints: {
          1400: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },

          993: {
            spaceBetween: 30,
            slidesPerView: "auto",
          },

          577: {
            spaceBetween: 20,
            slidesPerView: "auto",
          },

          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
        },
      });
    };

    ModelsSwiper();
  },

  methods: {
    ...mapMutations(["selectMain"]),

    openModal(id) {
      this.selectMain(id);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#models {
  overflow: hidden;
  @extend %padd;
  .models-swiper {
    .models-item {
      border-radius: 10px;
      border: 4px solid #dcdcdc;
      background: #fff;
      padding: 30px;
      max-width: 695px;
      width: 100%;

      display: grid;
      grid-template-columns: 33% 1fr;
      grid-template-rows: auto 1fr auto;
      gap: 30px;
      height: auto;

      @media (max-width: 1399px) {
        gap: 25px 10px;
        padding: 30px 25px;
        max-width: 635px;
      }

      @media (max-width: 1024px) {
        max-width: 595px;
      }

      @media (max-width: 768px) {
        grid-template-rows: auto 1fr auto auto;

        max-width: 320px;
        gap: 20px;
        padding: 30px 20px;
      }

      @media (max-width: 576px) {
        padding: 20px 15px;
      }

      &__title {
        grid-column: 2/3;
        grid-row: 1/2;
        font-family: "Stolzl";
        font-style: normal;

        @media (max-width: 768px) {
          grid-column: 1/3;
          grid-row: 2/3;
          text-align: center;
        }

        h3 {
          color: #323232;
          font-size: 32px;
          font-weight: 500;
          line-height: 121.875%;
          letter-spacing: 0.32px;
          margin-bottom: 10px;

          @include fluidFontSize(28, 32, 992, 1920);

          @media (max-width: 768px) {
            font-size: 27px;
            line-height: 34px;
            letter-spacing: 0.27px;
          }

          @media (max-width: 375px) {
            width: calc(100% + 10px);
            transform: translateX(-5px);
          }
        }

        p {
          color: var(--gray-2, #4f4f4f);
          font-size: 18px;
          font-weight: 300;
          line-height: 138.889%;

          @include fluidFontSize(16, 18, 992, 1920);

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }
        }
      }

      &__list {
        grid-column: 2/3;
        grid-row: 2/3;

        @media (max-width: 768px) {
          grid-column: 1/3;
          grid-row: 3/4;
        }

        li {
          align-items: flex-end;
          display: flex;
          justify-content: space-between;
          position: relative;

          color: var(--gray-2, #4f4f4f);
          font-family: "Stolzl";
          font-style: normal;
          font-size: 18px;
          line-height: 138.889%;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          b {
            font-weight: 400;
            padding-right: 6px;
            background: #fff;
            position: relative;
            z-index: 1;

            @media (max-width: 768px) {
              font-size: 14px;
              line-height: 25px;
              padding-right: 4px;
            }

            // @media (max-width: 576px) {
            //   max-width: 134px;
            // }
          }

          span {
            background: #fff;
            position: relative;
            z-index: 1;
            font-weight: 300;
            display: block;
            padding-left: 4px;

            @media (max-width: 768px) {
              font-size: 14px;
              line-height: 21px;
            }
          }

          &:before {
            border-bottom: 2px dotted #4f4f4fad;
            bottom: 6px;
            content: "";
            position: absolute;
            right: 0;
            width: 99%;
            z-index: 0;
          }
        }
      }

      &__img {
        grid-column: 1/2;
        grid-row: 1/4;

        @include aspect() {
          aspect-ratio: 207/436;

          @media (max-width: 768px) {
            aspect-ratio: 158/333;
            max-width: 158px;
          }
        }

        @media (max-width: 768px) {
          grid-column: 1/3;
          grid-row: 1/2;

          picture {
            justify-content: center;
          }
        }

        img {
          max-width: 100%;
        }
      }

      &__offer {
        grid-column: 2/3;
        grid-row: 3/4;

        @media (max-width: 768px) {
          grid-column: 1/3;
          grid-row: 4/5;
        }

        .offer-price {
          display: flex;
          gap: 15px;
          align-items: center;

          margin-bottom: 20px;

          color: var(--gray-2, #4f4f4f);
          font-family: "Stolzl";
          font-style: normal;
          line-height: normal;

          @media (max-width: 768px) {
            justify-content: center;
            flex-direction: column-reverse;
            gap: 5px;
          }

          .new {
            font-size: 29px;
            font-weight: 700;
            letter-spacing: 0.58px;

            @media (max-width: 768px) {
              font-size: 27px;
            }
          }

          .old {
            font-size: 22px;
            font-weight: 400;
            text-decoration: line-through;

            @media (max-width: 768px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
