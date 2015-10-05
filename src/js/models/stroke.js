var Sylvester= require('../libs/sylvester');

const DIST_RESOLUTION= 100;
const DEG_RESOLUTION= 8;

class Stroke {

	constructor(){
		this._points= [];
		this._route= '';
		this._lastPoint= null;
	}

	reset(point){

		var p= new Sylvester.Vector.create([point.x, point.y]);

		this._points= [p];
		this._route= '';
		this._lastPoint= p;
	}

	append(point){

		var p= new Sylvester.Vector.create([point.x, point.y]),
			d= p.subtract(this._lastPoint);

		this._points.push(p);

		if(d.modulus()>DIST_RESOLUTION){

			var tan= Math.atan2(d.e(1), d.e(2));
			tan+= Math.PI;
			tan= tan/(Math.PI*2)*DEG_RESOLUTION;
			tan= Math.round(tan)%DEG_RESOLUTION;

			if(this._route.charAt(this._route.length-1)!==String(tan)){
				this._route+= String(tan);
			}

			this._lastPoint= p;
		}
	}

	get points(){
		return this._points;
	}

	get route(){
		return this._route;
	}
}

module.exports= Stroke;
