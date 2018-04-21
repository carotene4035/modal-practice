(function() {

  /** private */
  var Selector = {
    BACKDROP: 'modal-backdrop',
    DATA_TOGGLE: '[data-toggle="modal"]'
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Modal = function() {
    /** クラス */
    function Modal() {
      this._isShown = false;
    };
    Modal.prototype.show = function() {
      console.log('見せるよ');
    }
    /** クラスを返している */
    return Modal;
  }();

  console.log(Modal);
  console.log(new Modal); // これでオブジェクトになる


  /** clickされたときのイベントを登録 */
  $(document).on('click', Selector.DATA_TOGGLE, function() {

    /** modalのターゲットを取得 */
    const targetModalId = $(this).data('target');
    const $targetModal = $(targetModalId);

    /** やりたいこと */

    /** modalの操作を、ここ（イベント定義）から追い出したい */
    /** modalオブジェクト内に収めたい */


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
