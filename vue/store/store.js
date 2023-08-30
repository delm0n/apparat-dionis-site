import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      main: [
        {
          id: goods.dionis15l,
          price: goodsJson[goods.dionis15l].price,
          oldPrice: goodsJson[goods.dionis15l].oldPrice,

          selected: true,
          nameModel: "15 литров",
          img: "m-15",
          name: "Аппарат «Дионис» / 15 л",

          volume: "15 л",
          exit: "3-6 л/ч (85°)",
          param: "260х810",
          subtitle: `Универсальный и практичный. Идеальное решение для начинающих самогонщиков и домашних застолий.`,
        },

        {
          id: goods.dionis25l,
          price: goodsJson[goods.dionis25l].price,
          oldPrice: goodsJson[goods.dionis25l].oldPrice,

          selected: false,

          nameModel: "25 литров",
          img: "m-25",
          name: "Аппарат «Дионис» / 25 л",
          volume: "25 л",
          exit: "3-6 л/ч (85°)",
          param: "260х990",
          subtitle: `Отлично подойдёт и любителям, и опытным винокурам, которые хотят перегонять часто, много и качественно.`,
        },
      ],

      dops: [
        {
          id: goods.defleg,
          price: goodsJson[goods.defleg].price,
          oldPrice: goodsJson[goods.defleg].oldPrice,
          name: "Дефлегматор",
          selected: false,
          cart: false,

          icon: "defleg-icon",
          kit: "defleg-kit",

          kitModal: {
            img: "defleg-modal",
            text: [
              `
              Превратите бражную колонну «Диониса» в ректификационную благодаря дефлегматору. Медь идеально подходит для ароматных дистиллятов и улучшает теплопроводность в 9 раз. Создавайте привычные напитки или чистый спирт крепостью до 96,6°. Диаметр — 2 дюйма.`,
            ],
            list: [],
          },
        },

        {
          id: goods.rpn_nerj,
          price: goodsJson[goods.rpn_nerj].price,
          oldPrice: goodsJson[goods.rpn_nerj].oldPrice,
          name: "РПН (нержа)",
          selected: false,
          cart: false,

          icon: "rpn_nerj-icon",
          kit: "rpn_nerj-kit",

          kitModal: {
            img: "rpn_nerj-modal",
            text: [
              `
              Регулярная проволочная насадка Панченкова (РПН) — это сетчатое полотно, которое скручивается в рулон и помещается в царгу для разделения на фракции и более качественной очистки спиртовых паров. 
              РПН из нержавеющей стали чаще всего используется для перегонки сахарных браг. Она долговечна и неприхотлива в уходе. `,
            ],
            list: [],
          },
        },

        {
          id: goods.rpn_cu,
          price: goodsJson[goods.rpn_cu].price,
          oldPrice: goodsJson[goods.rpn_cu].oldPrice,
          name: "РПН (медь)",
          selected: false,
          cart: false,

          icon: "rpn_cu-icon",
          kit: "rpn_cu-kit",

          kitModal: {
            img: "rpn_cu-modal",
            text: [
              `
              Регулярная проволочная насадка Панченкова (РПН) — это сетчатое полотно, которое скручивается в рулон и помещается в царгу для разделения на фракции и более качественной очистки спиртовых паров.
              Медь чаще всего используется для перегонки фруктовых и зерновых браг. Она впитывает серу, обеспечивает системе высокий теплообмен, и как следствие — лучшую очистку продукта. `,
            ],
            list: [],
          },
        },

        {
          id: goods.spn_nerj,
          price: goodsJson[goods.spn_nerj].price,
          oldPrice: goodsJson[goods.spn_nerj].oldPrice,
          name: "СПН (нержа)",
          selected: false,
          cart: false,

          icon: "spn_nerj-icon",
          kit: "spn_nerj-kit",

          kitModal: {
            img: "spn_nerj-modal",
            text: [
              `
              Спирально-призматическая насадка (СПН) — это фильтрующий элемент в форме спирали, который засыпается в царгу и используется для очистки самогона от примесей.
              <br> <br>
              СПН из нержавеющей стали чаще всего используется для перегонки сахарных браг. Она долговечна и неприхотлива в уходе.`,
            ],
            list: [],
          },
        },

        {
          id: goods.spn_cu,
          price: goodsJson[goods.spn_cu].price,
          oldPrice: goodsJson[goods.spn_cu].oldPrice,
          name: "СПН (медь)",
          selected: false,
          cart: false,

          icon: "spn_cu-icon",
          kit: "spn_cu-kit",

          kitModal: {
            img: "spn_cu-modal",
            text: [
              `
              Спирально-призматическая насадка (СПН) — это фильтрующий элемент в форме спирали, который засыпается в царгу и используется для очистки самогона от примесей.
              <br><br>
              Медь чаще всего используется для перегонки фруктовых и зерновых браг. Она впитывает серу, обеспечивает системе высокий теплообмен, и как следствие — лучшую очистку продукта. `,
            ],
            list: [],
          },
        },

        {
          id: goods.uzel,
          price: goodsJson[goods.uzel].price,
          oldPrice: goodsJson[goods.uzel].oldPrice,
          name: "Узел отбора по&nbsp;жидкости",
          selected: false,
          cart: false,

          icon: "uzel-icon",
          kit: "uzel-kit",

          kitModal: {
            img: "uzel-modal",
            text: [
              `
              Узел отбора по жидкости — это элемент ректификационной колонны, который стабилизирует её работу в условиях перепадов температур и предназначен для орошения насадки, регулировки флегмового числа, отбора дистиллята. 
              <br><br>
              Конструкция представляет из себя стаканчик для конденсата. Достигнув определённого уровня, флегма возвращается в куб.
          
            `,
            ],
            list: [],
          },
        },

        {
          id: goods.hidroz,
          price: goodsJson[goods.hidroz].price,
          oldPrice: goodsJson[goods.hidroz].oldPrice,
          name: "Гидрозатвор",
          selected: false,
          cart: false,

          icon: "hidroz-icon",
          kit: "hidroz-kit",

          kitModal: {
            img: "hidroz-modal",
            text: [
              `
              Приспособление, которое обеспечивает надёжную защиту от запаха брожения и не даёт кислороду окислить брагу. Подходит для любой бродильной ёмкости.`,
            ],
            list: [],
          },
        },

        {
          id: goods.gusset,
          price: goodsJson[goods.gusset].price,
          oldPrice: goodsJson[goods.gusset].oldPrice,
          name: "Колпачковая вставка",
          selected: false,
          cart: false,

          icon: "gusset-icon",
          kit: "gusset-kit",

          kitModal: {
            img: "gusset-modal",
            text: [
              `
              Приспособление для более качественного разделения дистиллята на фракции и отсечения сивухи при помощи поэтапного барбатажа (наглядно процесс будет видно только в стеклянной царге). 
              <br>
              <br>
              С колпачковой вставкой напиток сохранит ароматику хорошего дистиллята при крепости до 90 градусов! Приспособление разбирается и настраивается: каждый этаж колонны изолируется от предыдущего герметичным силиконовым соединением. Тарелки можно сместить или снять на своё усмотрение, оставив в работе только нужное количество.`,
            ],
            list: [],
          },
        },

        {
          id: goods.coal_column,
          price: goodsJson[goods.coal_column].price,
          oldPrice: goodsJson[goods.coal_column].oldPrice,
          name: "Угольная колонна",
          selected: false,
          cart: false,

          icon: "coal_column-icon",
          kit: "coal_column-kit",

          kitModal: {
            img: "coal_column-modal",
            text: [
              `
              Угольная колонна помогает очистить дистиллят и избавить его от неприятного запаха. Она рекомендуется к применению между первой и второй перегонками. Уголь – сильный абсорбент, который вбирает вредные вещества (в первую очередь — сивушные масла). Очистку важно проводить, разбавляя спирт-сырец водой примерно до 20% крепости (тогда процесс будет более эффективным).`,
            ],
            list: [],
          },
        },

        {
          id: goods.coal_column_tips,
          price: goodsJson[goods.coal_column_tips].price,
          oldPrice: goodsJson[goods.coal_column_tips].oldPrice,
          name: "Угольная колонна на&nbsp;банку",
          selected: false,
          cart: false,

          icon: "coal_column_tips-icon",
          kit: "coal_column_tips-kit",

          kitModal: {
            img: "coal_column_tips-modal",
            text: [
              `
              Угольная колонна помогает очистить дистиллят и избавить его от неприятного запаха. Она рекомендуется к применению между первой и второй перегонками. Уголь – сильный абсорбент, который вбирает вредные вещества (в первую очередь — сивушные масла). Очистку важно проводить, разбавляя спирт-сырец водой примерно до 20% крепости (тогда процесс будет более эффективным).
              <br><br>
            А устройство, которое крепится на банку, имеет ряд дополнительных +:<br>
            <ul>
            <li>повышение качества очистки за счёт принципа противотока;</li>
            <li>надёжное закрепление и лёгкая замена ёмкости (стеклянной банки);</li>
            <li>кран в нижней части обеспечивает комфортный слив вредных примесей при завершении перегонки без переворачивания колонны.</li>
            </ul>`,
            ],
            list: [],
          },
        },

        {
          id: goods.parrot,
          price: goodsJson[goods.parrot].price,
          oldPrice: goodsJson[goods.parrot].oldPrice,
          name: "Попугай",
          selected: false,
          cart: false,

          icon: "parrot-icon",
          kit: "parrot-kit",

          kitModal: {
            img: "parrot-modal",
            text: [
              `
              «Попугай» — это конструкция для непрерывного контроля крепости дистиллята, поступающего из охладителя самогонного аппарата. Способствует более точному и эффективному отбору «голов» и «хвостов».  Применяется преимущественно в процессе второй и последующих перегонок, ректификации. 
              Устройство позволяет:<br>
              <ul>
            <li>отказаться от постоянного сбора проб;</li>
            <li> непрерывно отслеживать уровень крепости;</li>
            <li> дополнительно охлаждать продукт на выходе.</li>
            </ul>`,
            ],
            list: [],
          },
        },

        {
          id: goods.parrot_tips,
          price: goodsJson[goods.parrot_tips].price,
          oldPrice: goodsJson[goods.parrot_tips].oldPrice,
          name: "Попугай на банку",
          selected: false,
          cart: false,

          icon: "parrot_tips-icon",
          kit: "parrot_tips-kit",

          kitModal: {
            img: "parrot_tips-modal",
            text: [
              `
              «Попугай» — это конструкция для непрерывного контроля крепости дистиллята, поступающего из охладителя самогонного аппарата. Способствует более точному и эффективному отбору «голов» и «хвостов».  Применяется преимущественно в процессе второй и последующих перегонок, ректификации. 
              <br><br>
              А устройство, которое крепится на банку, имеет ряд дополнительных +:<br><br>
              
              <ul>
            <li> конструкция не опрокинется;</li>
            <li> спирт не испарится (стеклянный колпачок способствует конденсации жидкости и снижению потерь этилового спирта);</li>
            <li> показания с минимальным отклонением (компенсационное отверстие способствует выходу части флегмы. В результате ареометр не «прыгает» в жидкости, данные более точные).</li>
            </ul>`,
            ],
            list: [],
          },
        },
      ],

      cart: [],
    };
  },
  mutations: {
    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    setUserRassrochka(state, bool) {
      state.user.rassrochka = bool;
    },

    dopAddCart(state, id) {
      let dop = state.dops.find((el) => el.id == id);

      if (!dop.cart) {
        dop.cart = true;
        state.cart.push(dop);
      }
    },

    dopDeleteFromCart(state, id) {
      let dop = state.dops.find((el) => el.id == id);

      if (dop.cart) {
        dop.cart = false;

        let arr = [];
        state.cart.forEach((element) => {
          element.id != id ? arr.push(element) : "";
        });
        state.cart = arr;
      }
    },

    openOrderCart(state) {
      state.dops.forEach((el) => {
        el.selected = el.cart;
      });
    },
  },
  getters: {
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getMain(state) {
      return state.main;
    },

    getUser(state) {
      return state.user;
    },

    getDops(state) {
      return state.dops;
    },

    getCart(state) {
      return state.cart;
    },

    getLastPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastPriceCart(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.cart ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },
  },
});
