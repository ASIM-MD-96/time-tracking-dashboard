"use strict";

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const cardsDisplay = [
  {
    title: "Work",
    image: "images/icon-work.svg",
    color: "hsl(15, 100%, 70%)",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    image: "images/icon-play.svg",
    color: "hsl(195, 74%, 62%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    image: "images/icon-study.svg",
    color: "hsl(348, 100%, 68%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    image: "images/icon-exercise.svg",
    color: "hsl(145, 58%, 55%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    image: "images/icon-social.svg",
    color: "hsl(264, 64%, 52%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    image: "images/icon-self-care.svg",
    color: "hsl(43, 84%, 65%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const cardContainer = document.querySelector(".card__container");
function displayContent(timeframes) {
  let row = "";
  cardsDisplay.forEach((card) => {
    cardContainer.innerHTML = "";
    let timeData = card.timeframes[timeframes];
    row += `<section class="cards">
          <div
            class="flex flex-col rounded-xl  relative overflow-y-hidden  pt-10 w-[19rem] md:w-[13rem]" style="background-color:${card.color}"
          >
            <img
              src="${card.image}"
              alt=""
              class="w-16 h-16 absolute -top-2 right-2"
            />
            <div
              class="w-[19rem] bg-darkBlue rounded-xl z-50 md:w-[13rem] py-4 hover:brightness-125 hover:backdrop-contrast-150"
            >
              <div class="grid grid-cols-2 justify-between px-6 items-center">
                <p class="text-lg text-white font-medium font-Rubik">${card.title}</p>
                <img
                  src="images/icon-ellipsis.svg"
                  alt=""
                  class="ml-auto cursor-pointer"
                />
              </div>
              <div
                class="flex justify-between px-6 py-4 md:pt-6 items-center md:flex-col md:items-start md:px-0 md:pl-6 md:gap-2"
              >
                <p
                  class="text-3xl font-Rubik font-light text-paleBlue md:text-4xl"
                >
                ${timeData.current}hrs
                </p>
                <p class="text-sm font-Rubik text-desaturatedBlue">
                  last ${timeframes} -${timeData.previous}hrs
                </p>
              </div>
          </div>
          </div>
        </section>
    `;
  });

  cardContainer.innerHTML = row;
}
displayContent("daily");

const activeBtn = document.querySelectorAll(".active__btn");

function activeText(btnClicked) {
  activeBtn.forEach((btn) => {
    btn.classList.remove("active");
    btnClicked.classList.add("active");
  });
}

daily.addEventListener("click", function () {
  displayContent("daily");
  activeText(daily);
});
weekly.addEventListener("click", function () {
  displayContent("weekly");
  activeText(weekly);
});
monthly.addEventListener("click", function () {
  displayContent("monthly");
  activeText(monthly);
});
