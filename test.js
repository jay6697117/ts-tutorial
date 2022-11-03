
class Button {
    value;
    constructor(value) {
      this.value = value;
    }
    click = () => {
      console.log('click this.value :', this.value);
    }
  }

  let button = new Button("hello");

  setTimeout(button.click, 3000); // hello
