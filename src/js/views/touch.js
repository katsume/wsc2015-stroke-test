var _= require('underscore'),
	Backbone= require('backbone'),
	$= require('jquery');

class Touch {

	constructor(elm){

		this._touching= false;

		elm.addEventListener('mousedown', this._touchstartHandler.bind(this));
		elm.addEventListener('mousemove', this._touchmoveHandler.bind(this));
		elm.addEventListener('mouseup', this._touchendHandler.bind(this));

		elm.addEventListener('touchstart', this._touchstartHandler.bind(this));
		elm.addEventListener('touchmove', this._touchmoveHandler.bind(this));
		elm.addEventListener('touchend', this._touchendHandler.bind(this));
	}

	_touchstartHandler(e){

		if(this._touching){
			return;
		}
		this._touching= true;
		e.preventDefault();

		this.trigger('reset', {
			x: e.pageX,
			y: e.pageY
		});
	}

	_touchmoveHandler(e){

		if(!this._touching){
			return;
		}
		e.preventDefault();

		this.trigger('update', {
			x: e.pageX,
			y: e.pageY
		});
	}

	_touchendHandler(e){

		if(!this._touching){
			return;
		}
		this._touching= false;
		e.preventDefault();
	}
}

_.extend(Touch.prototype, Backbone.Events);
module.exports= Touch;
