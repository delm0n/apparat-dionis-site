<template>
  <section id="made">
    <div class="container">
      <div class="title-box">
        <h2>Закажите напрямую от производителя</h2>
      </div>

      <div class="made-swiper__container">
        <div class="made-swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in slides"
              :key="index"
              class="swiper-slide made-item"
            >
              <my-image
                :alt="'Helicon производитель аппарат дионис'"
                :floder="'made'"
                :imgName="item.img"
                :media="769"
                :lazyLoad="false"
              />
            </div>
          </div>

          <div class="made-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
            >
              <circle
                cx="27"
                cy="27"
                r="27"
                transform="matrix(-1 0 0 1 54 0)"
                fill="#323232"
              />
              <path
                d="M33.0933 28.027C33.6605 27.4232 33.6308 26.4739 33.027 25.9067L23.1876 16.6636C22.5838 16.0964 21.6345 16.1261 21.0673 16.7299C20.5001 17.3337 20.5297 18.2829 21.1335 18.8502L29.8797 27.0663L21.6636 35.8124C21.0964 36.4162 21.1261 37.3655 21.7299 37.9327C22.3337 38.4999 23.2829 38.4703 23.8502 37.8665L33.0933 28.027ZM31.0469 28.5305L32.0469 28.4993L31.9531 25.5007L30.9531 25.532L31.0469 28.5305Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="made-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="54"
              viewBox="0 0 56 54"
              fill="none"
            >
              <ellipse cx="28" cy="27" rx="28" ry="27" fill="#323232" />
              <path
                d="M21.72 28.0282C21.1534 27.425 21.1842 26.4758 21.7887 25.9079L31.6395 16.6545C32.244 16.0867 33.1933 16.1153 33.7599 16.7184C34.3264 17.3216 34.2957 18.2708 33.6912 18.8386L24.9349 27.0639L33.1415 35.8003C33.708 36.4034 33.6773 37.3527 33.0728 37.9205C32.4683 38.4883 31.519 38.4597 30.9524 37.8566L21.72 28.0282ZM23.803 28.5305L22.7659 28.4992L22.8631 25.5008L23.9001 25.532L23.803 28.5305Z"
                fill="white"
              />
            </svg>
          </div>

          <div class="made-pagination"></div>
        </div>
      </div>

      <ul class="made__list">
        <li>
          <h3>Гарантия 1 год</h3>
          <p class="made__list-text">
            Мы предлагаем расширенную гарантию, потому&nbsp;что уверены в
            качестве своей&nbsp;продукции на&nbsp;все&nbsp;100%.
          </p>
        </li>
        <li>
          <h3>Отгрузка в день заказа</h3>
          <p class="made__list-text">
            Вы получите самогонный аппарат в&nbsp;кратчайшие сроки<br />
            (не&nbsp;более&nbsp;7&nbsp;дней).
          </p>
        </li>
        <li>
          <h3>Экономия до 35 %</h3>
          <p class="made__list-text">
            Вы не переплачиваете посредникам и&nbsp;приобретаете товары
            по&nbsp;актуальным&nbsp;ценам.
          </p>
        </li>
      </ul>

      <h4 class="made__name">Производитель ГК “Геликон&nbsp;Пром”</h4>
      <p class="made__comment">
        С 2012 года мы производим качественные товары, используя экологичные
        технологии производства. Только лучшее — всё оборудование и материалы
        проходят трёхэтапную проверку. В поиске новых идей, мы постоянно
        обновляем конструкции производимых&nbsp;товаров.
      </p>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      slides: [
        {
          img: "made-1",
        },

        {
          img: "made-2",
        },

        {
          img: "made-3",
        },

        {
          img: "made-4",
        },

        {
          img: "made-5",
        },

        {
          img: "made-6",
        },

        {
          img: "made-7",
        },

        {
          img: "made-8",
        },
      ],
    };
  },

  mounted() {
    let myMadeSwiper;
    const MadeSwiper = () => {
      myMadeSwiper = new Swiper(".made-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        modules: [Pagination, Navigation],
        navigation: {
          nextEl: ".made-next",
          prevEl: ".made-prev",
        },
        pagination: {
          el: ".made-pagination",
          type: "progressbar",
        },
        breakpoints: {
          993: {
            spaceBetween: 30,
            slidesPerView: 2,
          },

          768: {
            spaceBetween: 30,
            slidesPerView: 1,
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });
    };

    MadeSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#made {
  background: rgba(225, 225, 225, 0.15);
  @extend %padd;
  overflow: hidden;

  .made-swiper {
    position: relative;

    &__container {
      width: 100%;

      @media (max-width: 992px) {
        max-width: 600px;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        max-width: 520px;
      }
    }

    .swiper-wrapper {
      align-items: stretch;
      display: flex;
    }

    .swiper-slide {
      img {
        max-width: 100%;
      }

      @media (max-width: 992px) {
        img {
          transition: opacity 0.3s;
        }

        &.swiper-slide-active {
          img {
            opacity: 1;
          }
        }

        &:not(.swiper-slide-active) {
          img {
            opacity: 0;
          }
        }
      }

      @media (min-width: 993px) {
        align-items: center;
        display: flex;
        height: auto;

        picture {
          justify-content: center;
          img {
            transform: scale(1);
            transition: transform 0.3s;
          }
        }
        &.swiper-slide-active {
          z-index: 5;
        }

        &:not(.swiper-slide-active) {
          img {
            transform: scale(0.5) translateX(0);
          }
        }

        &.swiper-slide-prev {
          picture {
            justify-content: flex-end;
            img {
              transform: scale(0.5) translateX(50%);
            }
          }
        }
        &.swiper-slide-next {
          picture {
            justify-content: flex-start;
            img {
              transform: scale(0.5) translateX(-50%);
            }
          }
        }
      }
    }

    .made-pagination {
      @media (min-width: 993px) {
        display: none;
      }
      top: auto;
      bottom: -20px;
      height: 4px;

      @media (max-width: 576px) {
        height: 2px;
      }

      .swiper-pagination-progressbar-fill {
        background: #323232;
      }
    }

    .swiper-button-disabled {
      opacity: 0.7;
    }

    .made-next,
    .made-prev {
      transition: all 0.4s;
      position: absolute;
      top: 50%;
      z-index: 2;
      transform: translateY(-50%);
      cursor: pointer;

      @media (max-width: 576px) {
        display: none;
      }
    }

    .made-prev {
      left: -35px;
    }

    .made-next {
      right: -35px;
    }
  }

  .made {
    &__list {
      display: flex;
      align-items: stretch;
      gap: 30px;
      margin-top: 50px;

      @media (max-width: 1024px) {
        gap: 20px;
      }

      @media (max-width: 992px) {
        flex-direction: column;
        margin-top: 70px;
      }

      @media (max-width: 576px) {
        margin-top: 50px;
      }

      li {
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        border: 3px solid #e9e9e9;
      }

      h3 {
        color: #5d68a3;
        text-align: center;
        font-family: "Stolzl", sans-serif;
        font-size: 22px;
        font-weight: 500;
        line-height: 131.818%;
        letter-spacing: 0.22px;

        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 575px) {
          font-size: 18px;
          line-height: 25px;
          letter-spacing: 0.18px;
        }
      }

      &-text {
        margin-top: 10px;
        text-align: center;
        font-family: "Stolzl", sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 138.889%;
        letter-spacing: 0.18px;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 575px) {
          margin-top: 5px;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: 0.15px;
        }
      }
    }

    &__name {
      margin-top: 30px;
      text-align: center;
      font-family: "Stolzl", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0.18px;
      color: rgba(50, 50, 50, 0.7);
    }

    &__comment {
      margin-top: 10px;
      color: rgba(50, 50, 50, 0.5);
      text-align: center;
      font-family: "Stolzl", sans-serif;
      font-size: 18px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0.18px;

      @media (max-width: 576px) {
        margin-top: 5px;
      }
    }
  }
}
</style>
