var _= require('underscore');

module.exports= class {

	constructor(elm){

		this._elm= elm;
		this._ctx= elm.getContext('2d');

		window.addEventListener(
			'resize',
			_.debounce(this._resizeHandler.bind(this), 1000)
		);

		this._resizeHandler();
	}

	_resizeHandler(){
		this._elm.width= window.innerWidth;
		this._elm.height= window.innerHeight;
	}

	render(points){
		if(!points.length || points.length<=0){
			return;
		}

		var ctx= this._ctx;

		ctx.lineWidth= 1;
		ctx.strokeStyle= 'white';

		ctx.clearRect(0, 0, this._elm.width, this._elm.height);
		ctx.beginPath();

		ctx.moveTo(points[0].e(1), points[0].e(2));
		points.forEach((point)=>{
			ctx.lineTo(point.e(1), point.e(2));
		});
		ctx.stroke();
	}
}
