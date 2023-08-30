<template>
  <div class="features-swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(feat, index) in features"
        :key="index"
        class="features-item swiper-slide"
      >
        <my-image
          :alt="feat.title"
          :imgName="feat.img"
          :floder="'header'"
          :mobile="false"
          :lazyLoad="false"
        />
        <div>
          <p class="features-item__title" v-html="feat.title"></p>
          <p class="features-item__text" v-html="feat.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, FreeMode } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {
      features: [
        {
          title: "Доставка <br> по всей России",
          text: "курьером или ТК от 1 дня",
          img: "feat-1",
        },
        {
          title: "Длительный <br> срок службы",
          text: "от 20 лет",
          img: "feat-1",
        },
        {
          title: "Без посредников <br> и переплат",
          text: "напрямую от завода-производителя",
          img: "feat-1",
        },
        {
          title: "10235  довольных <br> клиентов",
          text: "по всей России и странам&nbsp;СНГ",
          img: "feat-1",
        },
      ],
    };
  },

  mounted() {
    let myFeaturesSwiper;
    const FeaturesSwiper = () => {
      myFeaturesSwiper = new Swiper(".features-swiper", {
        slidesPerView: "auto",
        spaceBetween: 25,
        grabCursor: true,
        freeMode: true,
        modules: [FreeMode],
      });
    };

    const FeaturesSwiperbreakpoint = window.matchMedia("(min-width: 1126px)");
    const breakpointChecker = () => {
      if (!FeaturesSwiperbreakpoint.matches) {
        return FeaturesSwiper();
      } else {
        if (myFeaturesSwiper) {
          return myFeaturesSwiper.destroy(true, true);
        }
      }
    };

    FeaturesSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.features-swiper {
  @media (max-width: 1125px) {
    margin-top: 50px;
  }

  .swiper-wrapper {
    @media (min-width: 1126px) {
      display: grid;
      gap: 25px;
      grid-template-columns: 1fr 1fr;

      @media (max-width: 1366px) {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    }

    .img-wrap {
      flex-shrink: 0;
    }

    .features-item {
      display: flex;
      gap: 15px;

      @include aspect() {
        aspect-ratio: 1/1;
        width: 29px;
      }

      @media (max-width: 1125px) {
        border-bottom: 2px solid #b9cd2a;
        padding: 10px;
        max-width: 300px;
        flex-direction: column;
        gap: 5px;
        height: auto;
      }

      @media (max-width: 425px) {
        max-width: 250px;
      }

      &__title {
        color: rgba(50, 50, 50, 0.8);
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 131.818% */
        letter-spacing: 0.22px;
        margin-bottom: 5px;

        @media (min-width: 1126px) {
          br {
            display: none;
          }
        }

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
          letter-spacing: 0.16px;
        }
      }

      &__text {
        color: #323232;
        font-family: "Stolzl";
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 25px; /* 138.889% */
        letter-spacing: 0.18px;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
          letter-spacing: 0.16px;
        }
      }
    }
  }
}
</style>

