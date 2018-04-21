(function() {

  var Modal = function() {

    /** clickされたときのイベントを登録 */
    $(document).on('click', '[data-toggle]', function() {

      /** modalのターゲットを取得 */
      const targetModalId = $(this).data('target');
      const $targetModal = $(targetModalId);

      /** modalを表示 */
      $targetModal.css('display', 'block');
      $targetModal.addClass('show');

      /** overlayを動的に生成して、表示する */
      const $overlay = $(document.createElement('div'));
      $overlay.addClass('modal-backdrop');
      $overlay.css('display', 'block');
      $overlay.appendTo(document.body);
      $overlay.addClass('show');
    });

  }();

})();
