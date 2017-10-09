self.addEventListener('DOMContentLoaded', function() {

  var ONE_MONTH = 30.5;

  rangeSlider();

  function rangeSlider() {
    var range = $('.range-slider__range');

    updateSliderState(+range.val());

    range.on('input', function() {
      updateSliderState(+this.value);
    });
  }

  function updateSliderState(value) {
    var valueMem = $('.memoryvalue');
    var valueCpu = $('.cpuvalue');
    var valuePricePerDay = $('.pricevalueperday');
    var valuePricePerMonth = $('.pricevaluepermonth');
    var dedicatedInfo = $('.offers-package-dedicated-info');
    var price = calcPrice(value);

    valuePricePerDay.text(formatPrice(price));
    valuePricePerMonth.text(formatPrice(price * ONE_MONTH));
    valueMem.text(formatUnit(value));
    valueCpu.text(calcCpu(value));

    dedicatedInfo.toggle(value > 10000);
  }

  function formatPrice(price) {
    return price.toLocaleString(
      getDocumentLanguage(),
      { minimumFractionDigits: 2 }
    );
  }

  function calcPrice(memoryvalue) {
    return memoryvalue / 512 * 0.92;
  }

  function calcCpu(memoryvalue) {
    return 500 + (memoryvalue / 512 - 1) * 200;
  }

  function formatUnit(value) {
    return value.toLocaleString(getDocumentLanguage()) + ' MiB';
  }

  function getDocumentLanguage() {
    var lang = document.documentElement.lang;

    switch (lang) {
      case 'de':
      case 'fr':
        return lang + '-CH';
      default:
        return lang;
    }
  }

});
