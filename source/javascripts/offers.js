// Appuio Range Slider
// HTML Usage:
// The Appuio Range Slider can be used without direct JavaScript usage.
// Add the `data-appuio-range-slider` to your element and you're done.
//
// The following options through data attributes are supported:
// `data-appuio-value-memory` (default: '.memoryvalue'):
//     Element to update the current memory amount
// `data-appuio-value-cpu` (default: '.cpuvalue'):
//     Element to update the current cpu amount
// `data-appuio-price-per-day` (default: '.pricevalueperday'):
//     Element to update the current price per day
// `data-appuio-price-per-month` (default: '.pricevaluepermonth'):
//     Element to update the current price per month
// `data-appuio-dedicated-info` (default: '.offers-package-dedicated-info'):
//     Element to show once we recommend a dedicated appuio instance
// `data-appuio-banner` (default: '.offers-package'):
//     Elements to toggle the active state based on slider position
//
// HTML Example:
// ```
// <input
//   data-appuio-range-slider
//   data-appuio-value-memory=".memoryvalue"
//   data-appuio-value-cpu=".cpuvalue"
//   type="range"
//   min="512"
//   max="20480"
//   step="512">
// ```
//
// JavaScript Usage:
// If you need to configure further values or need a different element
// you can use the jQuery API:
//   `jQuery('input.appuio-slider').appuioRangeSlider(options)`
//
// Options:
// `updateState` (default: function):
//     The function to call and update the DOM each time the slider
//     value changes
// `min` (default: 512):
//     The minimal value to select
// `max` (default: 20480):
//     The maximum value to select
// `step` (default: 512):
//     The value which the range input uses for each step
// `valueMemory` (default: '.memoryvalue'):
//     Element to update the current memory amount
// `valueCpu` (default: '.cpuvalue'):
//     Element to update the current cpu amount
// `valuePricePerDay` (default: '.pricevalueperday'):
//     Element to update the current price per day
// `pricePerMonth` (default: '.pricevaluepermonth'):
//     Element to update the current price per month
// `dedicatedInfo` (default: '.offers-package-dedicated-info'):
//     Element to show once we recommend a dedicated appuio instance
// `banners` (default: see BANNERS constant):
//   The different banner sizes to toggle active state.
// `banner` (default: '.offers-package'):
//     Elements to toggle the active state based on slider position

self.addEventListener('DOMContentLoaded', function() {
  var ONE_MONTH = 30.5;
  var SIZES = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
  var BANNERS = [
    { name: 'small', size: 0 },
    { name: 'medium', size: 1024 * 2 },
    { name: 'large', size: 1024 * 6 },
    { name: 'x-large', size: 1024 * 10 }
  ];

  function AppuioRangeSlider(element, options) {
    this.element = element;
    this.language = options.language;
    this.calcPrice = options.calcPrice;
    this.calcCpu = options.calcCpu;
    this.banners = options.banners.slice();
    this.banner = options.banner;
    this.max = options.max;
    this.min = options.min;
    this.step = options.step;
    this.valueMemory = options.valueMemory;
    this.valueCpu = options.valueCpu;
    this.valuePricePerDay = options.valuePricePerDay;
    this.valuePricePerMonth = options.valuePricePerMonth;
    this.dedicatedInfo = options.dedicatedInfo;
    this.updateState = options.updateState.bind(this);
    this.oninput = this.oninput.bind(this);

    this.init();
  }

  AppuioRangeSlider.prototype.init = function init() {
    this.element.max = this.max;
    this.element.min = this.min;
    this.element.step = this.step;
    this.updateState(this.element.value);
    this.banners.sort(function(a, b) {
      return b.size - a.size;
    });
    jQuery(this.element).on('input', this.oninput);
  };

  AppuioRangeSlider.prototype.oninput = function oninput(e) {
    this.updateState(e.target.value);
  };

  function updateState(value) {
    var valueMem = jQuery(this.valueMemory);
    var valueCpu = jQuery(this.valueCpu);
    var valuePricePerDay = jQuery(this.valuePricePerDay);
    var valuePricePerMonth = jQuery(this.valuePricePerMonth);
    var dedicatedInfo = jQuery(this.dedicatedInfo);
    var price = this.calcPrice(value);

    valuePricePerDay.text(formatPrice(this.language, price));
    valuePricePerMonth.text(formatPrice(this.language, price * ONE_MONTH));
    valueMem.text(formatUnit(value));
    valueCpu.text(this.calcCpu(value));

    dedicatedInfo.toggle(value > 10000);
    updateActiveBanner.call(this, value);
  }

  function updateActiveBanner(value) {
    var banner = this.banners.find(function(banner) {
      return banner.size <= value;
    });

    if (banner === undefined) {
      return;
    }

    jQuery(this.banner + '.active').removeClass('active');
    jQuery(this.banner + '--' + banner.name).addClass('active');
  }

  function formatPrice(language, price) {
    return price.toLocaleString(language, {
      minimumFractionDigits: 2
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

  var DEFAULT_OPTIONS = {
    updateState: updateState,
    min: 512,
    max: 20480,
    step: 512,
    language: getDocumentLanguage(),
    calcPrice: calcPrice,
    calcCpu: calcCpu,
    valueMemory: '.memoryvalue',
    valueCpu: '.cpuvalue',
    valuePricePerDay: '.pricevalueperday',
    valuePricePerMonth: '.pricevaluepermonth',
    dedicatedInfo: '.offers-package-dedicated-info',
    banners: BANNERS,
    banner: '.offers-package'
  };

  function getAttributeOptions(element) {
    var $element = jQuery(element);

    return {
      valueMemory: $element.data('appuio-value-memory'),
      valueCpu: $element.data('appuio-value-cpu'),
      valuePricePerDay: $element.data('appuio-value-price-per-day'),
      valuePricePerMonth: $element.data('appuio-value-price-per-month'),
      dedicatedInfo: $element.data('appuio-dedicated-info'),
      bannerClass: $element.data('appuio-banner'),
      max: element.max,
      min: element.min,
      step: element.step
    };
  }

  jQuery.fn.appuioRangeSlider = function(options) {
    this.each(function() {
      new AppuioRangeSlider(
        this,
        jQuery.extend(
          {},
          DEFAULT_OPTIONS,
          options || {},
          getAttributeOptions(this)
        )
      );
    });
  };

  jQuery('[data-appuio-range-slider]').appuioRangeSlider();
});
