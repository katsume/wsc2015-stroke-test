class Verifier {

	constructor(){

		this._lut= [
			{
				id: '63070541',
				value: 'ほし'
			},
			{
				id: '21076543',
				value: 'まる'
			},
			{
				id: '0642',
				value: 'しかく'
			},
			{
				id: '076543210764',
				value: 'らせん'
			},
			{
				id: '63263262',
				value: 'ぎざぎざ'
			},
			{
				id: '10756543',
				value: 'はーと'
			}
		];
	}

	verify(route){

		if(!route){
			return;
		}

		var cost= 0,
			minCost= Infinity,
			answer= null;

		this._lut.forEach((target, index)=>{
			cost= this._levenstein(route, target.id);
			if(cost<minCost){
				minCost= cost;
				answer= index;
			}
		});

		if(typeof answer!=='number'){
			return;
		}

		console.log(route, this._lut[answer].id, this._lut[answer].value);
	}

	_levenstein(s1, s2){

		var m = s1.length;
		var n = s2.length;
		var matrix = [];
		var line;
		var i;
		var j;

		for ( i=0 ; i<=m ; i++ ){
			line = [];
			for ( j=0 ; j<=n ; j++){
				if (i!=0){
					line.push(0)
				}else{
					line.push(j);
				}
			}
			line[0] = i;
			matrix.push(line);
		}

		var cost;
		for( i=1 ; i<=m ; i++ ){
			for( j=1 ; j<=n ; j++ ){
				if (s1.charAt(i-1)==s2.charAt(j-1)){
					cost=0;
				}else{
					cost=1;
				}
				matrix[i][j] = Math.min( matrix[i-1][j]+1, matrix[i][j-1]+1, matrix[i-1][j-1]+cost );
			}
		}

		return matrix[m][n];
	}
}

module.exports= Verifier;
