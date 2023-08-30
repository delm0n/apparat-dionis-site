<template>
  <section id="features">
    <div class="container">
      <div class="features-wrapper">
        <div
          v-for="(feat, index) in features"
          :key="index"
          class="features-item"
        >
          <my-image
            :floder="'features'"
            :imgName="feat.img"
            :mobile="false"
            :lazyLoad="false"
          />
          <p class="features-item__title" v-html="feat.title"></p>
          <p class="features-item__text" v-html="feat.text"></p>
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
      features: [
        {
          title: "Лучшие материалы",
          text: `Медицинская нержавеющая сталь,
            соответствующая ГОСТ`,
          img: "feat-1",
        },

        {
          title: "3 этапный контроль&nbsp;ОТК",
          text: `Проверка на производстве
            + на складе + при отправке
            = 100% защита от брака`,
          img: "feat-2",
        },

        {
          title: "Оплата при получении",
          text: `Оперативная доставка
            и возможность проверить
            товар перед покупкой`,
          img: "feat-3",
        },

        {
          title: "Рассрочка на 4 месяца",
          text: `Мы подберем для вас
            самые выгодные условия
            без визита в банк`,
          img: "feat-4",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#features {
  overflow: hidden;
  @extend %pbt;

  .features-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 28px;

    @media (max-width: 1440px) {
      gap: 20px;
    }

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  .features-item {
    border-radius: 10px;
    border: 3px solid #e9e9e9;
    padding: 20px;

    .img-wrap {
      margin: 0 auto 15px;
      picture {
        justify-content: center;
      }
    }

    &__title {
      color: #323232;
      text-align: center;
      font-family: "Rubik";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0.22px;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.16px;
      }
    }

    &__text {
      color: #323232;
      text-align: center;
      font-family: "Rubik";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0.18px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.14px;
      }
    }
  }
}
</style>