function Modal(el) {
  this.$el = el;

  /** overlayの取得 */
  this.$overlay    = $('#modal-overlay');
  /** modal本体の取得 */
  this.$modal_body = $('#modal');
  /** イベントハンドラの設定 */
  this.handleEvents();
}

Modal.prototype.handleEvents = function() {
  const self = this;

  this.$el.on('click', function(e) {

    /** overlayの表示 */
    self.$overlay.fadeIn();

    /** modal本体の表示 */
    self.$modal_body.fadeIn();
    // console.log(this); // イベントが発生したjavascriptのdom要素
  });

  /** overlayがclickされたら画面を閉じる */
  this.$overlay.on('click', function() {
    self.$overlay.fadeOut();
    self.$modal_body.fadeOut();
  });
}

const modal = new Modal($("#modal-trigger"));
