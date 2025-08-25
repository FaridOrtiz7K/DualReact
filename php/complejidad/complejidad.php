<?php
include 'header_tab.php';
?>



<!-- BANNER -->
<!--<div class="banner"></div>-->
<!-- Brian<div class="site-cover2 site-cover2-sm same-height overlay single-page" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/cel_map2.jpg') no-repeat center; background-size: cover; cursor: default;">
	<div class="container">
	  <div class="row same-height justify-content-center">
		<div class="col-md-12">
		  <div class="post-entry text-center">
			<div class="text" style="padding-top: 10px;">
			<h1>Índice de complejidad económica a nivel de Localidad y Municipio en Hidalgo</h1>
        <h2>Usando datos de DENUE 2024</h2>
        <p>El índice de complejidad económica es una medida
             utilizada para analizar la diversidad y la sofisticación de las
              actividades económicas de una región. Este estudio se enfoca
               en el estado de Hidalgo y utiliza datos del Directorio Estadístico
                Nacional de Unidades Económicas (DENUE) del año 2024 para evaluar el
                 nivel de complejidad económica a nivel de localidad y municipio.</p>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>  -->


	<section class="section">
		
		<div class="container">
		<h1>Índice de complejidad económica a nivel de Localidad y Municipio en Hidalgo</h1>
        <h2>Usando datos de DENUE 2024</h2>
        <p>El índice de complejidad económica es una medida
             utilizada para analizar la diversidad y la sofisticación de las
              actividades económicas de una región. Este estudio se enfoca
               en el estado de Hidalgo y utiliza datos del Directorio Estadístico
                Nacional de Unidades Económicas (DENUE) del año 2024 para evaluar el
                 nivel de complejidad económica a nivel de localidad y municipio.</p>
        
        <div id="map">
            <script src="datos/geojsons/municipal.js"></script>
            <script src="datos/geojsons/indice_complejidad_localidad_c_nombre.js"></script>
            <script src="App.js"></script>
        </div>
    </div>
			

	</section>
	
	
<!--footer inicio brian--> 
<?php
//include 'footer_tab.php';
?>
	 <!-- /.site-footer -->

    

  </body>
  </html>
