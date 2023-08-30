<template>
  <section id="compare">
    <div class="container">
      <div class="title-box">
        <h2>
          Конструкция <br />
          <span>без ошибок</span>
        </h2>
        <p class="subtitle">5 причин выбрать самогонный аппарат «Дионис»</p>
      </div>
      <div class="compare-wrapper">
        <div
          class="compare-row"
          v-for="(compare, index) in compares"
          :key="index"
        >
          <div class="compare-item">
            <div class="compare-item__box --analog">
              <div class="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M3.17016 16.2101L15.3345 2.19076"
                    stroke="white"
                    stroke-width="5"
                  />
                  <path
                    d="M14.8461 16.6056L3.65892 1.79477"
                    stroke="white"
                    stroke-width="5"
                  />
                </svg>
              </div>
              <p>Аналог</p>
            </div>
            <div class="compare-item__img">
              <my-image
                :alt="'test'"
                :floder="'compare'"
                :imgName="compare.analog.img"
                :media="769"
              />
            </div>
            <template v-if="!mobile">
              <p class="compare-item__title" v-html="compare.analog.title"></p>

              <div
                v-for="(item, idx) in compare.analog.decr"
                :key="idx"
                class="compare-item__decr li--analog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#FF0000" />
                </svg>
                <p v-html="item"></p>
              </div>
            </template>
          </div>
          <div class="compare-item">
            <div class="compare-item__box --dionis">
              <my-image
                class="img-container"
                :imgName="'dionis-icon'"
                :floder="'compare'"
                :alt="'test'"
                :mobile="false"
                :lazyLoad="false"
              />

              <p>Дионис</p>
            </div>
            <div class="compare-item__img">
              <my-image
                :alt="'test'"
                :floder="'compare'"
                :imgName="compare.dionis.img"
                :media="769"
              />
            </div>
            <template v-if="!mobile">
              <p class="compare-item__title" v-html="compare.dionis.title"></p>

              <div
                v-for="(item, idx) in compare.dionis.decr"
                :key="idx"
                class="compare-item__decr li--dionis"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#49BF00" />
                </svg>

                <p v-html="item"></p>
              </div>
            </template>
          </div>

          <div v-if="mobile" class="compare-item__mobile-title">
            <p v-html="compare.mobileTitle"></p>
            <svg
              @click="openModal(index)"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <circle cx="13" cy="12.5" r="12.5" fill="#5D68A3" />
              <path
                d="M11.9553 14.7388V14.5527C11.959 13.9141 12.0155 13.4051 12.125 13.0256C12.2381 12.6461 12.4023 12.3396 12.6176 12.106C12.8329 11.8725 13.092 11.6609 13.3949 11.4711C13.6211 11.3251 13.8236 11.1737 14.0024 11.0168C14.1812 10.8599 14.3236 10.6866 14.4294 10.4968C14.5352 10.3034 14.5881 10.0881 14.5881 9.85092C14.5881 9.59914 14.5279 9.37837 14.4075 9.18862C14.2871 8.99887 14.1247 8.85291 13.9203 8.75073C13.7196 8.64856 13.497 8.59747 13.2526 8.59747C13.0154 8.59747 12.791 8.65038 12.5793 8.75621C12.3677 8.85838 12.1943 9.01164 12.0593 9.21599C11.9243 9.41669 11.8513 9.66665 11.8404 9.96587H9.60716C9.6254 9.23606 9.80056 8.63396 10.1326 8.15959C10.4647 7.68156 10.9044 7.32578 11.4518 7.09224C11.9991 6.85505 12.603 6.73646 13.2635 6.73646C13.9897 6.73646 14.6319 6.85688 15.1902 7.09771C15.7485 7.3349 16.1864 7.67974 16.5039 8.13222C16.8213 8.5847 16.9801 9.13024 16.9801 9.76882C16.9801 10.1958 16.9089 10.5753 16.7666 10.9073C16.6279 11.2357 16.4327 11.5277 16.1809 11.7831C15.9291 12.0349 15.6317 12.2629 15.2887 12.4673C15.0005 12.6388 14.7633 12.8176 14.5772 13.0037C14.3947 13.1898 14.2579 13.4051 14.1667 13.6496C14.0791 13.8941 14.0335 14.1951 14.0298 14.5527V14.7388H11.9553ZM13.0391 18.2419C12.6742 18.2419 12.3622 18.1142 12.1031 17.8588C11.8477 17.5997 11.7218 17.2895 11.7254 16.9283C11.7218 16.5707 11.8477 16.2641 12.1031 16.0087C12.3622 15.7533 12.6742 15.6256 13.0391 15.6256C13.3858 15.6256 13.6904 15.7533 13.9532 16.0087C14.2159 16.2641 14.3491 16.5707 14.3528 16.9283C14.3491 17.1691 14.2852 17.3899 14.1612 17.5906C14.0408 17.7876 13.882 17.9463 13.685 18.0668C13.4879 18.1835 13.2726 18.2419 13.0391 18.2419Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div id="compare-modal" style="display: none">
      <div class="compare-row">
        <div class="compare-item">
          <div class="compare-item__box --analog">
            <div class="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M3.17016 16.2101L15.3345 2.19076"
                  stroke="white"
                  stroke-width="5"
                />
                <path
                  d="M14.8461 16.6056L3.65892 1.79477"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
            </div>
            <p>Аналог</p>
          </div>
          <div class="compare-item__img">
            <my-image
              :alt="'test'"
              :floder="'compare'"
              :imgName="compareModal.analog.img"
              :media="769"
            />
          </div>

          <p class="compare-item__title" v-html="compareModal.analog.title"></p>

          <div
            v-for="(item, idx) in compareModal.analog.decr"
            :key="idx"
            class="compare-item__decr li--analog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#FF0000" />
            </svg>
            <p v-html="item"></p>
          </div>
        </div>
        <div class="compare-item">
          <div class="compare-item__box --dionis">
            <my-image
              class="img-container"
              :imgName="'dionis-icon'"
              :floder="'compare'"
              :alt="'test'"
              :mobile="false"
              :lazyLoad="false"
            />

            <p>Дионис</p>
          </div>
          <div class="compare-item__img">
            <my-image
              :alt="'test'"
              :floder="'compare'"
              :imgName="compareModal.dionis.img"
              :media="769"
            />
          </div>

          <p class="compare-item__title" v-html="compareModal.dionis.title"></p>

          <div
            v-for="(item, idx) in compareModal.dionis.decr"
            :key="idx"
            class="compare-item__decr li--dionis"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#49BF00" />
            </svg>

            <p v-html="item"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  data() {
    return {
      mobile: window.innerWidth < 993,
      compareModal: {
        analog: {
          title: "Китайский “красноголовик”",
          decr: [
            "Срабатывают нестабильно, <span> через раз</span>",
            "<span>Не берёжет</span> бак от «схлопывания»",
          ],
          img: "analog-1",
        },
        dionis: {
          title: "Силиконовый клапан",
          decr: [
            "Срабатывает со <span>100% вероятностью</span>",
            "<span>Защищает</span> бак от «схлопывания»",
          ],
          img: "dionis-1",
        },

        mobileTitle: "Клапан сброса давления",
      },
      compares: [
        {
          analog: {
            title: "Китайский “красноголовик”",
            decr: [
              "Срабатывают нестабильно, <span> через раз</span>",
              "<span>Не берёжет</span> бак от «схлопывания»",
            ],
            img: "analog-1",
          },
          dionis: {
            title: "Силиконовый клапан",
            decr: [
              "Срабатывает со <span>100% вероятностью</span>",
              "<span>Защищает</span> бак от «схлопывания»",
            ],
            img: "dionis-1",
          },

          mobileTitle: "Клапан сброса давления",
        },

        {
          analog: {
            title: "Простой пленочный холодильник",
            decr: [
              "Расход воды — <span>580 л</span> за двойную перегонку",
              "<span>1</span> трубка",
              "КПД — <span>50–60%</span>",
              "Возможен <span>захлёб</span> колонны",
            ],
            img: "analog-2",
          },
          dionis: {
            title: "Профессиональный кожухотрубный холодильник",
            decr: [
              "Расход воды — <span>380 л</span> за двойную перегонку",
              "<span>5</span> трубок",
              "КПД — <span>85–90%</span>",
              "Захлёб колонны <span>исключён</span>",
            ],
            img: "dionis-2",
          },

          mobileTitle: "Холодильник",
        },

        {
          analog: {
            title: "Сухопарник",
            decr: [
              "<span>Устаревшая</span> неудобная конструкция",
              "<span>Малоэффективное</span> орошение флегмой",
            ],
            img: "analog-3",
          },
          dionis: {
            title: "Воздушный дефлегматор с тарелочками",
            decr: [
              "На 32% более <span>эффективное орошение</span> флегмой",
              "<span>4 чешуйчатые тарелочки</span> для ароматизации",
              "Возможность проводить <span>барботаж</span>",
              "Полностью разборная конструкция, которую <span>удобно мыть</span>",
            ],
            img: "dionis-3",
          },

          mobileTitle: "Воздушный дефлегматор",
        },

        {
          analog: {
            title: "Обычный холодильник на старых версиях аппаратов",
            decr: [
              "Риск закупоривания и как результат — <span>взрыва</span>",
              "<span>Низкая</span> степень очистки",
            ],
            img: "analog-4",
          },
          dionis: {
            title: "Трубка связи с атмосферой",
            decr: [
              "<span>Предотвращает появление воздушной пробки</span> и не даёт продукту пениться",
              "Очистка продукта проходит <span>эффективнее</span> за счёт противодействия смешиванию фракций",
            ],
            img: "dionis-4",
          },

          mobileTitle: "Трубка связи с атмосферой",
        },

        {
          analog: {
            title: "Обычный бак",
            decr: [
              "Работать с густыми брагами и варить пиво <span>нельзя</span>",
              "<span>Устаревшая</span> конструкция",
            ],
            img: "analog-5",
          },
          dionis: {
            title: "Зиговка на баке",
            decr: [
              "Есть возможность установки на бак сита для работы <span>с густыми брагами и пивоварения</span>",
            ],
            img: "dionis-5",
          },

          mobileTitle: "Зиговка на баке",
        },
      ],
    };
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 992px)");
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

  methods: {
    openModal(index) {
      // this.setModalContent(index);
      console.log(index);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#compare-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
.compare-row {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    column-gap: 20px;
  }
}

.compare-item {
  position: relative;
  width: calc((100% - 30px) / 2);

  @media (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  &__mobile-title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;

    p {
      color: #323232;
      font-family: "Stolzl";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  &__box {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    width: 230px;
    border-radius: 40px;

    @media (max-width: 1280px) {
      top: 25px;
      width: 180px;
    }

    @media (max-width: 992px) {
      width: 134px;
      top: 15px;
    }

    // @media (max-width: 576px) {
    //   top: 5px;
    //   width: 60px;
    //   padding: 2px 0;
    //   gap: 4px;
    //   border-radius: 10px;
    // }

    .svg-container {
      display: flex;
      align-items: center;
      justify-content: center;

      // @media (max-width: 576px) {
      //   width: 10px;
      // }

      svg {
        @media (max-width: 992px) {
          height: 60%;
        }

        // @media (max-width: 576px) {
        //   height: 50%;
        //   width: 10px;
        // }
      }
    }

    .svg-container,
    .img-container img {
      height: 58px;
      width: auto;

      @media (max-width: 1280px) {
        height: 39px;
      }

      @media (max-width: 992px) {
        height: 24px;
      }

      // @media (max-width: 576px) {
      //   height: 15px;
      // }
    }

    p {
      color: #fff;
      font-family: "Rubik";
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;

      @include fluidFontSize(24, 32, 992, 1920);

      @media (max-width: 992px) {
        font-size: 19px;
      }

      // @media (max-width: 576px) {
      //   font-size: 8.365px;
      //   line-height: 10.195px;
      // }
    }

    &.--analog {
      background: #f00;
    }

    &.--dionis {
      background: #49bf00;
    }
  }

  &__img {
    border-radius: 10px;

    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
    background: #fff;
    @include aspect() {
      aspect-ratio: 678/535;
    }

    overflow: hidden;
    .img-wrap {
      img {
        max-width: 100%;
      }
    }
  }

  &__title {
    color: #323232;
    font-family: "Stolzl";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;

    @include fluidFontSize(20, 22, 992, 1920);

    @media (max-width: 576px) {
      font-size: 15px;
    }
  }

  &__decr {
    color: #323232;
    font-family: "Stolzl";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;

      @media (max-width: 576px) {
        margin-bottom: 5px;
      }
    }

    @include fluidFontSize(18, 22, 992, 1920);

    @media (max-width: 576px) {
      font-size: 15px;
    }

    span {
      color: rgba(50, 50, 50, 0.7);
      font-weight: 400;
    }
  }
}

#compare {
  overflow: hidden;
  background: rgba(225, 225, 225, 0.15);
  @extend %padd;

  .title-box {
    br {
      display: none;
    }

    @media (max-width: 576px) {
      gap: 10px;
      br {
        display: block;
      }
    }
  }

  .compare-item__box {
    @media (max-width: 576px) {
      top: 5px;
      width: 60px;
      padding: 2px 0;
      gap: 4px;
      border-radius: 10px;
    }

    .svg-container {
      @media (max-width: 576px) {
        width: 10px;
      }

      svg {
        @media (max-width: 576px) {
          height: 50%;
          width: 10px;
        }
      }
    }

    .svg-container,
    .img-container img {
      @media (max-width: 576px) {
        height: 15px;
      }
    }

    p {
      color: #fff;
      font-family: "Rubik";
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;

      @include fluidFontSize(24, 32, 992, 1920);

      @media (max-width: 992px) {
        font-size: 19px;
      }

      @media (max-width: 576px) {
        font-size: 8.365px;
        line-height: 10.195px;
      }
    }

    &.--analog {
      background: #f00;
    }

    &.--dionis {
      background: #49bf00;
    }
  }
}

#compare-modal {
  border-radius: 10px;
  background: #fff;
  max-width: 386px;
  width: 100%;
  padding: 50px 20px 20px !important;

  .compare-row {
    flex-direction: column-reverse;
    gap: 30px;
    margin-bottom: 0;

    .compare-item {
      width: 100%;

      &__title {
        text-align: center;
      }
    }
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }
}
</style>
