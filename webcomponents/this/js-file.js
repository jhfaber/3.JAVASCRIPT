class NameGenerator {
    constructor() {
      const btn = document.querySelector('button')
      this.names = ['Max', 'Manu', 'Anna']
      this.currentName = 0
      btn.addEventListener('click', this.addName)
    }
  
    addName() {
      const name = new NameField(this.names[this.currentName])
      this.currentName++
      if (this.currentName >= this.names.length) {
        this.currentName = 0
      }
    }
  }