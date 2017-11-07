self.addEventListener('DOMContentLoaded', function() {
  var ONE_MONTH = 30.5;
  var SIZES = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
  var BANNERS = [
    { name: 'small', size: 0 },
    { name: 'medium', size: 1024 * 2 },
    { name: 'large', size: 1024 * 6 },
    { name: 'x-large', size: 1024 * 10 },
  ];

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
    updateActiveBanner(value);
  }

  function updateActiveBanner(value) {
    var banner = BANNERS.slice()
      .sort(function(a, b) {
        return b.size - a.size;
      })
      .find(banner => banner.size <= value);

    $('.offers-package.active').removeClass('active');
    $('.offers-package--' + banner.name).addClass('active');
  }

  function formatPrice(price) {
    return price.toLocaleString(getDocumentLanguage(), {
      minimumFractionDigits: 2,
    });
  }

  function calcPrice(memoryvalue) {
    return memoryvalue / 512 * 0.92;
  }

  function calcCpu(memoryvalue) {
    return 500 + (memoryvalue / 512 - 1) * 200;
  }

  function formatUnit(value) {
    return bytesToSize(value * Math.pow(1024, 2), 1);
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

  function bytesToSize(bytes, precision) {
    if (!bytes) return '0 Byte';
    if (bytes === 1) return '1 Byte';
    var i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(precision) + ' ' + SIZES[i];
  }
});
