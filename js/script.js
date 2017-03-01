function chess(){
	document.write('<div class="all">')
	for(j=0; j<4; j++){
	   document.write('<div class="one">')
			for(i=0; i<4; i++){
				document.write('<div class="white"></div>')
				document.write('<div class="black"></div>')
		    }
		document.write('</div>')
		document.write('<div class="two">')
			for(i=0; i<4; i++){
			    document.write('<div class="black"></div>')
			    document.write('<div class="white"></div>')
		    }
		document.write('</div>')
	   }
	document.write('</div>')
}
chess()