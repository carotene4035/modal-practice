function Modal(el) {
  this.$el = el;
  /** overlayの取得 */
  this.$overlay = $('#modal-overlay');
  this.handleEvents();
}

Modal.prototype.handleEvents = function() {
  const self = this;

  this.$el.on('click', function(e) {
    self.$overlay.fadeIn();
    // console.log(this); // イベントが発生したjavascriptのdom要素
  });
}

const modal = new Modal($("#modal-trigger"));
