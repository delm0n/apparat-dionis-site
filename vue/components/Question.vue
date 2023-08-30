<template>
  <section id="question">
    <div class="container">
      <div class="question__wrapper">
        <div class="question-title">
          <h2>У вас остались вопросы?</h2>
          <p class="subtitle">
            Мы с радостью поможем на&nbsp;них&nbsp;ответить
          </p>
        </div>
        <div class="question-call">
          <my-image
            :alt="''"
            :floder="'question'"
            :imgName="'helicon-logo'"
            :mobile="false"
          />
          <div>
            <p class="question-call__phone">{{ getPhone }}</p>
            <p class="question-call__button" @click="openModalCall()">
              Заказать звонок
            </p>
          </div>
        </div>
        <div class="question-images">
          <div class="question-images__item">
            <my-image
              :alt="''"
              :floder="'question'"
              :imgName="'fire-line'"
              :mobile="false"
            />
            <div class="open-container">
              <p @click="openModal()">
                Задать вопрос <br />
                на горячую линию
              </p>
            </div>
          </div>

          <div class="question-images__item">
            <my-image
              :alt="''"
              :floder="'question'"
              :imgName="'construct'"
              :mobile="false"
            />
            <div class="open-container">
              <p @click="openModal()">
                Задать вопрос <br />
                конструкторскому отделу
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage },
  computed: mapGetters(["getPhone"]),
  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-que",
          },
        ]);
      }, 10);
    },

    openModalCall() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#question {
  @extend %padd;
  background: rgba(225, 225, 225, 0.15);

  .question-title {
    align-self: center;
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
    h2 {
      color: #323232;
      font-family: "Stolzl";
      font-size: 52px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-bottom: 20px;

      @include fluidFontSize(40, 52, 992, 1920);

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 34px;
        margin-bottom: 10px;
      }
    }

    .subtitle {
      color: #323232;
      font-family: "Stolzl";
      font-size: 25px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      @include fluidFontSize(20, 25, 992, 1920);

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }
    }
  }

  .question__wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    width: 100%;
    gap: 50px 35px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .question-call {
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    gap: 40px;
    text-align: left;

    @media (min-width: 993px) {
      max-width: 560px;
      margin-left: auto;
    }

    @media (max-width: 1125px) {
      padding: 20px;
    }

    @media (max-width: 992px) {
      grid-column: 1/-1;
      grid-row: 3/4;
      justify-self: center;
      padding: 30px;
      margin-top: 20px;
      width: 100%;
      max-width: 100%;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    &__phone {
      color: #292929;
      text-align: center;
      font-family: "Roboto";
      font-size: 32px;
      font-style: normal;
      font-weight: 900;
      line-height: 39px;
      white-space: nowrap;

      @include fluidFontSize(24, 32, 992, 1920);

      @media (min-width: 993px) {
        margin-bottom: 10px;
      }

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 29px;
      }
    }

    &__button {
      color: #292929;
      text-align: center;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;

      @include fluidFontSize(16, 18, 992, 1920);

      @media (max-width: 768px) {
        font-size: 15px;
        letter-spacing: 0.15px;
      }
    }
  }

  .question-images {
    display: flex;
    gap: 30px;
    grid-column: 1/-1;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__item {
      align-items: stretch;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: calc(50% - 15px);

      @media (max-width: 768px) {
        width: 100%;
      }

      img {
        max-width: 100%;
      }

      .open-container {
        background: #b9cd2a;
        padding: 30px;

        @media (max-width: 1280px) {
          padding: 20px 15px;
        }

        @media (max-width: 576px) {
          padding: 10px;
        }

        p {
          cursor: pointer;
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          text-decoration-line: underline;

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }

          br {
            display: none;
            @media (max-width: 1280px) {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>