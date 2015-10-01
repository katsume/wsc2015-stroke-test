const RESOLUTION= 50;

class Stroke {

	constructor(){
		this.reset();
	}

	reset(point){
		this._points= [];
		this._routeX= '';
		this._routeY= '';
		this._lastPoint= null;

		if(point){
			this._points.push(point);
			this._lastPoint= {
				x: point.x,
				y: point.y
			}
		}
	}

	append(point){
		this._points.push(point);

		var dx= point.x - this._lastPoint.x,
			dy= point.y - this._lastPoint.y;

		var lastRouteX= this._routeX.charAt(this._routeX.length-1),
			lastRouteY= this._routeY.charAt(this._routeY.length-1);

		if(Math.abs(dx)>RESOLUTION){

			this._lastPoint.x= point.x;

			if(dx>0 && lastRouteX!=='R'){
				this._routeX+= 'R';
			}

			if(dx<0 && lastRouteX!=='L'){
				this._routeX+= 'L';
			}
		}

		if(Math.abs(dy)>RESOLUTION){

			this._lastPoint.y= point.y;

			if(dy>0 && lastRouteY!=='D'){
				this._routeY+= 'D';
			}

			if(dy<0 && lastRouteY!=='U'){
				this._routeY+= 'U';
			}
		}
	}

	get points(){
		return this._points;
	}
}

module.exports= Stroke;
