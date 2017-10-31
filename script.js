var botonSearch = document.getElementById("search");
botonSearch.addEventListener('click', buscarNombre);

var inputSearch = document.getElementById("buscarnombre");
inputSearch.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        buscarNombre();
    }
});



function buscarNombre()
{
	let nombre = document.getElementById('buscarnombre').value;
	let option = document.getElementById('clase').value;
	let apiURL = 'https://swapi.co/api/' + option + '/?search=' + nombre;

	


	const xhr = new XMLHttpRequest();
	xhr.open('GET', apiURL, true); /*el true es para decir que lo ejecute asincronamente*/
	xhr.onload = () => 
	{ /* => significa function y el onload se refiere a que va a hacer cuando carge la informacion*/
		let json = JSON.parse(xhr.responseText); 
		let resultado = json.results[0];

		
		

		if(option=='people')
		{
			if(nombre.length==0)
			{
				
				let array = json.results
				

					for(i=0; i<array.length;i++){
						document.getElementById('mostrarcomentario1').innerHTML = "Please enter a name of People to search like:<br>";
						document.getElementById('mostrarcomentario2').innerHTML += array[i].name + "<br>";
					}

			}
			else
			{			
				
				document.getElementById('mostrarcomentario1').style.display = 'none';
				document.getElementById('mostrarcomentario2').style.display = 'none';


				if (nombre=='luke'||nombre=='Luke'||nombre=='LUKE') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src='./img/luke.jpg'>"; 
				}
				else if (nombre=='yoda'||nombre=='Yoda'||nombre=='YODA') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/yoda.jpg>"; 
				}
				else if (nombre=='han'||nombre=='Han'||nombre=='HAN'||nombre=='solo'||nombre=='SOLO'||nombre=='Solo') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/hansolo.jpg>"; 
				}
				else if (nombre=='leia'||nombre=='Leia'||nombre=='LEIA'||nombre=='ORGANA'||nombre=='organa') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/leiaorgana.jpg>"; 
				}
				else if (nombre=='r2d2'||nombre=='r2'||nombre=='2'||nombre=='R2'||nombre=='R2D2') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/r2d2.jpg>"; 
				}
				else if (nombre=='anakin'||nombre=='Anakin'||nombre=='ANAKIN') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/anakin.jpg>"; 
				}
				else if (nombre=='darth'||nombre=='darth vader'||nombre=='DARTH VADER'||nombre=='Darth Vader'||nombre=='vader'||nombre=='Vader') 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/darthvader.jpg>"; 
				}
				else 
				{
					document.getElementById('mostrarfoto').innerHTML = "<img src=./img/personajes.jpg>"; 
				}
				
				

				document.getElementById('mostrarname').innerHTML = resultado.name; 

				document.getElementById('mostrar1').innerHTML = "HEIGHT<br>" +  resultado.height; 

				document.getElementById('mostrar2').innerHTML = "MASS<br>" +  resultado.mass; 

				document.getElementById('mostrar3').innerHTML = "GENDER<br>" +  resultado.gender; 

				document.getElementById('mostrar4').innerHTML = "EYE COLOR<br>" +  resultado.eye_color;

				document.getElementById('mostrar5').innerHTML = "HAIR COLOR<br>" +  resultado.hair_color; 

				document.getElementById('mostrar6').innerHTML = "BIRTH YEAR<br>" +  resultado.birth_year;


			}
		}	

		
		if(option=='planets')
		{
			
			if(nombre.length==0)
			{
				
				let array = json.results
				

					for(i=0; i<array.length;i++){
						document.getElementById('mostrarcomentario1').innerHTML = "Please enter a name of Planet to search like:<br>";
						document.getElementById('mostrarcomentario2').innerHTML += array[i].name + "<br>";
					}

			}
			else
			{			
				
				document.getElementById('mostrarcomentario1').style.display = 'none';
				document.getElementById('mostrarcomentario2').style.display = 'none';
			


					if (nombre=='tatooine'||nombre=='Tatooine'||nombre=='TATOOINE'||nombre=='tato'||nombre=='TATO') 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/tatooine.jpg>"; 
					}
					else if (nombre=='naboo'||nombre=='Naboo'||nombre=='NABOO'||nombre=='NABOO') 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/naboo.jpg>"; 
					}
					else 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/galaxia.jpg>"; 
					}
					
					

					document.getElementById('mostrarname').innerHTML = resultado.name; 

					document.getElementById('mostrar1').innerHTML = "CLIMATE<br>" +  resultado.climate; 

					document.getElementById('mostrar2').innerHTML = "DIAMETER<br>" +  resultado.diameter; 

					document.getElementById('mostrar3').innerHTML = "GRAVITY<br>" +  resultado.gravity; 

					document.getElementById('mostrar4').innerHTML = "TERREIN<br>" +  resultado.terrein; 

					document.getElementById('mostrar5').innerHTML = "POPULATION<br>" +  resultado.population; 

					document.getElementById('mostrar6').innerHTML = "ORBITAL PERIOD<br>" +  resultado.orbital_period;


			}
		}
	

		if(option=='species')
		{
			if(nombre.length==0)
			{
				
				let array = json.results
				

					for(i=0; i<array.length;i++){
						document.getElementById('mostrarcomentario1').innerHTML = "Please enter a name of Specie to search like:<br>";
						document.getElementById('mostrarcomentario2').innerHTML += array[i].name + "<br>";
					}

			}
			else
			{			
				
				document.getElementById('mostrarcomentario1').style.display = 'none';
				document.getElementById('mostrarcomentario2').style.display = 'none';
			



					if (nombre=='Wookiee'||nombre=='wookiee'||nombre=='WOOKIEE'||nombre=='woo'||nombre=='WOOKIE'||nombre=='WOO'||nombre=='wookie') 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/wookie.jpg>"; 
					}
					else if (nombre=='yoda'||nombre=='Yoda'||nombre=='YODA') 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/yodaespecie.jpg>"; 
					}
					else 
					{
						document.getElementById('mostrarfoto').innerHTML = "<img src=./img/especies.jpg>"; 
					}
					
					

					document.getElementById('mostrarname').innerHTML = resultado.name; 

					document.getElementById('mostrar1').innerHTML = "DESIGNATION<br>" +  resultado.designation; 

					document.getElementById('mostrar2').innerHTML = "SKIN COLORS<br>" +  resultado.skin_color; 

					document.getElementById('mostrar3').innerHTML = "EYE COLORS<br>" +  resultado.eye_colors; 

					document.getElementById('mostrar4').innerHTML = "LANGUAGE<br>" +  resultado.language; 

					document.getElementById('mostrar5').innerHTML = "AVERAGE HEIGHT<br>" +  resultado.average_height; 

					document.getElementById('mostrar6').innerHTML = "AVERAGE LIFESPAN<br>" +  resultado.average_lifespan;

			}
		}

	}	

		xhr.onerror = () => {
			console.error('Data de la API no encontrada')
		}

		xhr.send();

}