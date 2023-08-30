<template>
  <section id="faq">
    <div class="container">
      <div class="title-box">
        <h2>FAQ — ответы на самые популярные вопросы</h2>
      </div>
      <div class="faq-wrapper">
        <div v-for="(item, index) in questions" :key="index" class="faq-item">
          <div @click="showHide(index)" class="faq-item__title">
            <p v-html="item.title"></p>
            <button
              :style="[
                item.open ? 'opacity: 0.5' : 'opacity: 1',
                ' transition: opacity 0.3s',
              ]"
            >
              <span> {{ item.open ? "Свернуть" : "Раскрыть" }} </span>
              <svg
                :style="
                  item.open
                    ? 'transform: rotate(180deg)'
                    : 'transform: rotate(0deg)'
                "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
              >
                <path
                  id="Arrow 19"
                  d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
                  fill="#5D68A3"
                />
              </svg>
            </button>
          </div>
          <transition
            name="collapse"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
          >
            <div v-show="item.open" class="faq-item__content">
              <div class="text-box">
                <p v-html="item.content"></p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  data() {
    return {
      questions: [
        {
          title: "Подойдет ли этот аппарат для новичков?",
          content: `«Дионис» универсален. Он идеально подойдёт как новичку, так и профессионалу, благодаря  клампу на 2 дюйма. 
            Все тонкости использования прописаны в инструкции. А если вы почувствуете, что хотите увеличить производительность 
            аппарата и добавить в конструкцию больше дополнительных приспособлений, сделать это будет не проблемой.`,
          open: false,
        },

        {
          title: "Сколько аппарат прослужит мне?",
          content: `При бережном использовании в соответствии с инструкцией, срок службы «Диониса» — 20 лет и более.`,
          open: false,
        },

        {
          title: "С какими брагами можно работать на аппарате?",
          content: `«Дионис» оборудован зиговкой и позволяет работать со всеми видами браг, даже самыми густыми. 
            Это значит, что аппарат можно использовать в том числе для варки домашнего пива!`,
          open: false,
        },
      ],
    };
  },

  methods: {
    showHide(i) {
      this.questions.forEach((element, index) => {
        index == i
          ? (element.open = element.open == true ? false : true)
          : (element.open = false);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %padd;
  overflow: hidden;
  .faq-item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &__title {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      display: flex;
      justify-content: space-between;
      gap: 40px;
      align-items: center;
      padding: 12px 30px;
      position: relative;
      z-index: 2;

      @media (max-width: 576px) {
        padding: 10px 20px;
      }

      p {
        color: #5d68a3;
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }

      button {
        padding: 10px;
        background: #fff;
        border: none;
        cursor: pointer;

        @media (min-width: 769px) {
          gap: 15px;
          border-radius: 10px;
          border: 1px solid #5d68a3;
          display: flex;
          padding: 10px 15px;
          align-items: center;
        }

        span {
          color: #5d68a3;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          width: 86px;

          @media (max-width: 768px) {
            position: absolute;
            visibility: hidden;
          }
        }

        svg {
          transition: 0.4s all;
        }
      }
    }

    &__content {
      border-radius: 0px 0px 10px 10px;
      background: #f6f6f6;
      transition: all 0.4s ease;
      max-width: 80%;
      margin: 0 auto;

      @media (max-width: 992px) {
        max-width: 95%;
      }

      .text-box {
        padding: 50px;

        @media (max-width: 992px) {
          padding: 30px;
        }

        @media (max-width: 576px) {
          padding: 20px 10px;
        }
      }

      p {
        color: #323232;
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
