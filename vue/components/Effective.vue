<template>
  <section id="effective">
    <div class="container">
      <div class="title-box">
        <h2>Работайте <span> еще быстрее и эффективнее</span></h2>
        <p class="subtitle">Принцип работы аппарата максимально простой</p>
      </div>
      <div class="effective-wrapper">
        <div class="effective-wrapper__video">
          <video-lazy :src="'uploadupdate/effective.mp4'" />
        </div>

        <div class="effective-wrapper__text">
          <div
            class="effective-item"
            v-for="(item, index) in effective"
            :key="index"
          >
            <div class="round">
              {{ index + 1 }}
            </div>
            <p v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoLazy from "../UI/VideoLazy.vue";
export default {
  components: { VideoLazy },
  data() {
    return {
      effective: [
        {
          text: `Залейте брагу в <span> бак (1)</span> . Установите аппарат на плиту и подключите к водопроводу.
           За температурой можно следить с помощью <span> термометра (2)</span> .`,
        },

        {
          text: `Конусная конструкция бака направляет пары прямо в воздушный дефлегматор с <span>тарельчатой вставкой (3)</span>.
           Здесь пар проходит по каждому из 4 уровней волнами и орошается флегмой. Происходит первая ступень очистки.`,
        },

        {
          text: `Сивушные масла стекают обратно в куб, а чистые пары поднимаются вверх по <span>дугообразной царге (4) </span>. 
          Вредные примеси остаются на стенках царги — очистка спирта продолжается.`,
        },

        {
          text: `После этого пары попадают в вертикальный мощный <span>кожухотрубный холодильник (5)</span>. Здесь они конденсируются и
           стекают в приёмную емкость. На выходе вы получаете абсолютно чистый продукт.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#effective {
  @extend %padd;

  .effective-wrapper {
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1125px) {
      flex-direction: column;
      max-width: 720px;
      margin: 0 auto;
    }

    &__text {
      @media (min-width: 1126px) {
        max-width: 50%;
      }

      .effective-item {
        display: flex;
        gap: 10px;

        .round {
          flex-shrink: 0;
          border-radius: 30px;
          background: #5d68a3;
          height: 29px;
          width: 29px;
          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;
          font-family: "Roboto";
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 25px;

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 23px;
            width: 27px;
            height: 27px;
          }
        }

        p {
          color: #323232;
          font-family: "Stolzl";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 29px;

          @include fluidFontSize(18, 22, 992, 1920);

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }

          span {
            font-weight: 500;
          }
        }

        &:not(.last-child) {
          margin-bottom: 30px;

          @media (max-width: 768px) {
            margin-bottom: 20px;
          }
        }
      }
    }

    &__video {
      aspect-ratio: 1/1;
      width: 100%;
      position: relative;
      video {
        max-width: 100%;
      }
    }
  }
}
</style>