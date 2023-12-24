export default class Observable {
	_value = null;
	observers = [];

	constructor(value) {
		this._value = value;
	}

	set value(newValue) {
		this._value = newValue;
	}

	get value() {
		return this._value;
	}

	subscribe(callback) {
		this.observers.push(callback);
	}

	notify() {
		this.observers.forEach((observer) => observer(this._value));
	}
}
