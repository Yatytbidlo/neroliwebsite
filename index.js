const filterBox = document.querySelectorAll(".box ");
const filterCategories = document.querySelectorAll(".filter-category");
const selectedCategoryElement = document.querySelector(".selected-category");

document.addEventListener("DOMContentLoaded", function () {
  filterCategories.forEach((category) => {
    category.addEventListener("click", (event) => {
      if (event.target.tagName !== "LI") return;

      let filterClasses = event.target.dataset["f"];

      filterBox.forEach((elem) => {
        elem.classList.remove("hide");
      });

      if (filterClasses) {
        let classesArray = filterClasses.split(" ");

        filterBox.forEach((elem) => {
          if (
            !classesArray.some((className) =>
              elem.classList.contains(className)
            )
          ) {
            elem.classList.add("hide");
          }
        });
      }

      if (filterClasses === undefined || filterClasses.length === 0) {
        const nothing = document.querySelector(".nothing");
        nothing.classList.add("show");
      } else {
        const nothing = document.querySelector(".nothing");
        nothing.classList.remove("show");
      }

      selectedCategoryElement.textContent = `Выбрана категория: ${event.target.textContent}`;
    });
  });
});

// Получаем все чекбоксы
const checkboxes = document.querySelectorAll(
  '.filter-category input[type="checkbox"]'
);
const resetNotes = document.querySelector(".reset-notes"); // Изменил на класс

// Функция для обновления фильтрации товаров
function updateFilters() {
  // Собираем выбранные значения чекбоксов в массив
  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.split(" ")) // Разделяем на отдельные классы
    .flat(); // Преобразуем массив массивов в одномерный массив

  // Проходимся по каждому товару и проверяем, содержит ли хотя бы один класс из выбранных значений
  filterBox.forEach((product) => {
    if (
      selectedValues.length === 0 ||
      selectedValues.some((value) => product.classList.contains(value))
    ) {
      product.classList.remove("hide");
    } else {
      product.classList.add("hide");
    }
  });
}

// Прослушиваем изменения состояния чекбоксов
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilters);
});

// Обработчик клика на кнопку сброса фильтров
resetNotes.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateFilters();
  updateSelectedCategory(""); // Вызываем функцию обновления фильтров
});

const labels = document.querySelectorAll(".filter-category label");

// Функция для обновления выбранной категории
function updateSelectedCategory(selectedText) {
  selectedCategoryElement.textContent = `Выбрана категория: ${selectedText}`;
}

// Обработчик клика на checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const selectedText = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.parentNode.textContent.trim())
      .join(", ");

    updateSelectedCategory(selectedText);
  });
});

// Обработчик клика на label
labels.forEach((label) => {
  label.addEventListener("click", (event) => {
    const selectedText = event.currentTarget.textContent.trim();
    updateSelectedCategory(selectedText);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const expandableList = document.querySelector(".expandable");
  const showMoreButton = document.querySelector(".show-more");
  const showHideButton = document.querySelector(".show-hide");

  let expanded = false;

  showMoreButton.addEventListener("click", () => {
    expandableList.style.maxHeight = "none";
    showMoreButton.style.opacity = 0;
    showHideButton.style.display = "block";
    showHideButton.style.opacity = 1; // Добавляем эту строку, чтобы показать кнопку Скрыть

    expanded = true;
  });

  showHideButton.addEventListener("click", () => {
    if (expanded) {
      expandableList.style.maxHeight = "150px";
      showMoreButton.style.opacity = 1;
      showHideButton.style.opacity = 0; // Добавляем эту строку, чтобы скрыть кнопку Скрыть после клика
      showHideButton.style.display = "none";

      expanded = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const expandableList = document.querySelector(".expandable-accords");
  const showMoreButton = document.querySelector(".show-more-accords");
  const showHideButton = document.querySelector(".show-hide-accords");

  let expanded = false;

  showMoreButton.addEventListener("click", () => {
    expandableList.style.maxHeight = "none";
    showMoreButton.style.opacity = 0;
    showHideButton.style.display = "block";
    showHideButton.style.opacity = 1; // Добавляем эту строку, чтобы показать кнопку Скрыть

    expanded = true;
  });

  showHideButton.addEventListener("click", () => {
    if (expanded) {
      expandableList.style.maxHeight = "155px";
      showMoreButton.style.opacity = 1;
      showHideButton.style.opacity = 0; // Добавляем эту строку, чтобы скрыть кнопку Скрыть после клика
      showHideButton.style.display = "none";

      expanded = false;
    }
  });
});
