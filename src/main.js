/*
  (C) 2020 David Lettier
  lettier.com
*/

import App from "./App.svelte"

const app = new App({
  target: document.body,
  props: {
    teamNames: ["الفريق 1", "الفريق 2"],
    qas: [
      {
        question: "اذكر أسماء أشياء ناكلها على الفطور ؟",
        answers: [
          {
            text: "قهوة",
            money: 17
          },
          {
            text: "بيض",
            money: 11
          },
          {
            text: "خبز",
            money: 6
          },
          {
            text: "بان كيك",
            money: 4
          },
          {
            text: "حليب وأجبان",
            money: 3
          },
          {
            text: "فواكه",
            money: 1
          }
        ]
      },
      {
        question: "اذكر شيء من الصعب الناس تتخلى عنه؟",
        answers: [
          {
            text: "الجوال",
            money: 17
          },
          {
            text: "الماء",
            money: 11
          },
          {
            text: "المال",
            money: 6
          },
          {
            text: "الاكل",
            money: 4
          },
          {
            text: "الانترنت",
            money: 3
          },
          {
            text: "العائلة",
            money: 1
          }
        ]
      },
      {
        question: "لو كسبت جائزة مالية.. وش راح تسوي فيها ؟",
        answers: [
          {
            text: "العائلة",
            money: 17
          },
          {
            text: "السفر",
            money: 11
          },
          {
            text: "أحلامي",
            money: 6
          },
          {
            text: "الصدقة",
            money: 4
          },
          {
            text: "تسديد الديون",
            money: 3
          },
          {
            text: "التسوق",
            money: 1
          }
        ]
      },
      {
        question: "وش السؤال اللي إجابته مو شغلك ؟",
        answers: [
          {
            text: "الراتب",
            money: 17
          },
          {
            text: "الارتباط",
            money: 11
          },
          {
            text: "الخصوصيات",
            money: 6
          },
          {
            text: "العمر",
            money: 4
          },
          {
            text: "العمل",
            money: 3
          },
          {
            text: "الوزن",
            money: 1
          }
        ]
      },
      {
        question: "لو صحيت ولقيت كل شيء بلاش وين بتروح ؟",
        answers: [
          {
            text: "السوق",
            money: 17
          },
          {
            text: "المطار أسافر",
            money: 11
          },
          {
            text: "معرض سيارات",
            money: 6
          },
          {
            text: "المطعم",
            money: 4
          },
          {
            text: "مكتب عقارات",
            money: 3
          },
          {
            text: "محل أجهزة الكترونية",
            money: 1
          }
        ]
      },
      {
        question: "وش أكثر مكان نشوف فيه كاميرات ؟",
        answers: [
          {
            text: "المباريات",
            money: 17
          },
          {
            text: "المؤتمرات",
            money: 11
          },
          {
            text: "المهرجانات",
            money: 6
          },
          {
            text: "الاستوديو",
            money: 4
          },
          {
            text: "الاعراس",
            money: 3
          },
          {
            text: "المراكز الامنية",
            money: 1
          }
        ]
      }
    ]
  }
});

export default app;
