(function() {

  /** private */
  var DATA_KEY = 'bs.modal';

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
    function Modal(target) {
      /** 初期化処理 */
      this._isShown = false;
      this._$targetModal = target;
      this._$backdrop = $(Selector.BACKDROP);
    };

    Modal.prototype.trigger = function() {
      if (this._isShown === false) {
        this._show();
      } else {
        this._hide();
      }
    }

    Modal.prototype._hide = function() {
      this._$targetModal.removeClass(ClassName.SHOW);
      this._$targetModal.css('display', 'none');
      this._isShown = false;
    }

    Modal.prototype._show = function() {
      this._$targetModal.css('display', 'block');
      this._$targetModal.addClass(ClassName.SHOW);
      this._isShown = true;
    }

    /** クラスを返している */
    return Modal;
  }();

  /** clickされたときのイベントを登録 */
  $(document).on('click', Selector.DATA_TOGGLE, function() {

    /** modalとして開くdom(ターゲット)を取得.つまりどのmodalが開かれるのかを取得している */
    const targetModalId = $(this).data('target');
    const $targetModal = $(targetModalId);

    /** そのtargetのdomは、すでにmodalオブジェクトを持っているか？ */
    let data = $targetModal.data(DATA_KEY);

    if (!data) {
      /** 持っていないのなら、modalオブジェクトを生成 */
      data = new Modal($targetModal);
      /** modalオブジェクトをdomに紐付け */
      $targetModal.data(DATA_KEY, data);

    }
    /** イベントハンドラはtriggerだけ知っていれば良い */
    data.trigger();

//    /** overlayを動的に生成して、表示する */
//    const $backdrop = $(document.createElement('div'));
//    $backdrop.addClass(Selector.BACKDROP);
//    $backdrop.appendTo(document.body);
//    $backdrop.addClass(ClassName.SHOW);
  });
})();
