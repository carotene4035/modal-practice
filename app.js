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
  /*
   * 上記の書き方は汎用性が低い(具体的なもの[id属性]に依存しすぎている)
   *  なぜなら、#modalなどはid指定なので、１つのページに１つしかおけない
   *  modalを複数作りたい場合にこの書き方だと対応できない
   *
   * → data属性を使った表記をし、
   *   clickイベントが発生した時にmodal要素を取得しに行けば良い.
   *   そしたら複数のmodalにも対応できる
   */
}

/*
 * はじめからイベントを割り当ててしまっている
 * ずっとそのまま
 */
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


/** clickされたときのイベントを登録 */
$(document).on('click', '[data-toggle]', function() {

  /** modalのターゲットを取得 */
  const targetModalId = $(this).data('target');
  const $targetModal = $(targetModalId);

  /** modalを表示 */
  $targetModal.css('display', 'block');
  $targetModal.addClass('show');

  /** overlayを動的に生成して、表示する */


  /** どうやったらfadeInするのか、未だわかんないやw */
});
