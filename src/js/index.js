var Stroke= require('./models/stroke'),
	Verifier= require('./models/verifier');

var Renderer= require('./views/renderer'),
	Touch= require('./views/touch');

document.addEventListener('DOMContentLoaded', ()=>{

	var stroke= new Stroke(),
		verifier= new Verifier();

	var stage= document.querySelector('.stage'),
		renderer= new Renderer(stage),
		touch= new Touch(stage);

	touch.on('reset', (point)=>{
		document.querySelector('.answer').innerHTML= '';

		stroke.reset(point);
		requestAnimationFrame(render);
	});

	touch.on('update', (point)=>{
		stroke.append(point);
		requestAnimationFrame(render);
	});

	touch.on('end', ()=>{
		verifier.verify(stroke.route);
	});

	var render= ()=>{
		renderer.render(stroke.points);
	};
	render();

});
