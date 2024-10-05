class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completedTodos = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  updateCompleted = (increment) => {
    if (increment) {
      this._completedTodos += 1;
    } else {
      this._completedTodos -= 1;
    }
    this._updateText();
  };

  updateTotal = (increment) => {
    if (increment) {
      this._total += 1;
    } else {
      this._total -= 1;
    }
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completedTodos} out of ${this._total} completed`;
  }
}

export default TodoCounter;
