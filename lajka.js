function waitForAddedNode(params) {
    new MutationObserver(function(mutations) {
        var el = document.getElementsByClassName(params.clazz);
        console.log(el)
        if (el[0]) {
            this.disconnect();
            params.done(el);
        }
    }).observe(params.parent || document, {
        subtree: !!params.recursive,
        childList: true,
    });
}

waitForAddedNode({
  clazz: 'approve-btn',
  parent: document.querySelector('.mr-widget-approvals-container'),
  recursive: false,
  done: function(el) {
	var buttonWhereLajkaShouldBe = document.getElementsByClassName('approve-btn')
	console.log(buttonWhereLajkaShouldBe)
	var lajka = browser.extension.getURL('lajka.png');
	buttonWhereLajkaShouldBe[0].innerHTML = `<img src="${lajka}" />`
  }
})
