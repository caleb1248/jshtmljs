class JavaScript extends HTMLElement {
  constructor() {
    super();
  }

  load() {
    var expression = /<!--\{[\s\S]*?\}-->/gm;

    var elementCopyMatch = this.innerHTML.match(expression);

    elementCopyMatch != null
      ? elementCopyMatch.forEach((exp) => {
          this.innerHTML = this.innerHTML.replace(
            exp,
            eval(exp.replace(/<!--\{([\s\S]*?)\}-->/gm, "$1"))
          );
        })
      : console.log("no matches");
  }
}
customElements.define("java-script", JavaScript);