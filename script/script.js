// untuk section nya
let promo_diskon = $("#promo-diskon");
let promo_bonus = $("#promo-bonus");
let semua_promo = $("#coba");

// untuk button nya
let btnSemuaPromo = $("#btnSemua");
let btnPromoDiskon = $("#btn-promo-diskon");
let btnPromoBonus = $("#btn-promo-bonus");

promo_bonus.hide();
promo_diskon.hide();

// semua_promo.addEventListener("click", function () {});
// promo_diskon.addEventListener("click", function () {
//   btnSemuaPromo.classList.toggle("active");
// });

function showDiskon() {
  btnSemuaPromo.removeClass("active");
  btnPromoDiskon.addClass("active");
  btnPromoBonus.removeClass("active");

  semua_promo.hide(1000);
  promo_bonus.hide(1000);
  promo_diskon.show(1000);
}

function showBonus() {
  btnSemuaPromo.removeClass("active");
  btnPromoDiskon.removeClass("active");
  btnPromoBonus.addClass("active");

  semua_promo.hide(1000);
  promo_bonus.show(1000);
  promo_diskon.hide(1000);
}

function showAll() {
  btnSemuaPromo.addClass("active");
  btnPromoDiskon.removeClass("active");
  btnPromoBonus.removeClass("active");

  semua_promo.show(1000);
  promo_bonus.hide(1000);
  promo_diskon.hide(1000);
}
