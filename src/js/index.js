var Stroke= require('./models/stroke');

var Renderer= require('./views/renderer'),
	Touch= require('./views/touch');

document.addEventListener('DOMContentLoaded', ()=>{

	var stroke= new Stroke();

	var stage= document.querySelector('.stage'),
		renderer= new Renderer(stage),
		touch= new Touch(stage);

	touch.on('reset', (point)=>{
		stroke.reset(point);
		requestAnimationFrame(render);
	});

	touch.on('update', (point)=>{
		stroke.append(point);
		requestAnimationFrame(render);
	});

	var render= ()=>{
		renderer.render(stroke.points);
	};
	render();

});
