(function() {

  var Modal = function() {
    /** 抽象化されたmodalオブジェクト: 各modalの情報を抽象化して、まとめて扱えるようにする */

  }();

  var Selector = {
    BACKDROP: 'modal-backdrop',
    DATA_TOGGLE: '[data-toggle="modal"]'
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  /** clickされたときのイベントを登録 */
  $(document).on('click', Selector.DATA_TOGGLE, function() {

    /** modalのターゲットを取得 */
    const targetModalId = $(this).data('target');
    const $targetModal = $(targetModalId);

    /** modalを表示 */
    $targetModal.css('display', 'block');
    $targetModal.addClass(ClassName.SHOW);

    /** overlayを動的に生成して、表示する */
    const $backdrop = $(document.createElement('div'));
    $backdrop.addClass(Selector.BACKDROP);
    $backdrop.css('display', 'block');
    $backdrop.appendTo(document.body);
    $backdrop.addClass(ClassName.SHOW);
  });
  /** 動く、、、そして、複数のmodalにも対応できている。これは何に困るんだろう */
  /** 再利用性が低い */

})();
