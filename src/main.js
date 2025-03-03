const containerFunc = {};
var map;
var placemark;
var address;
var zone;
function init() {
  map = new ymaps.Map("map", {
    center: [55.741272, 52.403662],
    zoom: 12,
  });

  placemark = new ymaps.Placemark(map.getCenter(), {}, { draggable: true });
  map.geoObjects.add(placemark);

  var centralDistrict = new ymaps.Polygon(
    [
      [
        [55.780483743206574, 52.42449088220744],
        [55.77958998936688, 52.42711495463451],
        [55.77862253383209, 52.4292607218464],
        [55.77654242275266, 52.434153071089575],
        [55.77518787187537, 52.43629883830151],
        [55.77393003229805, 52.43758629862866],
        [55.76981757995111, 52.439817896529014],
        [55.76343031960115, 52.444281092329824],
        [55.766285361307176, 52.45046090190015],
        [55.77331414582309, 52.44563916460869],
        [55.77732947784967, 52.4441800429046],
        [55.782843835059495, 52.444695027035436],
        [55.7885992140947, 52.435081989926076],
        [55.78703746822107, 52.42994113092567],
        [55.786481291014354, 52.42998404626993],
        [55.780483743206574, 52.42449088220744],
      ],
    ],
    {
      hintContent: "Центральный район",
    },
    {
      fillColor: "#00FF00", // Зеленый цвет для зоны
      strokeColor: "#0000FF", // Синий цвет обводки
      strokeWidth: 2,
      fillOpacity: 0.4, // Прозрачность заливки
    }
  );
  map.geoObjects.add(centralDistrict);

  var industrialDistrict = new ymaps.Polygon(
    [
      [
        [55.76309809787991, 52.44479607646061], // Позиция 1
        [55.76001027928886, 52.44981888232921], // Позиция 2
        [55.75663713082589, 52.455417624159594], // Позиция 3
        [55.753503053655095, 52.46044960433191], // Позиция 4
        [55.75196012354243, 52.46306086353213], // Позиция 5
        [55.75019929313389, 52.465996256514316], // Позиция 6
        [55.750271906281704, 52.46822785441472], // Позиция 7
        [55.754289621900625, 52.47655343119693], // Позиция 8
        [55.75806492768992, 52.46994446818424], // Позиция 9
        [55.761017154696134, 52.464794626875644], // Позиция 10
        [55.76295291941627, 52.46179055277898], // Позиция 11
        [55.76784029586388, 52.45964478556704], // Позиция 12
        [55.76619510912282, 52.45054673258852], // Позиция 13
        [55.76309809787991, 52.44479607646061], // Возвращаемся в центр
      ],
    ],
    {
      hintContent: "Промышленный район",
    },
    {
      fillColor: "#FF0000", // Красный цвет для зоны
      strokeColor: "#0000FF", // Синий цвет обводки
      strokeWidth: 2,
      fillOpacity: 0.4, // Прозрачность заливки
    }
  );
  map.geoObjects.add(industrialDistrict);

  var residentialDistrict = new ymaps.Polygon(
    [
      [
        [55.74892415059758, 52.38389283904963],
        [55.74953238892745, 52.382318344996605],
        [55.74705096580536, 52.37299513590618],
        [55.74724461625365, 52.36733031046679],
        [55.74224584864491, 52.36490129268773],
        [55.73585925516766, 52.361185337253175],
        [55.73663407424691, 52.35294559115944],
        [55.734987565239884, 52.350885654635974],
        [55.73275982438195, 52.35878207797582],
        [55.72781959571276, 52.35174396152076],
        [55.72723835106438, 52.3474524270969],
        [55.722297420693835, 52.335092807956286],
        [55.71890622281963, 52.34127261752662],
        [55.71830425703242, 52.37194560936357],
        [55.71743217342468, 52.37606548241044],
        [55.71539723562626, 52.378983725818685],
        [55.71886869924432, 52.386521325785544],
        [55.71203695342843, 52.39845179148379],
        [55.74830025655101, 52.466146841549445],
        [55.75004301967929, 52.46580351879555],
        [55.76253053426886, 52.44486083080727],
        [55.76756312565371, 52.4407409577604],
        [55.77462700903742, 52.43662108471353],
        [55.77859383185107, 52.428724661373685],
        [55.75174152814859, 52.3886987666904],
        [55.74893642187512, 52.38389394073917],
        [55.74730548178278, 52.38296207516023],
        [55.74574380011608, 52.3820931888847],
        [55.747299255235234, 52.38297824313688],
        [55.74892415059758, 52.38389283904963],
      ],
    ],
    {
      hintContent: "НОВЫЙ ГОРОД",
    },
    {
      fillColor: "#ffd21e", // Желтый цвет для зоны
      strokeColor: "#ffd21e", // Синий цвет обводки
      strokeWidth: 2,
      fillOpacity: 0.4,
    }
  );
  map.geoObjects.add(residentialDistrict);

  var commercialDistrict = new ymaps.Polygon(
    [
      [
        [55.67990500418325, 52.32663327586187],
        [55.67660773277531, 52.332806756889426],
        [55.6793391391827, 52.3394476108939],
        [55.68553017688906, 52.33693295847902],
        [55.69294834317158, 52.33418637644777],
        [55.70162531889279, 52.329894842023954],
        [55.70046203778956, 52.32311421763426],
        [55.69774757998797, 52.32320004832274],
        [55.696293328287254, 52.32689076792724],
        [55.69488750000081, 52.32525998484625],
        [55.693772496630785, 52.32234174143805],
        [55.69246353887831, 52.32440167796146],
        [55.68999094303561, 52.32156926524174],
        [55.6852877293106, 52.31590443980231],
        [55.67990500418325, 52.32663327586187],
      ],
    ],
    {
      hintContent: "ЗАМЕЛЕКЕСЬЕ ",
    },
    {
      fillColor: "#0000FF", // Синий цвет для зоны
      strokeColor: "#0000FF", // Синий цвет обводки
      strokeWidth: 2,
      fillOpacity: 0.4, // Прозрачность заливки
    }
  );
  map.geoObjects.add(commercialDistrict);

  function getAddress(coords) {
    ymaps.geocode(coords).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);
      address = firstGeoObject.getAddressLine();
      zone = getZoneByCoordinates(coords);
      document.getElementById("addressInput").value = address;
    });
  }

  function getZoneByCoordinates(coords) {
    var zone = "Неизвестная зона";

    if (centralDistrict.geometry.contains(coords)) {
      zone = "Центральный район";
    } else if (industrialDistrict.geometry.contains(coords)) {
      zone = "НОВЫЙ ГОРОД ДАЛЬНИЙ";
    } else if (residentialDistrict.geometry.contains(coords)) {
      zone = "НОВЫЙ ГОРОД";
    } else if (commercialDistrict.geometry.contains(coords)) {
      zone = "Замелекесье";
    }

    return zone;
  }

  // Получаем адрес при клике на карту
  map.events.add("click", function (e) {
    var coords = e.get("coords");
    placemark.geometry.setCoordinates(coords);
    getAddress(coords);
  });

  placemark.events.add("dragend", function () {
    getAddress(placemark.geometry.getCoordinates());
  });

  function addPolygonClickHandler(polygon) {
    polygon.events.add("click", function (e) {
      var coords = e.get("coords");
      placemark.geometry.setCoordinates(coords);
      getAddress(coords);
    });
  }

  addPolygonClickHandler(centralDistrict);
  addPolygonClickHandler(industrialDistrict);
  addPolygonClickHandler(residentialDistrict);
  addPolygonClickHandler(commercialDistrict);

  $("#addressInput").suggestions({
    token: "c47791bfa5b98a4abb2715c7afddaf652a59c0d8",
    type: "ADDRESS",
    onSelect: function (suggestion) {
      var coordinates =
        suggestion.data.geo_lat && suggestion.data.geo_lon
          ? [suggestion.data.geo_lat, suggestion.data.geo_lon]
          : null;

      if (coordinates) {
        zone = getZoneByCoordinates(coordinates);

        map.setCenter(coordinates, 14);
        placemark.geometry.setCoordinates(coordinates);

        ymaps.geocode(coordinates).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);
          address = firstGeoObject.getAddressLine();
          document.getElementById("addressInput").value = address;
        });
      }
    },
  });
  function setAddressFromCookies() {
    const inputAdress = document.querySelector("#addressInput");
    // Получаем значение из cookies
    const savedAddress = Cookies.get("address");

    // Если адрес есть в cookies
    if (savedAddress) {
      inputAdress.value = savedAddress;

      // Геокодируем адрес, чтобы получить координаты
      ymaps.geocode(savedAddress).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        var coordinates = firstGeoObject.geometry.getCoordinates();

        // Устанавливаем метку на карте
        placemark.geometry.setCoordinates(coordinates);

        // Центрируем карту на этих координатах
        map.setCenter(coordinates, 14);
      });
    }
  }

  // Вызываем функцию, чтобы установить адрес и метку из cookies при загрузке страницы
  setAddressFromCookies();
}

const getOpenModal = () => {
  const btn = document.querySelector("#openModal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const html = document.querySelector("html");
  const centeredContainer = document.querySelector(".center-container");
  const setAdress = document.querySelector("#save-adress");
  const setDelivery = document.querySelector("#save-pikup");

  btn.addEventListener("click", () => {
    openModal();
  });

  overlay.addEventListener("click", () => {
    closeModal();
  });
  const observer = new MutationObserver(() => {
    if (setAdress.classList.contains("active")) {
      setAdress.addEventListener("click", () => {
        closeModal();
      });
    }
  });

  observer.observe(setAdress, {
    attributes: true,
    attributeFilter: ["class"],
  });
  setDelivery.addEventListener("click", () => {
    Cookies.remove("address");
    Cookies.remove("zone");
    Cookies.set("address", "САМОВЫВОЗ", { expires: 1, path: "/" });
    closeModal();
  });

  function openModal() {
    html.style.overflow = "hidden";
    overlay.style.display = "block";
    modal.style.display = "flex";
    centeredContainer.style.pointerEvents = "auto";
    ymaps.ready(init);

    anime({
      targets: overlay,
      opacity: [0, 1],
      duration: 300,
      easing: "easeInOutQuad",
    });

    anime({
      targets: modal,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 400,
      easing: "easeOutQuad",
    });
  }
  function closeModal() {
    anime({
      targets: overlay,
      opacity: [1, 0],
      duration: 300,
      easing: "easeInOutQuad",
    });

    anime({
      targets: modal,
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 300,
      easing: "easeInQuad",
      complete: () => {
        overlay.style.display = "none";
        modal.style.display = "none";
        html.style.overflow = "auto";
        centeredContainer.style.pointerEvents = "none";
      },
    });
  }
};
getOpenModal();

function setAddressAndZone() {
  const inputAdress = document.querySelector("#addressInput");
  const setAdress = document.querySelector("#save-adress");
  setInterval(() => {
    if (inputAdress.value !== "" && zone !== "Неизвестная зона") {
      setAdress.classList.add("active");
      setAdress.addEventListener("click", () => {
        Cookies.set("address", address, { expires: 1, path: "/" });
        Cookies.set("zone", zone, { expires: 1, path: "/" });
      });
    } else if (zone === "Неизвестная зона") {
      setAdress.classList.remove("active");
    } else {
      setAdress.classList.remove("active");
    }
  }, 1000);
}

setAddressAndZone();

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter");
  const selectAddress = document.querySelector(".select-adress");
  const selectPickup = document.querySelector(".select-pickup");

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      filters.forEach((f) => f.classList.remove("active"));

      this.classList.add("active");

      if (this.textContent === "Доставка") {
        selectAddress.style.display = "block";
        selectPickup.style.display = "none";
      } else {
        selectAddress.style.display = "none";
        selectPickup.style.display = "block";
      }
    });
  });
});
