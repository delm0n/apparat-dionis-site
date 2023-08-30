<template>
  <header class="header-main">
    <div class="container">
      <div class="header-main__wrapper">
        <div class="header-main__title">
          <h1>
            Модульный самогонный <br />
            аппарат <span> «Дионис» </span>
          </h1>
          <h2>Идеальный базовый аппарат для самогоноварения</h2>
        </div>
        <template v-if="featuresFlug">
          <div class="header-main__features">
            <header-features />
          </div>
        </template>
        <div class="header-main__form">
          <header-form />
        </div>
        <div class="header-main__img">
          <picture>
            <source
              srcset="/build/images/header/main.webp"
              media="(min-width: 769px)"
              type="image/webp"
            />
            <source
              srcset="/build/images/header/main.png"
              media="(min-width: 769px)"
            />

            <source
              srcset="/build/images/header/main@1x.webp"
              media="(min-width: 577px)"
              type="image/webp"
            />
            <source
              srcset="/build/images/header/main@1x.png"
              media="(min-width: 577px)"
            />

            <source
              srcset="/build/images/header/main@05x.webp"
              type="image/webp"
            />
            <img
              class="main"
              src="/build/images/header/main@05x.png"
              alt="самогонный аппарат дионис"
            />
          </picture>
          <div
            v-for="(item, index) in pluses"
            v-bind:key="index"
            :class="'component ' + item.class"
            @click="tippyModal(item.content)"
            ref="icons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <circle
                class="hover-circle"
                xmlns="http://www.w3.org/2000/svg"
                cx="16.1341"
                cy="16.1341"
                r="16.1341"
                fill="#5D68A3"
              />
              <circle
                cx="16.1341"
                cy="16.1341"
                r="15.1341"
                stroke="#323232"
                stroke-opacity="0.4"
                stroke-width="2"
              />
              <path
                d="M14.7868 18.6622V18.422C14.7915 17.5977 14.8645 16.9407 15.0058 16.4508C15.1518 15.961 15.3637 15.5654 15.6416 15.2639C15.9195 14.9625 16.2539 14.6893 16.6448 14.4444C16.9369 14.256 17.1983 14.0606 17.429 13.858C17.6598 13.6555 17.8435 13.4318 17.9801 13.1869C18.1167 12.9372 18.185 12.6594 18.185 12.3532C18.185 12.0282 18.1073 11.7433 17.9519 11.4984C17.7964 11.2534 17.5868 11.065 17.3231 10.9332C17.064 10.8013 16.7767 10.7354 16.4612 10.7354C16.155 10.7354 15.8654 10.8036 15.5922 10.9402C15.319 11.0721 15.0953 11.2699 14.921 11.5337C14.7467 11.7927 14.6525 12.1154 14.6384 12.5016H11.7559C11.7795 11.5596 12.0056 10.7825 12.4342 10.1702C12.8628 9.55316 13.4303 9.09394 14.1368 8.79251C14.8433 8.48636 15.6228 8.33329 16.4753 8.33329C17.4126 8.33329 18.2415 8.48872 18.9621 8.79957C19.6827 9.10572 20.2479 9.55081 20.6577 10.1348C21.0675 10.7189 21.2723 11.423 21.2723 12.2472C21.2723 12.7983 21.1805 13.2881 20.9968 13.7167C20.8178 14.1406 20.5659 14.5174 20.2409 14.8471C19.9159 15.1721 19.532 15.4665 19.0893 15.7302C18.7172 15.9516 18.4111 16.1824 18.1709 16.4226C17.9354 16.6628 17.7587 16.9407 17.641 17.2562C17.528 17.5718 17.4691 17.9604 17.4644 18.422V18.6622H14.7868ZM16.1856 23.1837C15.7146 23.1837 15.3119 23.0188 14.9775 22.6891C14.6478 22.3547 14.4853 21.9544 14.4901 21.4881C14.4853 21.0265 14.6478 20.6309 14.9775 20.3012C15.3119 19.9715 15.7146 19.8067 16.1856 19.8067C16.6331 19.8067 17.0264 19.9715 17.3655 20.3012C17.7046 20.6309 17.8765 21.0265 17.8812 21.4881C17.8765 21.799 17.7941 22.0839 17.6339 22.343C17.4785 22.5973 17.2736 22.8022 17.0193 22.9576C16.7649 23.1083 16.4871 23.1837 16.1856 23.1837Z"
                fill="#323232"
                fill-opacity="0.4"
              />
            </svg>
          </div>
          <div class="count-present">
            <div class="circle">
              <p><span>+3</span>подарка</p>
            </div>
            <p class="circle-decr">
              При заказе <br />
              с {{ getToday }} на {{ getTomorrow }}
              {{ getMonthForHeader }}
            </p>
          </div>
          <my-image
            class="present"
            :floder="'header'"
            :imgName="'smoke-present'"
            :lazyLoad="false"
            :media="577"
          />
        </div>
      </div>

      <template v-if="!featuresFlug">
        <header-features />
      </template>
    </div>

    <div id="component-modal" style="display: none">
      <div v-html="modalContent"></div>
    </div>
  </header>
</template>


<script>
import MyImage from "../UI/MyImage.vue";
import HeaderForm from "./HeaderForm.vue";
import tippy from "tippy.js";
import { mapGetters } from "vuex";
import HeaderFeatures from "./HeaderFeatures.vue";

export default {
  components: { MyImage, HeaderForm, HeaderFeatures },
  data() {
    return {
      pluses: [
        {
          class: "component-1",
          content: `<span>Усовершенствованный бак</span>Прочное дно (2 мм) с зиговкой.`,
        },

        {
          class: "component-2",
          content: `<span>Силиконовый клапан</span>100% срабатывание
            и надёжная защита бака
            от «схлопывания».`,
        },

        {
          class: "component-3",
          content: `<span>Профессиональный
            холодильник</span>5 трубок с перегородками ускоряют перегонку на 23%`,
        },

        {
          class: "component-4",
          content: `<span>Кламп на 2 дюйма</span>Можно «подцепить» практически любые аксессуары`,
        },
      ],
      featuresFlug: window.innerWidth < 1126,
      modalContent: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      for (let index = 0; index < this.pluses.length; index++) {
        tippy("." + this.pluses[index].class, {
          content: this.pluses[index].content,
          theme: "prompt",
          allowHTML: true,
          delay: 100,
          animation: "scale",
          arrow: true,
          placement: "top-start",
          // trigger: "click",
        });
      }
    });

    const windowbreakpoint = window.matchMedia("(min-width: 1126px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.featuresFlug = false;
      } else {
        this.featuresFlug = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: {
    tippyModal(content) {
      if (window.innerWidth <= 768) {
        this.modalContent = content;
        setTimeout(() => {
          //@ts-ignore
          Fancybox.show([
            {
              src: "#component-modal",
            },
          ]);
        }, 10);
      }
    },
  },

  computed: mapGetters(["getMonthForHeader", "getToday", "getTomorrow"]),
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

.header-main {
  overflow: hidden;
  padding: 150px 0 100px;

  @media (max-width: 768px) {
    padding: 100px 0 80px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: auto 576px;
    column-gap: 1%;

    @media (max-width: 1680px) {
      grid-template-columns: auto 435px;
    }

    @media (max-width: 1366px) {
      grid-template-columns: minmax(0, 350px) auto;
      column-gap: 20px;
    }
  }

  &__title {
    grid-column: 1/3;
    grid-row: 1/2;
    margin-bottom: 50px;

    @media (max-width: 576px) {
      margin-bottom: 25px;
    }

    h1 {
      color: #5d68a3;
      font-family: "Stolzl";
      font-size: 62px;
      font-style: normal;
      font-weight: 700;
      line-height: 69px;
      margin: 0 0 20px;

      @media (max-width: 1024px) {
        line-height: 61px;
        font-size: 52px;
        margin-bottom: 14px;
      }

      @media (max-width: 865px) {
        font-size: 34px;
        line-height: 115%;

        text-align: center;
        span {
          display: block;
          font-size: 53px;
          line-height: 57px;
        }
      }

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 10px;
        span {
          font-size: 42px;
          line-height: 49px;
        }
      }
    }

    h2 {
      color: #323232;
      font-family: "Stolzl";
      font-size: 25px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      @include fluidFontSize(23, 25, 1024, 1920);

      @media (max-width: 1024px) {
        font-size: 23px;
      }

      @media (max-width: 865px) {
        text-align: center;
        font-size: 19px;
      }

      @media (max-width: 576px) {
        font-size: 16px;
      }
    }
  }

  &__features {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-bottom: 50px;
    @media (max-width: 1125px) {
      grid-column: 1/3;
      grid-row: 4/5;
      margin: 50px 0 0;
    }
  }

  &__form {
    grid-column: 1/2;
    grid-row: 3/4;

    @media (max-width: 1366px) {
      grid-column: 1/3;
      max-width: 1000px;
      width: 100%;
    }
  }

  &__img {
    grid-column: 2/3;
    grid-row: 1/5;
    align-self: end;
    position: relative;

    @media (max-width: 1680px) {
      margin-top: 80px;
    }

    @media (max-width: 1366px) {
      margin-top: 0;
      grid-row: 2/3;
      align-self: center;
      max-width: 585px;
      width: 100%;
      margin-bottom: 50px;

      img.main {
        max-width: 500px;
        width: 100%;
      }
    }

    @media (max-width: 1125px) {
      grid-column: 1/3;
      margin: 0 auto 50px;
      @media (min-width: 865px) {
        transform: translateX(80px);
      }
    }

    @media (max-width: 768px) {
      max-width: 450px;
      img.main {
        max-width: 100%;
        width: auto;
      }
    }

    @media (max-width: 576px) {
      max-width: 280px;
      margin-bottom: 30px;
    }

    .count-present {
      position: absolute;
      right: -25px;
      top: 55px;

      @media (max-width: 1680px) {
        right: -75px;
        top: -70px;
      }

      @media (max-width: 1366px) {
        right: 0;
        top: 22px;
      }

      @media (max-width: 768px) and (min-width: 577px) {
        transform: scale(0.7);
      }

      @media (max-width: 576px) {
        right: -10px;
      }

      .circle {
        border-radius: 189.1px;
        background: #f55d5d;
        width: 124px;
        height: 124px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 4px;

        @media (max-width: 576px) {
          width: 60.488px;
          height: 60.488px;
        }

        p {
          text-align: center;
          color: #fff;
          font-family: "Stolzl";
          font-size: 16.9px;
          font-style: normal;
          font-weight: 400;
          line-height: 28.863px;
          letter-spacing: 0.169px;

          @media (max-width: 576px) {
            font-size: 8.244px;
            letter-spacing: 0.082px;
            line-height: 14.079px;
          }

          span {
            display: block;
            text-align: center;
            font-size: 42.75px;
            font-weight: 500;
            letter-spacing: 0.428px;

            @media (max-width: 576px) {
              font-size: 20.854px;
              letter-spacing: 0.209px;
            }
          }
        }
      }

      .circle-decr {
        color: #f55d5d;
        text-align: center;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.22px;

        @media (max-width: 576px) {
          font-size: 10.732px;
          margin-top: -2px;
          letter-spacing: 0.107px;
        }
      }
    }

    .present {
      position: absolute;
      bottom: 0;
      transform: translateX(-50%);
      left: 50%;

      @media (max-width: 1680px) {
        left: 64%;
      }

      @media (max-width: 1366px) {
        bottom: -20px;
        left: 44%;
      }

      @media (max-width: 768px) {
        bottom: -10px;
        left: 50%;
        @media (min-width: 577px) {
          img {
            max-width: 74%;
          }
        }
      }

      @media (max-width: 576px) {
        bottom: 0;
      }
    }
  }

  .component {
    position: absolute;

    &.component-1 {
      top: 535px;
      left: 81px;

      @media (max-width: 1366px) {
        top: 426px;
      }

      @media (max-width: 768px) {
        top: 382px;
        left: 65px;
      }

      @media (max-width: 576px) {
        top: 252px;
        left: 46px;
      }
    }

    &.component-2 {
      top: 382px;
      left: 81px;

      @media (max-width: 1366px) {
        top: 322px;
        left: 67px;
      }

      @media (max-width: 768px) {
        top: 275px;
        left: 50px;
      }

      @media (max-width: 576px) {
        top: 188px;
        left: 39px;
      }
    }

    &.component-3 {
      top: 293px;
      left: 42px;

      @media (max-width: 1366px) {
        top: 239px;
        left: 40px;
      }

      @media (max-width: 768px) {
        top: 212px;
        left: 30px;
      }

      @media (max-width: 576px) {
        top: 132px;
        left: 21px;
      }
    }

    &.component-4 {
      top: 293px;
      left: 175px;

      @media (max-width: 1366px) {
        top: 254px;
        left: 152px;
      }

      @media (max-width: 768px) {
        top: 212px;
        left: 125px;
      }

      @media (max-width: 576px) {
        top: 143px;
        left: 84px;
      }
    }

    svg {
      cursor: pointer;
      @media (max-width: 576px) {
        width: 16px;
        height: 16px;
      }

      * {
        transition: all 0.2s;
      }

      path {
        fill: rgb(50, 50, 50);
      }
      .hover-circle {
        opacity: 0;
      }

      &:hover {
        path {
          fill: #fff;
          fill-opacity: 1;
        }
        .hover-circle {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "tippy.js/animations/scale.css";
@import "tippy.js/dist/tippy.css";

.tippy-box[data-theme~="prompt"] {
  background: #5d68a3 !important;
  padding: 10px;
  min-width: 276px !important;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none !important;
  }

  &[data-placement^="top"] > .tippy-arrow {
    transform: translate(40px, 0px) !important;

    &:before {
      content: url("../images/header/arrow-tippy.svg");
      bottom: -30px;
      border: none;
    }
  }

  &[data-placement^="bottom"] > .tippy-arrow {
    transform: translate(38px, 0px) !important;

    &:before {
      border-bottom-color: #5d68a3 !important;
    }
  }
}

.tippy-content,
#component-modal {
  span {
    display: block;
    margin-bottom: 8px;
    color: #fff;
    font-family: "Stolzl";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (max-width: 768px) {
    }
  }

  color: #fff;
  font-family: "Stolzl";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
  }
}

#component-modal {
  background: #5d68a3 !important;
  padding: 20px;
  border-radius: 4px;
  max-width: 440px;
  width: 100%;
}
</style>