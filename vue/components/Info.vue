<template>
  <section id="info">
    <div class="container">
      <div class="info-wrapper">
        <div class="info-wrapper__text pr"> 
          <h2 class="info-title">Перегонка <span> на максимум </span></h2>
          <p class="info-subtitle">Самые вкусные дистилляты</p>
          <div class="info-content">
            <h3>Ароматизация прямо в процессе перегонки</h3>
            <p>
              Воздушный дефлегматор с тарельчатой барботажной вставкой позволяет
              разместить травы, орехи, ягоды или сухофрукты на всех 4 уровнях
              устройства.
            </p>
          </div>

          <div class="info-content">
            <h3>Наилучшее качество самогона</h3>
            <p>
              Очистка дистиллята — один из самых важных показателей при выборе
              самогонного аппарата. Будьте уверены в качестве своего самогона!
              «Дионис» предлагает три ступени очистки уже в стандартной
              комплектации!
              
              <ul>
                  <li class="asp">1. Барботаж очистит от вредных и ядовитых веществ. </li>
                  <li class="asp">2. Медь улучшит органолептику и вкус. </li>
                  <li class="asp">3. Воздушный дефлегматор обеспечит
                      наилучшее орошение флегмы и высокую крепость.</li>
              </ul>
            
            </p>
          </div>

          <div class="info-content">
            <h3>Крепость до 96,6 градусов</h3>
            <p>
              В базовой комплектации аппарат позволяет достигать крепости до 75°.
              Но при необходимости вы всегда можете установить дополнительные:
              царгу, СПН, РПН, узел отбора по жидкости с орошением и дефлегматор,
              чтобы получить чистый ректификат (96,6°).
            </p>
          </div>
        </div>

        <div class="info-wrapper__img">
          <my-image :alt="'преимущества самогонного аппарата дионис'" :floder="'info'" :imgName="'speed'" :media="993" />
        </div>
      </div>

      <div class="info-wrapper"> 

        <div class="info-wrapper__img">
          <my-image :alt="'преимущества самогонного аппарата дионис'" :floder="'info'" :imgName="'more'" :media="993" />
        </div>

        <div class="info-wrapper__text pl"> 
          <h2 class="info-title"> <span>Больше</span>, чем самогон </h2>
          <p class="info-subtitle">Используйте «Дионис» для брожения и пивоварения</p>
          <div class="info-content">
            <h3>Готовая ёмкость для брожения</h3>
            <p>
              Нержавеющая сталь куба отлично подходит для брожения — она крепкая, ударопрочная и не вступает в химические реакции с продуктами. 
              Не ограничивайтесь классическими рецептами. Кроме сахара активно используются соки винограда (для вина), яблок (для сидра), сливы, 
              смородины, крыжовника и т. д. Процесс занимает 4–7 дней при оптимальной температуре 18–20°С внутри ёмкости. 
              А уже при 25–30°С ускоряется в 2 раза!
            </p>
          </div>

          <div class="info-content">
            <h3>Зиговка для пивоварения</h3>
            <p>
              Солод — это пророщенное и перемолотое в мелкую крошку зерно. После варки его обязательно отфильтровывают от пива. Сделать это можно и марлей, и простым лавсановым мешком, что не всегда удобно и довольно долго. Специальное щелевое сито, которое можно установить на зиговку бака «Дионис», помогает фильтровать сваренный солод.
            </p>
          </div>

          <div class="info-content">
            <h3>Работайте с зерновыми брагами</h3>
            <p>
              Также с щелевым ситом в баке «Дионис» можно с удобством перегонять густые браги. Оно удерживает твёрдые фракции на расстоянии от дна и не даёт им пригорать.С помощью этого приспособления можно приготовить: виски, бурбон, пшеничная водка, хлебное вино.
            </p>
          </div>
        </div>

       
      </div>
    </div>
    
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#info {
  .info-wrapper {
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      &:nth-child(2n) {
        flex-direction: column-reverse;
      }
      &:first-child {
        flex-direction: column;
      }
    }

    @media (max-width: 1400px) {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }

    &__text {
      @media (min-width: 993px) {
        max-width: 50%;

        &.pl {
          padding-left: 30px;
          @media (max-width: 1200px) {
            padding-left: 20px;
          }
        }

        &.pr {
          padding-right: 30px;
          @media (max-width: 1200px) {
            padding-right: 20px;
          }
        }
      }
    }

    &__img {
      flex-grow: 1;

      @media (max-width: 992px) {
        margin-top: 40px;
      }

      @media (max-width: 576px) {
        margin-top: 30px;
      }

      @include aspect() {
        aspect-ratio: 71/95;
      }

      img {
        max-width: 100%;
      }
    }
  }

  h2 {
    color: #323232;
    font-family: "Stolzl";
    font-size: 52px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.692%;
    margin-bottom: 20px;

    @include fluidFontSize(36, 52, 992, 1920);

    @media (max-width: 1400px) {
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      font-size: 27px;
      line-height: 34px;
    }

    span {
      color: #5d68a3;
    }
  }

  .info-subtitle {
    color: #323232;
    font-family: "Stolzl";
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    @include fluidFontSize(20, 25, 992, 1920);

    @media (max-width: 768px) {
      font-size: 20px;
    }

    margin-bottom: 50px;

    @media (max-width: 1400px) {
      margin-bottom: 30px;
    }
  }

  .info-content {
    color: #323232;
    font-family: "Rubik";
    font-style: normal;
    h3 {
      font-size: 22px;
      font-weight: 500;
      line-height: 131.818%;
      letter-spacing: 0.22px;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.16px;
      }

      margin-bottom: 10px;
    }

    p,
    li.asp {
      font-size: 18px;
      font-weight: 300;
      line-height: 25px; /* 138.889% */
      letter-spacing: 0.18px;

      @include fluidFontSize(16, 18, 992, 1920);

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.14px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>