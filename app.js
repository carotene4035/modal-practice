/** このかきかただと１つのmodalにしかたいおうできないんだよなぁ */

function Modal(el) {
  this.$el = el;
  /** overlayの取得 */
  this.$overlay    = $('#modal_overlay');
  /** modal本体の取得 */
  this.$modal_body = $('#modal');
  /** 閉じるボタンの取得 */
  this.$close_trigger = $('#close_trigger');
  /** イベントハンドラの設定 */
  this.handleEvents();
}

Modal.prototype.handleEvents = function() {
  const self = this;

  /** triggerがclickされたらmodal画面を開く */
  this.$el.on('click', function(e) {
    self.show();
  });

  /** overlayがclickされたら画面を閉じる */
  this.$overlay.on('click', function() {
    self.hide();
  });

  /** closeボタンがclickされたら画面を閉じる */
  this.$close_trigger.on('click', function() {
    self.hide();
  });
}

/** modal表示処理 */
Modal.prototype.show = function() {
  this.$overlay.fadeIn();
  this.$modal_body.fadeIn();
}

/** modal消去処理 */
Modal.prototype.hide = function() {
  this.$overlay.fadeOut();
  this.$modal_body.fadeOut();
}

const modal = new Modal($("#modal_trigger"));
