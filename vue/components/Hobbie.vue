<template>
  <section id="hobbie">
    <div
      :class="['hobbie-box ', getWebp == 'webp' ? 'hobbie-webp' : 'hobbie-png']"
    >
      <div class="container">
        <div class="title-box">
          <h2>
            <span>Выведите хобби на новый уровень </span>
          </h2>
        </div>
        <div class="hobbie-swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(hobbie, index) in hobbies"
              :key="index"
              class="hobbie-item swiper-slide"
            >
              <div class="hobbie-item__img">
                <my-image
                  :alt="hobbie.alt"
                  :imgName="hobbie.img"
                  :floder="'hobbie'"
                  :media="577"
                />
              </div>

              <div class="hobbie-item__content">
                <p class="hobbie-item__title" v-html="hobbie.title"></p>
                <p class="hobbie-item__text" v-html="hobbie.text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, FreeMode } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      hobbies: [
        {
          img: "hob-1",
          alt: "качество аппарата дионис",
          title: "Получайте качественный продукт за короткое время",
          text: `Аппарат позволяет получить
           <span> от&nbsp;3&nbsp;литров </span> чистого самогона, крепостью <span>до&nbsp;50°</span> с первой перегонки всего <span>за&nbsp;1&nbsp;час</span>`,
        },

        {
          img: "hob-2",
          alt: "сборка самогонного аппарата",
          title: "Не&nbsp;останавливайтесь на&nbsp;достигнутом",
          text: `Соберите профессиональный аппарат, благодаря кламповому соединению и получайте <span>чистый спирт&nbsp;до&nbsp;98°</span>`,
        },

        {
          img: "hob-3",
          alt: "напитки самогонный аппарат дионис",
          title: "Экспериментируйте&nbsp;и открывайте&nbsp;новое",
          text: `Получайте <span>более&nbsp;100 крепких напитков</span> прямо у себя дома, а также используйте куб для <span>вина, пива или сидра<span>`,
        },
      ],
    };
  },
  computed: mapGetters(["getWebp"]),

  mounted() {
    let myHobbieSwiper;
    const HobbieSwiper = () => {
      myHobbieSwiper = new Swiper(".hobbie-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        freeMode: true,
        modules: [FreeMode],
        breakpoints: {
          1400: {
            slidesPerView: 3,
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

    HobbieSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
@mixin main-bg($url) {
  background: url($url) no-repeat;
  background-position: top 0 right 0;
  background-size: cover;
}

#hobbie {
  overflow: hidden;
  @extend %padd;

  .hobbie-box {
    padding: 100px 0;

    @media (max-width: 992px) {
      padding: 50px 0;
    }

    @media (max-width: 768px) {
      padding: 30px 0;
    }

    &.hobbie-webp {
      @include main-bg("../images/hobbie/bg.webp");
    }

    &.hobbie-png {
      @include main-bg("../images/hobbie/bg.png");
    }
  }

  .hobbie-item {
    max-width: 453px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: flex;
    gap: 0;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 768px) {
      max-width: 353px;
    }

    &__img {
      background: #f2f2f2;
      img {
        max-width: 100%;
      }

      @include aspect() {
        aspect-ratio: 1/1;
      }
    }

    &__content {
      padding: 30px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      flex-grow: 1;

      @media (max-width: 768px) {
        padding: 20px;
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

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    &__text {
      color: #323232;
      font-family: "Stolzl";
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 29px;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }

      span {
        color: rgba(50, 50, 50, 0.7);
        font-weight: 400;
      }
    }
  }
}
</style>