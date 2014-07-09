(function ($) {

  Drupal.behaviors.applyAccordion = {
    attach: function (context, settings) {
      if($('.accordion', context).length > 0) {

        $(".accordion", context).accordion({
         autoHeight: false
        });
      }
    }
  };
})(jQuery);
