/* MEHRERE AUFKLAPPBAR */
document.addEventListener('DOMContentLoaded', () => {

  const faqTitles = document.querySelectorAll('.faq-item > a');

  if (faqTitles.length > 0) {
    faqTitles.forEach( el => {
      el.addEventListener('click', () => el.parentElement.classList.toggle('visible') );
    });
  }

});

/* EINZELN AUFKLAPPBAR *//*
document.addEventListener('DOMContentLoaded', () => {

  const faqTitles = document.querySelectorAll('.faq-item > a');

  if (faqTitles.length > 0) {
    faqTitles.forEach( el => {
      el.addEventListener('click', () => {
        var faqItem = el.parentElement;
        if (faqItem.classList.contains('visible')) {
          closeAllFaq();
        } else {
          closeAllFaq();
          faqItem.classList.toggle('visible');
        }
      });
    });
  }

  function closeAllFaq() {
    const visibleFaqItems = document.querySelectorAll('.faq-item.visible');
    if (visibleFaqItems.length > 0) {
      visibleFaqItems.forEach(i => i.classList.remove('visible'));
    }
  }

});
*/