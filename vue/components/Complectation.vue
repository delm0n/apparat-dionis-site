<template>
  <section id="complectation">
    <div class="container">
      <div class="complectation-box">
        <div class="title-box">
          <h2>Расширенная комплектация</h2>
          <p class="subtitle">
            Аппарат готов к работе сразу после получения - докупать ничего не
            нужно
          </p>
        </div>

        <div class="complectation-wrapper">
          <div class="complectation-wrapper__items">
            <div
              v-for="(item, index) in items.filter((el) => !el.togglerShow)"
              :key="index"
              class="complectation-item"
            >
              <my-image
                :alt="item.name"
                :floder="'comp'"
                :imgName="item.img"
                :mobile="false"
              />
              <p v-html="item.name"></p>
            </div>

            <div
              v-show="active"
              v-for="(item, index) in items.filter((el) => el.togglerShow)"
              :key="index"
              class="complectation-item"
            >
              <my-image
                :alt="item.name"
                :floder="'comp'"
                :imgName="item.img"
                :mobile="false"
              />
              <p v-html="item.name"></p>
            </div>
          </div>
          <div class="complectation-wrapper__present">
            <h3>
              В подарок при заказе <br />
              с {{ getToday }} на {{ getTomorrow }} {{ getMonthForHeader }}
            </h3>

            <div class="present-items">
              <div
                v-for="(item, index) in presents"
                :key="index"
                class="complectation-item"
              >
                <my-image
                  :alt="item.name"
                  :floder="'comp'"
                  :imgName="item.img"
                  :mobile="false"
                />

                <p v-html="item.name"></p>
              </div>
            </div>
          </div>
        </div>

        <complectation-form
          class="complectation-form"
          @action-click="visible"
        />
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";
import ComplectationForm from "./ComplectationForm.vue";

export default {
  components: { MyImage, ComplectationForm },
  computed: mapGetters(["getMonthForHeader", "getToday", "getTomorrow"]),
  data() {
    return {
      active: false,
      idState: null,
      items: [
        {
          name: "Перегонный куб",
          alt: "Перегонный куб",
          img: "comp-1",
          togglerShow: false,
        },

        {
          name: "Царга с&nbsp;холодильником",
          alt: "Царга с холодильником",
          img: "comp-2",
          togglerShow: false,
        },

        {
          name: "Воздушный дефлегматор",
          alt: "Воздушный дефлегматор",
          img: "comp-3",
          togglerShow: false,
        },

        {
          name: "Чешуйчатые тарелочки",
          alt: "Чешуйчатые тарелочки",
          img: "comp-4",
          togglerShow: false,
        },

        {
          name: "Металлические ручки",
          alt: "Металлические ручки",
          img: "comp-5",
          togglerShow: false,
        },

        {
          name: "2 электронных термометра",
          alt: "2 электронных термометра",
          img: "comp-6",
          togglerShow: false,
        },

        {
          name: "Фиксирующие <br>  гайки-барашки",
          alt: "Фиксирующие гайки-барашки",
          img: "comp-7",
          togglerShow: false,
        },

        {
          name: "Кламп 2&nbsp;дюйма",
          alt: "Кламп 2 дюйма",
          img: "comp-8",
          togglerShow: false,
        },

        {
          name: "Кран для слива <br> барды",
          alt: "Кран для слива барды",
          img: "comp-9",
          togglerShow: true,
        },
      ],

      presents: [
        {
          name: "РПН 20х20&nbsp;см",
          alt: "РПН 20х20 см",
          img: "comp-10",
        },

        {
          name: "Спиртометр бытовой",
          alt: "Спиртометр бытовой",
          img: "comp-11",
        },

        {
          name: "Купон на&nbsp;1000&nbsp;руб.",
          alt: "Купон на 1000 руб.",
          img: "comp-12",
        },
      ],
    };
  },

  methods: {
    visible(id) {
      if (this.idState != id) {
        this.active = !this.active;
        this.idState = id;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#complectation {
  @extend %padd;

  .complectation-box {
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 100px 20px 0;

    @media (max-width: 1200px) {
      padding-top: 60px;
    }

    @media (max-width: 576px) {
      padding: 30px 10px 0;
    }
  }

  .complectation-form {
    background: #5d68a3;
    margin-top: 50px;
    width: calc(100% + 40px);
    transform: translateX(-20px);

    @media (max-width: 576px) {
      margin-top: 20px;
    }
  }

  .complectation-wrapper {
    display: flex;
    gap: 30px;
    max-width: 1220px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      flex-direction: column;
      max-width: 720px;
    }

    .complectation-item {
      @include aspect() {
        aspect-ratio: 1/1;
        width: auto;
      }

      picture {
        justify-content: center;

        img {
          margin: 0 auto 15px;
          width: 100%;
        }
      }

      p {
        color: #323232;
        text-align: center;
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 131.818%;
        letter-spacing: 0.22px;

        @include fluidFontSize(20, 22, 992, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.14px;
        }
      }
    }

    &__items {
      justify-content: center;
      display: flex;
      gap: 30px;
      flex-wrap: wrap;

      @media (min-width: 1201px) {
        min-width: 60%;
        width: 100%;
        max-width: 80%;
      }

      @media (max-width: 576px) {
        gap: 20px;
      }

      .complectation-item {
        width: calc((100% - 30px * 2) / 3);

        @media (max-width: 576px) {
          width: calc((100% - 30px * 2) / 2);
        }

        @media (max-width: 576px) {
          width: calc((100% - 20px) / 2);
        }
      }
    }

    &__present {
      border-radius: 10px;
      background: #f55d5d;
      max-width: 493px;
      width: 100%;
      flex-shrink: 1;
      padding: 20px;

      @media (max-width: 1200px) {
        max-width: 100%;
        border-radius: 0;
      }

      @media (max-width: 576px) {
        padding: 20px 10px;
      }

      .complectation-item {
        max-width: 212px;
        margin: 0 auto;

        @media (max-width: 1200px) {
          width: calc((100% - 30px * 2) / 3);
        }

        @media (max-width: 576px) {
          width: calc((100% - 30px * 2) / 2);
        }
      }

      .present-items {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 1200px) {
          flex-direction: row;
          flex-wrap: wrap;
        }

        p {
          color: #fff;
        }
      }

      h3 {
        color: #fff;
        text-align: center;
        font-family: "Stolzl";
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%;
        letter-spacing: 0.25px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
