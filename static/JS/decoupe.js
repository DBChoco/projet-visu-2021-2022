<script type="text/javascript"></script>
// Découpe bouchère
//d3.select('#human_cut').attr('transform', 'scale(0.5)');
let data = [{body_part : 'head', frequency : 0.05},
			{body_part : 'chest', frequency : 0.10},
			{body_part : 'arm_right', frequency : 0.25},
			{body_part : 'arm_left', frequency : 0.10},
			{body_part : 'hand_left', frequency : 0.11},
			{body_part : 'hand_right', frequency : 0.15},
			{body_part : 'pelvis', frequency : 0.62},
			{body_part : 'leg_right', frequency : 0.45},
			{body_part : 'leg_left', frequency : 0.62},
			{body_part : 'foot_right', frequency : 0.55},
			{body_part : 'foot_left', frequency : 0.80}];

let colors = ['#004166', '#004166', '#004166', '#004166', '#004166', '#004166', '#004166', '#004166', '#004166', '#004166'];

function getColorFromFrequency(frequency){
		if (frequency < 0.10) return colors[0];
		if (frequency < 0.20) return colors[1];
		if (frequency < 0.30) return colors[2];
		if (frequency < 0.40) return colors[3];
		if (frequency < 0.50) return colors[4];
		if (frequency < 0.60) return colors[5];
		if (frequency < 0.70) return colors[6];
		if (frequency < 0.80) return colors[7];
		if (frequency < 0.90) return colors[8];
		return '#000000';
}

d3.selectAll('path')
		.style('fill', function(){
			  for(let i = 0; i < data.length; i++){
				    if(this.getAttribute('id') == data[i]['body_part']) return getColorFromFrequency(data[i]['frequency']);
			  }
		})
		.on('click', function(){
			  d3.select(this).attr('class', 'selected')
});