<template>
  <section id="review">
    <div class="container">
      <div class="title-box">
        <h2>Отзывы пользователей аппарата «Дионис»</h2>
      </div>

      <div class="review-container">
        <div class="slider-container">
          <div class="review-slider">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in reviews"
                :key="index"
                class="swiper-slide review-item"
              >
                <div class="review-item__img">
                  <my-image
                    :alt="''"
                    :floder="'review'"
                    :imgName="item.img"
                    :media="769"
                  />
                </div>
                <div class="review-item__user">
                  <div class="user-img">
                    <my-image
                      :alt="''"
                      :floder="'review'"
                      :imgName="item.icon"
                      :mobile="false"
                    />
                  </div>

                  <div class="user-info">
                    <p class="user-info__name" v-html="item.title"></p>
                    <p class="user-info__job" v-html="item.job"></p>
                  </div>
                </div>
                <div class="review-item__text">
                  <p
                    v-for="(text, index) in item.text"
                    :key="index"
                    v-html="text"
                  ></p>
                  <template v-if="item.showMore">
                    <p>
                      <span v-html="item.showMore.visible"></span>
                      <span v-show="!item.showMore.show">...</span>
                      <transition
                        name="collapse"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:before-leave="beforeLeave"
                        v-on:leave="leave"
                      >
                        <span
                          style="transition: all 0.3s"
                          v-show="item.showMore.show"
                          v-html="item.showMore.hide"
                        ></span>
                      </transition>
                    </p>
                    <div
                      class="button-show"
                      @click="item.showMore.show = !item.showMore.show"
                    >
                      {{ !item.showMore.show ? "Читать полностью" : "Скрыть" }}
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="review-next">
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
            <div class="review-prev">
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

            <div class="review-pagination"></div>
          </div>
        </div>
      </div>
      <button @click="openModal()" class="button">Оставить отзыв</button>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  components: { MyImage },
  data() {
    return {
      reviews: [
        {
          img: "review-1",
          icon: "review-icon-1",
          title: "Кирилл Фокин, г.&nbsp;Стерлитамак",
          text: [
            `— добрый день . да, спасибо, на почте все получил собрал уже и все подготовил .оказалось даже проще, 
            чем я думал. хотел только поподробнее узнать про тарелочки, не совсем разобрался. Это под проволоку или только фрукты?`,
          ],
          job: "Реставратор",
        },

        {
          img: "review-2",
          icon: "review-icon-2",
          title: "Алексей Николаенко, г.&nbsp;Рубцовск",
          text: [
            `— все ок. выбирал между этим и моделью со змеевиком`,
            `— Спасибо за опертивную доставку, кст. а то чувствую пропала бы брага. У меня такто есть на постоянное пользование 
            ректификационная колонна, но она физически не справляется с объемом.Так что потребовался второй аппарат`,
            `— пробовал. Для бюджетного аппарата работает на удивление хорошо.`,
          ],
          job: "Торговый представитель",
        },

        {
          img: "review-3",
          icon: "review-icon-3",
          title: "Владимир Зотов, р.п.&nbsp;Ногинск",
          text: [
            `— спасибо всё получил. аппарат пришел в целости и сохранности, пленки вы конечно не пожалели. дети второй день ходят пупырку лопают.`,
            `— не, собрать и опробовать еще не успел . но внешне все выглядит достойно. швы надежные, чистый металл без пятен. единственное что он казался мне побольше.`,
            `— но куб проверили, литраж реально совпадает так что все на уровне`,
          ],
          job: "Тренер",
        },

        {
          img: "review-4",
          icon: "review-icon-4",
          title: "Василий Пономарев, г.&nbsp;Сорочинск",
          text: [
            `— что сказать, аппарат отличный`,
            `— самое забавное что друг у меня год назад покупал что то подобное, но заплатил в 2 больше - теперь ходит косится))))
             а я ухватил недорого все сделано на совесть, работает как часы. Вчера поставил первую перегонку, сегодня уже перегнал брагу`,
            `— результатом доволен.`,
          ],
          job: "Юрист",
        },

        {
          img: "review-5",
          icon: "review-icon-5",
          title: "Степан Девинин, г.&nbsp;Тула",
          text: [
            `— Доброго...На самом деле даже не себе брал, долго выбирал, что есть в наличии. Но все получил.`,
            `— аппарат мы с женой подарили ее отцу, говорит, в молодости, когда еще в деревне жил, частенько пузыри гнал`,
            `— А то! Радости не было предела, сейчас не оттащить хоть с проточным подключением он и впервые работает. Изучает теперь 
            автоматический современный аппарат. Годы прошли, а навыки не растерял, вчера вон прислали с тещей нам пару настоек.
             Очень вкусные кстати`,
          ],
          job: "Инженер-технолог",
        },

        {
          img: "review-6",
          icon: "review-icon-6",
          title: "Михаил Шарадов, г.&nbsp;Бор",
          text: [
            `— Достойный аппарат. Это не первый мой простецкий дистиллятор для первых перегонок, брал от лучших брендов, но всегда
             недорогие. Когда увидел вашу колонну вообщето сначала подумал, что смешно.`,
            `— но по итогу остался доволен. В работе показал себя хорошо: перегнал быстрее тех, что у меня уже есть и результат
             гораздо лучше, на выходе продукт холодный.`,
          ],
          job: "Дизайнер рекламы",
        },

        {
          img: "review-7",
          icon: "review-icon-7",
          title: "Павел Назаров, п.&nbsp;Нурма",
          text: [],
          showMore: {
            visible: `— Сделал заказ через интернет-магазин с доставкой. Через ozon покупать не стал, слышал, что доставляют как попало. 
            До этого смотрел обзор интересный рейтинг тоа аппаратов колонного типа этого года. Но то ли чутье подсказало, то ли опыт, что
            результаты все проплаченные. В общем, доверился в итоге своему мнению и отзывам в сети. Раньше у меня был аппарат с сухопарником,
            чистить его устал. Хотя, сейчас у сухопарников тоже есть разные виды, но решил не связываться больше. Такие комплектующие всегда 
            головная боль. У друга`,
            hide: ` моего самый распиаренный аппарат wein, но он им че-т не очень доволен. Хотя ассортимент колонн у них тоже внушительный,
             но точно не по такой низкой цене. Из популярных производителей есть еще добрый жар, но на них тоже не остановился. Не увидел 
             подходящих под мой запрос моделей. Нашел ваш каталог товаров, изучил. Особенный восторг у людей судя по мнениям от вашего 
             перегонного куба. Теперь и сам понимаю, почему. Толстый, надежный, с зиговкой. Как бытовой аппарат Дионис мне понравился более чем. 
             Основные характеристики соответствуют заявленным. По качеству претензий нет. Заказал в комплекте и бражные приблуды, и разных 
             дрожжей для самогоноварения. Заглядываюсь на интересный набор, который состоит из нескольких разных вкусовых экстрактов.  Пока 
             по низким ценам, почему бы не взять.`,
          },
          job: "Экономист",
        },
      ],
    };
  },

  mounted() {
    let myReviewSwiper;
    const ReviewSwiper = () => {
      myReviewSwiper = new Swiper(".review-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
          nextEl: ".review-next",
          prevEl: ".review-prev",
        },
        pagination: {
          el: ".review-pagination",
          type: "progressbar",
        },
        breakpoints: {
          993: {
            spaceBetween: 30,
            slidesPerView: 1,
          },

          577: {
            spaceBetween: 30,
            slidesPerView: "auto",
          },

          0: {
            slidesPerView: 1.15,
            spaceBetween: 20,
          },
        },
        modules: [Pagination, Navigation],
      });
    };

    ReviewSwiper();
  },

  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-review",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#review {
  @extend %padd;
  @media (max-width: 992px) {
    overflow: hidden;
  }

  button.button {
    margin: 50px auto 0;

    @media (max-width: 1280px) and (min-width: 993px) {
      margin: 30px auto 0;
    }
  }

  .review-container {
    position: relative;
    @media (min-width: 993px) {
      margin-top: -20px;
    }

    .review-pagination {
      @media (min-width: 993px) {
        display: none;
      }
      top: auto;
      bottom: -10px;
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

    .review-next,
    .review-prev {
      transition: all 0.4s;
      position: absolute;
      top: 50%;
      z-index: 2;
      transform: translateY(-50%);
      cursor: pointer;

      @media (max-width: 992px) {
        display: none;
      }
    }

    .review-prev {
      left: 0;
    }

    .review-next {
      right: 0;
    }
  }

  .slider-container {
    width: 90%;
    max-width: 1218px;
    margin: 0 auto;

    @media (min-width: 993px) {
      padding: 20px;
      overflow: hidden;
    }

    @media (max-width: 992px) {
      width: 100%;
      padding-bottom: 20px;
    }
  }

  .review-item {
    height: auto;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    border-radius: 10px;
    display: grid;
    gap: 40px;
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr;
    padding: 50px;
    width: 100%;

    @media (max-width: 1440px) {
      padding: 40px;
    }

    @media (max-width: 1125px) {
      gap: 30px;
      padding: 30px;
    }

    @media (max-width: 992px) {
      align-items: center;
      display: flex;
      flex-direction: column-reverse;
      gap: 20px;
      justify-content: space-between;
      padding: 25px 20px;

      @media (min-width: 577px) {
        max-width: 420px;
      }
    }

    &__img {
      align-self: center;
      grid-column: 1/2;
      grid-row: 1/3;
      justify-self: end;

      @include aspect() {
        aspect-ratio: 269/565;
        width: 269px;

        @media (max-width: 768px) {
          aspect-ratio: 203/426;
          width: 203px;
        }
      }

      img {
        height: auto;
        max-width: 269px;
        min-width: 180px;
        width: 100%;
      }
    }

    &__user {
      align-items: center;
      display: flex;
      gap: 4%;
      grid-column: 2/3;
      grid-row: 1/2;
      padding-top: 50px;

      @media (max-width: 1125px) {
        padding-top: 30px;
      }

      @media (max-width: 992px) {
        padding-top: 0;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        max-width: 460px;
      }

      @media (max-width: 768px) {
        gap: 10px;
      }

      .user-img {
        max-width: 123px;
        flex-grow: 1;

        @include aspect() {
          aspect-ratio: 1/1;

          @media (max-width: 992px) {
            width: 81px;
          }
        }

        @media (max-width: 992px) {
          max-width: 81px;
        }

        img {
          max-width: 100%;
        }
      }

      .user-info {
        @media (max-width: 992px) {
          text-align: center;
        }

        &__name {
          color: var(--gray-2, #4f4f4f);
          font-family: "Roboto";
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
          line-height: 121.875%;
          margin-bottom: 10px;

          @include fluidFontSize(24, 32, 992, 1920);

          @media (max-width: 992px) {
            max-width: 300px;
            width: 100%;
            line-height: 130%;
          }

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }
        }

        &__job {
          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 992, 1920);

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
          }
        }
      }
    }

    &__text {
      grid-column: 2/3;
      grid-row: 2/3;
      max-width: 792px;
      width: 100%;

      @media (max-width: 992px) {
        display: none;
      }

      .button-show {
        cursor: pointer;
        color: rgba(50, 50, 50, 0.8);
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 138.889%;
        text-decoration-line: underline;
      }

      p {
        color: #323232;
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 131.818%;

        @include fluidFontSize(18, 22, 992, 1920);

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
