# cursor-101
Cursor 101 for SmartUp devs




## prompt to chatgpt

```
Conectora es un proyecto que utiliza agentes de inteligencia artificial para construir redes de ciertos temas. En este MVP estamos construyendo una red nacional del turismo. Para partir de eso, lo que necesitamos hacer es scrapear todos los datos de una red ya existente del turismo, porque lo que vamos a hacer es contactar a cada una de las personas, lugares o empresas que aparezcan en esa red y expandir así la conexión y perfiles que se pueden hacer entre todos esos actores. En este caso específico, necesitamos diseñar un scraper que emule básicamente los resultados que uno obtiene al utilizar el selector de búsqueda de la base de datos de Cernatur, que pase por todos los filtros, que pase por todas las opciones y scrapee toda la data que devuelva en un dataset gigante.






https://serviciosturisticos.sernatur.cl/nueva_busqueda.php?page=1&tipo_servicio=16&region=13

al hacer un get: 

   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
   <html lang="es">
   <head>
    <meta charset="utf-8">
    <title>Buscador de Servicios Turisticos - SERNATUR</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/carousel.css">
    <link rel="stylesheet" href="./css/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
    <style>
    	select{
       		display: online;
   		}
	</style>
</head>
<body>
	<nav>
       <div id="content_central">
           <h1 class="logo_sernatur"></h1>
           <a id="menu-toggle" onclick="javascript:CambiarEstilo();" class="menu-toggle"><i class="fas fa-bars"></i></a>
           <ul id="menu-toggle-display" class="menu-display">
               <li><a href="index.php">INICIO</a></li>
               <li><a href="/descargas.php">INFORMACIÓN PARA EL TURISTA</a></li>
               <li><a target="_blank" href="https://www.sernatur.cl/oficinas-informacion/">OFICINAS DE INFORMACIÓN TURÍSTICA</a></li>
               <li><a href="/contacto.php">CONTACTO</a></li>
           </ul>
       </div>
   </nav>
   <header>
       <div id="buscador">
           <form method="GET" action="./nueva_busqueda.php">

               <input type="hidden" name="page" value="1" />

               <div class="centrar">
                   <SELECT class="input-header alojamiento" name="tipo_servicio" onchange="carga_clase_servicio();" id="servicio">
                       <option value="0" selected="">Seleccionar Servicio</option>
                                                  <option value="3"   >Agencia de viajes</option>
                                                      <option value="1"   >Alojamiento turístico</option>
                                                      <option value="10"   >Arriendo de Vehículos</option>
                                                      <option value="16" selected  >Guías de Turismo</option>
                                                      <option value="2"   >Restaurantes y similares</option>
                                                      <option value="12"   >Servicios Culturales</option>
                                                      <option value="14"   >Servicios de esparcimiento</option>
                                                      <option value="15"   >Servicios de Producción Artesanal</option>
                                                      <option value="22"   >Servicios de Souvenir</option>
                                                      <option value="17"   >Servicios deportivos</option>
                                                      <option value="18"   >Tour operador</option>
                                                      <option value="8"   >Transporte de pasajeros por ferrocarril</option>
                                                      <option value="6"   >Transporte de pasajeros por vía aérea</option>
                                                      <option value="5"   >Transporte de pasajeros por vía Marítima</option>
                                                      <option value="19"   >Transporte de Pasajeros Vía Terrestre</option>
                                                      <option value="13"   >Turismo aventura</option>
                           
                   </select>
                                          <SELECT class="input-header otros-inputs" name="clase_servicio" id="clase">
                           <option value="0" selected="">Seleccionar Clase</option>
                                                          <option value="1220"   >Especializado en Alta Montaña (con certificación nacional o internacional)</option>
                                                              <option value="1223"   >Especializado en Deslizamiento Sobre Nieve en Áreas no Delimitadas (con certificación nacional o internacional)</option>
                                                              <option value="1222"   >Especializado en Escalada en Roca (con certificación nacional o internacional)</option>
                                                              <option value="1224"   >Especializado en Excursionismo o Trekking (con certificación nacional o internacional)</option>
                                                              <option value="1221"   >Especializado en Montaña (con certificación nacional o internacional)</option>
                                                              <option value="1225"   >Especializado en Senderismo o Hiking (con certificación nacional o internacional)</option>
                                                              <option value="267"   >Especializado en Turismo Aventura</option>
                                                              <option value="265"   >General</option>
                                                              <option value="269"   >Local</option>
                                                              <option value="266"   >Sitio</option>
                                                      </select>
                       
                       <SELECT class="input-header otros-inputs" name="region" onchange="carga_comuna();" id="region">
                           <option value="0">Seleccionar Región</option>
                                                          <option value="15"  >Región de Arica y Parinacota</option>
                                                              <option value="1"  >Región de Tarapacá</option>
                                                              <option value="2"  >Región de Antofagasta</option>
                                                              <option value="3"  >Región de Atacama</option>
                                                              <option value="4"  >Región de Coquimbo</option>
                                                              <option value="5"  >Región de Valparaíso</option>
                                                              <option value="6"  >Región de O'Higgins</option>
                                                              <option value="16"  >Región de Ñuble</option>
                                                              <option value="7"  >Región del Maule</option>
                                                              <option value="8"  >Región del Bio Bío</option>
                                                              <option value="9"  >Región de La Araucanía</option>
                                                              <option value="14"  >Región de Los Ríos</option>
                                                              <option value="10"  >Región de Los Lagos</option>
                                                              <option value="11"  >Región de Aysén</option>
                                                              <option value="12"  >Región de Magallanes y La Antártica Chilena</option>
                                                              <option value="13" selected >Región Metropolitana</option>
                                                      </select>

                       <SELECT class="input-header otros-inputs" name="comuna" id="comuna">
                                                      <option value="0" selected="">Seleccionar Comuna</option>
                                                      <option value="1352"  >Alhue</option>
                                                      <option value="1342"  >Buin</option>
                                                      <option value="1343"  >Calera de tango</option>
                                                      <option value="1312"  >Cerrillos</option>
                                                      <option value="1313"  >Cerro navia</option>
                                                      <option value="1331"  >Colina</option>
                                                      <option value="1314"  >Conchali</option>
                                                      <option value="1353"  >Curacavi</option>
                                                      <option value="1315"  >El bosque</option>
                                                      <option value="1362"  >El monte</option>
                                                      <option value="1316"  >Estacion central</option>
                                                      <option value="1317"  >Huechuraba</option>
                                                      <option value="1318"  >Independencia</option>
                                                      <option value="1363"  >Isla de maipo</option>
                                                      <option value="1319"  >La cisterna</option>
                                                      <option value="13110"  >La florida</option>
                                                      <option value="13111"  >La granja</option>
                                                      <option value="13112"  >La pintana</option>
                                                      <option value="13113"  >La reina</option>
                                                      <option value="1332"  >Lampa</option>
                                                      <option value="13114"  >Las condes</option>
                                                      <option value="13115"  >Lo barnechea</option>
                                                      <option value="13116"  >Lo espejo</option>
                                                      <option value="13117"  >Lo prado</option>
                                                      <option value="13118"  >Macul</option>
                                                      <option value="13119"  >Maipu</option>
                                                      <option value="1354"  >Maria pinto</option>
                                                      <option value="1351"  >Melipilla</option>
                                                      <option value="13120"  >Ñuñoa</option>
                                                      <option value="1364"  >Padre hurtado</option>
                                                      <option value="1344"  >Paine</option>
                                                      <option value="13121"  >Pedro aguirre cerda</option>
                                                      <option value="1365"  >Peñaflor</option>
                                                      <option value="13122"  >Peñalolen</option>
                                                      <option value="1322"  >Pirque</option>
                                                      <option value="13123"  >Providencia</option>
                                                      <option value="13124"  >Pudahuel</option>
                                                      <option value="1321"  >Puente alto</option>
                                                      <option value="13125"  >Quilicura</option>
                                                      <option value="13126"  >Quinta normal</option>
                                                      <option value="13127"  >Recoleta</option>
                                                      <option value="13128"  >Renca</option>
                                                      <option value="1341"  >San bernardo</option>
                                                      <option value="13129"  >San joaquin</option>
                                                      <option value="1323"  >San jose de maipo</option>
                                                      <option value="13130"  >San miguel</option>
                                                      <option value="1355"  >San pedro</option>
                                                      <option value="13131"  >San ramon</option>
                                                      <option value="1311"  >Santiago</option>
                                                      <option value="1361"  >Talagante</option>
                                                      <option value="1333"  >Tiltil</option>
                                                      <option value="13132"  >Vitacura</option>
                           
               </select>
           </div>
           <div class="sellos-header">
               <div class="selloq check"><label class="check"><input type="checkbox" value="q" name="selloq" ><b></b> Con Sello de Calidad <span>Turística</span></label></div>
               <div class="sellos check"><label class="check2"><input type="checkbox" value="s" name="sellos" ><b></b>Con Sello de Sustentabilidad <span>Turística</span></label></div>
              
               <div class="sellos check"><label class="check4"><input type="checkbox" value="bp" name="sellobp" ><b></b>Compromiso <span>Buenas Prácticas</span></label></div>
           </div>
           <div class="centrar">
               <input name="nombre" class="nombre"  placeholder="Busca un servicio por su nombre" onFocus="if(this.placeholder=='Busca un servicio por su nombre') this.placeholder='';" value="">
               <button class="buscar">Buscar</button>
           </div>
           <p class="num-header">Tenemos 31061 servicios registrados en Sernatur<p>
           </form>
		</div>
	</header>
				<center>
				<p style="text-transform: uppercase;font-size: 18px;color: #6e6e6e;">
					<i class="far fa-clipboard"></i> Hemos encontrado <b style="font-family: gobCLbold;">817 servicios de Guías de Turismo</b> que coinciden con tú busqueda
				</p>
			</center>
				<div id="content">
    								<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18096007/inscripcion_56662/phpqZTAn8.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18096007/inscripcion_56662/phpqZTAn8.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/38911-alberto-avila-espinoza"> Alberto Avila Espinoza</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 972539882</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/38911-alberto-avila-espinoza">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_8107709/inscripcion_42265/phpoxD3F1.jpeg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_8107709/inscripcion_42265/phpoxD3F1.jpeg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/24512-alejandro-cabezas-maturana"> Alejandro Cabezas Maturana</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 995100807</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/24512-alejandro-cabezas-maturana">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_7529196/inscripcion_66142/phprWOk8r.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_7529196/inscripcion_66142/phprWOk8r.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/48391-alex-wladimir-ruedlinger-gonzalez"> Alex Wladimir Ruedlinger Gonzalez</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 964408381</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/48391-alex-wladimir-ruedlinger-gonzalez">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_19034762/inscripcion_47042/phpD6QnmE.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_19034762/inscripcion_47042/phpD6QnmE.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/29289-ana-contreras-jara-ecoturismo"> Ana Contreras Jara (Ecoturismo)</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 9 76122706</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en turismo aventura</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/29289-ana-contreras-jara-ecoturismo">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<img src="http://serviciosturisticos.sernatur.cl/images/noguias.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/42046-andrea-parra-garrido"> Andrea Parra garrido</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 982574329</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/42046-andrea-parra-garrido">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_20205585/inscripcion_42792/phpuVaeVl.jpeg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_20205585/inscripcion_42792/phpuVaeVl.jpeg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/25039-andres-munoz-jerez"> Andres Muñoz Jerez</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (59) 997154066</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en turismo aventura</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/25039-andres-munoz-jerez">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18487149/inscripcion_41815/phpeMaOGT.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18487149/inscripcion_41815/phpeMaOGT.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/24062-benjamin-andres-olate-carreno"> Benjamín Andrés Olate Carreño</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 942042438</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en excursionismo o trekking (con certificación nacional o internacional)</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/24062-benjamin-andres-olate-carreno">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_15636712/inscripcion_70123/phpTpIvhT.png" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_15636712/inscripcion_70123/phpTpIvhT.png">
															</div>
							<div class="detalle">
								<a class="nombre" href="/52374-berni-serrano"> Berni Serrano</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 952569111</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en turismo aventura</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/52374-berni-serrano">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_15636712/inscripcion_75261/phpzXwQJd.png" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_15636712/inscripcion_75261/phpzXwQJd.png">
															</div>
							<div class="detalle">
								<a class="nombre" href="/57513-berni-serrano-marquez"> Berni Serrano Marquez</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 952569111</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/57513-berni-serrano-marquez">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18257581/inscripcion_69455/phpxIuV8H.jpeg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18257581/inscripcion_69455/phpxIuV8H.jpeg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/51706-bianco-montiglia-buzeta"> Bianco Montiglia Buzeta</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> +5699757829</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en turismo aventura</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/51706-bianco-montiglia-buzeta">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_17414298/inscripcion_57909/phptgmGqK.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_17414298/inscripcion_57909/phptgmGqK.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/40158-carlos-alejandro-fernandez-cornejo"> Carlos Alejandro Fernández Cornejo</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 963078527</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/40158-carlos-alejandro-fernandez-cornejo">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_14519759/inscripcion_54262/php8EWjgK.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_14519759/inscripcion_54262/php8EWjgK.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/36509-carlos-antonio-gatica-vera"> CARLOS ANTONIO GATICA VERA</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 963202173</p>

																	<p><i class="fas fa-map-marker"></i>Especializado en excursionismo o trekking (con certificación nacional o internacional)</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/36509-carlos-antonio-gatica-vera">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<a class="ampliar" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_11873032/inscripcion_59231/phpFFm001.jpg" ></a>
									<img src="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_11873032/inscripcion_59231/phpFFm001.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/41480-claudia-del-carmen-bohorquez-ibanez"> Claudia del carmen Bohorquez Ibañez</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> 56930284249</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/41480-claudia-del-carmen-bohorquez-ibanez">Ver más</a>
						</div>
											<div class="main_caja">
							<div id="sellos">
															</div>

							<div class="foto_resul">
																									<img src="http://serviciosturisticos.sernatur.cl/images/noguias.jpg">
															</div>
							<div class="detalle">
								<a class="nombre" href="/22633-claudio"> claudio</a>
                				
								<p><i class="fas fa-location-arrow"></i> Región Metropolitana</p>
								<p><i class="fas fa-phone"></i> (56) 987285774</p>

																	<p><i class="fas fa-map-marker"></i>General</p>
								
                                
								<div style="display:flex;">
								<div class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</div>								</div>
								<div style="display:flex;">
    									    										<div class="sello-bp"></div>
    																	</div>

    							<div style="display:none;" class="rrss">
    								<a><i class="fab fa-facebook-f"></i></a>
    								<a><i class="fab fa-whatsapp"></i></a>
    								<a><i class="fab fa-twitter"></i></a>
    								<a><i class="fab fa-instagram"></i></a>
    							</div>
							</div>

							<a class="sig" href="/22633-claudio">Ver más</a>
						</div>
									<div id="paginacion"><ul><li class="ciclo-final numeracion active"><a href="nueva_busqueda.php?page=1&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">1</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=2&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">2</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=3&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">3</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=4&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">4</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=5&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">5</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=6&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">6</a></li><li class="ciclo-final numeracion "><a href="nueva_busqueda.php?page=7&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">7</a></li><li class="despues">        					<a href="nueva_busqueda.php?page=2&tipo_servicio=16&clase_servicio=0&region=13&comuna=0&nombre=&selloq=&sellos=&sellop=&sellobp=">
        					></a>
        		</li> </ul></div>		</div>

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
		<script type="text/javascript" src="./js/jquery.fancybox-1.3.4.pack.js"></script>
		<script type="text/javascript">
		    $(document).ready(function() {
		        $("a#single_image").fancybox();

		        $("a#inline").fancybox({
		            'hideOnContentClick': true
		        });

		        $("a.group").fancybox({
		            'transitionIn'  :   'elastic',
		            'transitionOut' :   'elastic',
		            'speedIn'       :   600,
		            'speedOut'      :   200,
		            'overlayShow'   :   false
		        });
		    });

    		var input = document.querySelectorAll("label.check input,label.check2 input");

		    if(input !== null) {
		        [].forEach.call(input, function(el) {

		            if(el.checked) {
		                el.parentNode.classList.add('c_on');
		            }

		            el.addEventListener("click", function(event) {
		                el.parentNode.classList.toggle('c_on');
		            }, false);
		        });
		    }

		    function carga_clase_servicio(){
		        var ser = $("#servicio option:selected").val();
		        $("#clase").html("");
		        $.ajax({
		            url         : '/logica/carga_clase_servicio.php',
		            type        : 'POST',
		            data        : {'servicio':ser},
		            success     : function( respuesta ) {
		                if(respuesta=='none'){
		                    $("#clase").hide();
		                }else{
		                    $("#clase").show();
		                    $("#clase").html(respuesta);
		                }
		            }
		        });
		    }

		    function carga_comuna(){
		        var region = $("#region option:selected").val();
		        $("#comuna").html('');
		        $.ajax({
		            url         : '/logica/carga_comuna.php',
		            type        : 'POST',
		            data        : {'region':region},
		            success     : function( respuesta ) {

		                $("#comuna").html(respuesta);
		            }
		        });
		    }

		    function CambiarEstilo() {
		        var elemento = document.getElementById("menu-toggle-display");
		        if(elemento.className == "menu-display") {
		            elemento.className = "menu-display-inherit";
		        }else {
		            elemento.className = "menu-display";
		        }
		    }
		</script>
		<div class="colophon">
	
	<div style="text-align: justify;" class="conoce-sellos">
		<div class="col-02 sellos-footer">
			<h4>CONOCE LOS SELLOS</h4>
			<a href="https://portalserviciosturisticos.sernatur.cl/diferenciate/calidad-turistica/sello-q/" target="_blank"><img alt="Sello de Calidad Turística" src="/img/sello_q2.png"></a><br>
			<a href="https://portalserviciosturisticos.sernatur.cl/diferenciate/sustentabilidad-turistica/sello-s/" target="_blank"><img alt="Sello de Sustentabilidad Turística" src="/img/sello_s2.png"></a><br>
		</div>
		<div style="width:435px;" class="col-02">
			<h4>INSPECCIÓN</h4>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-cumple-inspeccion"><i class="far fa-check-square fa-2x"></i> CUMPLE INSPECCIÓN</p>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-no-inspeccionado"><i class="far fa-minus-square fa-2x"></i></i> NO INSPECCIONADO</p>
			<p style="display:inline-flex" class="servicio-no-cumple-inspeccion"><i class="far fa-file-excel fa-2x"></i> NO CUMPLE INSPECCIÓN</p>
			<p>La etiqueta indica el resultado del proceso de inspección obligatorio para los servicios de alojamiento y turismo aventura.<br>
			Su objetivo es determinar el cumplimiento de lo establecido en la ley de turismo y su reglamento (Decreto N° 19 del 12 de abril de 2018 del ministerio de Economía, Fomento y Turismo).</p>		
		</div>
		<div style="width:319px;" class="col-02">
			<h4>ESTADO DE LA DOCUMENTACIÓN</h4>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i>  REGISTRO VIGENTE</p>
			<p style="display:inline-flex" class="servicio-no-cumple-inspeccion"><i class="far fa-file-excel fa-2x"></i>  REGISTRO NO VIGENTE</p>
			<p>Cada servicio registrado debe mantener actualizada la documentación que fue aprobada en el proceso de registro.<br>
				De acuerdo a lo establecido en el decreto Nº 19 de 2018, el cual establece los requisitos para el registro de cada tipo de servicio, la documentación puede corresponder a la patente comercial temporal o definitiva, certificado de primeros auxilios, certificados de exención, permiso de autoridad competente u otra. <a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/">https://portalserviciosturisticos.sernatur.cl/</a></p>
			</div>
			<div style="" class="col-02 footer-covid">
				<img style="float: left;margin: 0 30px 30px 0;" width="100" src="/img/sello-bp2.png">
				<p>El Compromiso de Turismo Sustentable es un reconocimiento para aquellos prestadores de servicios turísticos que decidan iniciar un camino hacia la sustentabilidad y aumentar su competitividad, a través de la puesta en práctica de acciones concretas que además de reducir los impactos de su operación, ayuden a realizar una contribución positiva hacia su negocio, el entorno y las comunidades locales.</p>
			</div>
		</div>

	</div>
	<div style="clear:both;"></div>		
<div id="footer">
	<div class="colophon">
		<div style="float:left; margin-left:10px;" class="col-01">
			<img style="height: 105px!important" src="/img/logo-sernatur.svg" alt="Logo Sernatur">
			<img style="margin:10px 0 0 10px;" alt="Registro" src="/img/logo_r.png">
		</div>
		<div class="col-01 redes-sociales">
		<h3>REDES SOCIALES</h3>
			<a class="facebook" href="https://www.facebook.com/pages/Sernatur/168094326555905" target="_blank"><i class="fab fa-facebook-f"></i></a>
			<a class="twitter" href="https://twitter.com/sernatur" target="_blank"><i class="fab fa-twitter"></i></a>
			<a class="flickr" href="http://www.flickr.com/photos/sernatur/" target="_blank"><i class="fab fa-flickr"></i></a>
			<a class="youtube" href="https://www.youtube.com/user/sernaturcl/" target="_blank"><i class="fab fa-youtube"></i></a>
			
		</div>
		<div class="col-01">
			<h3>SOBRE SERNATUR</h3>
			<ul>
				<li><a target="_blank" href="https://www.sernatur.cl/">Sernatur.cl</a></li>
				<li><a target="_blank" href="https://www.sernatur.cl/estructura-y-organizacion/">Estructura y organización</a></li>
				<li><a target="_blank" href="https://www.sernatur.cl/oficinas-informacion/">Oficinas de Información Turistica (OIT)</a></li>
				<li><a target="_blank" href="https://biblioteca.sernatur.cl/">Biblioteca</a></li>
				
			</ul>
		</div>
		<div class="col-01">
			<h3>DESTACADOS</h3>
			<ul>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/">Registro de Servicios Turísticos</a></li>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/diferenciate/calidad-turistica/sello-q/">Sello de Calidad Turística</a></li>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/diferenciate/sustentabilidad-turistica/sello-s/">Sello de Sustentablidad Turística</a></li>
			</ul>
		</div>
		<div class="col-01">
			<h3>ENLACES</h3>
			<ul>
				<li><a target="_blank" href="http://www.chileestuyo.cl/">Chile Es Tuyo</a></li>
				<li><a target="_blank" href="http://chile.travel/">Chile Travel</a></li>
			</ul>
		</div>
		<div style="clear: both;text-align: center;">
			<img class="wta" src="img/sellos_wta_small.png">
		</div>
		
		
		<p class="copyright">Servicio Nacional de Turismo - Av. Condell #679, Providencia - Santiago - Teléfono: 600 600 60 66</p>
	</div>
	
</div></body>
</html>








----





Al apretar "ver mas" en un guia, se hace un get a https://serviciosturisticos.sernatur.cl/38911-alberto-avila-espinoza y obtengo:




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Buscador de Servicios Turisticos - SERNATUR</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="css/carousel.css">
    <link rel="stylesheet" href="css/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
    <style>
    select{display:online;}
</style>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript">
    $(document).ready(function() {

        $("a#single_image").fancybox();
        
        $("a#inline").fancybox({
            'hideOnContentClick': true
        });
        
        $("a.group").fancybox({
            'transitionIn'  :   'elastic',
            'transitionOut' :   'elastic',
            'speedIn'       :   600, 
            'speedOut'      :   200, 
            'overlayShow'   :   false
        });
        
    });
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-83620127-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'UA-83620127-1');
</script>
</head>
<body>
    <nav>
        <script>
            function CambiarEstilo() {
                var elemento = document.getElementById("menu-toggle-display");
                if (elemento.className == "menu-display") {
                  elemento.className = "menu-display-inherit";
              }else {
                  elemento.className = "menu-display";
              }
          }
      </script>	         
      <div id="content_central">
        <h1 class="logo_sernatur"></h1>
        <a id="menu-toggle" onclick="javascript:CambiarEstilo();" class="menu-toggle"><i class="fas fa-bars"></i></a>
        <ul id="menu-toggle-display" class="menu-display">
            <li><a href="index.php">INICIO</a></li>
            <li><a href="descargas.php">INFORMACIÓN PARA EL TURISTA</a></li>
            <li><a target="_blank" href="https://www.sernatur.cl/oficinas-informacion/">OFICINAS DE INFORMACIÓN TURÍSTICA</a></li>
            <li><a href="contacto.php">CONTACTO</a></li>
        </ul>
    </div>
</nav>
<header>


    <div id="buscador">
      <form method="GET" action="nueva_busqueda.php">
        <input type="hidden" name="p" value="0" />
        
        <div class="centrar">
            <select class="input-header alojamiento" name="tipo_servicio" onchange="carga_clase_servicio();" id="servicio">
                <option value="0" selected="">Seleccionar Servicio</option>
                                    <option value="1"   >Alojamiento turístico</option>
                                        <option value="2"   >Restaurantes y similares</option>
                                        <option value="3"   >Agencia de viajes</option>
                                        <option value="5"   >Transporte de pasajeros por vía Marítima</option>
                                        <option value="6"   >Transporte de pasajeros por vía aérea</option>
                                        <option value="8"   >Transporte de pasajeros por ferrocarril</option>
                                        <option value="10"   >Arriendo de Vehículos</option>
                                        <option value="12"   >Servicios Culturales</option>
                                        <option value="13"   >Turismo aventura</option>
                                        <option value="14"   >Servicios de esparcimiento</option>
                                        <option value="15"   >Servicios de Producción Artesanal</option>
                                        <option value="16"   >Guías de Turismo</option>
                                        <option value="17"   >Servicios deportivos</option>
                                        <option value="18"   >Tour operador</option>
                                        <option value="19"   >Transporte de Pasajeros Vía Terrestre</option>
                                        <option value="22"   >Servicios de Souvenir</option>
                                    
            </select>
            
            <select class="input-header otros-inputs" name="clase_servicio" id="clase">
                <option value="0" selected="">Seleccionar Clase</option>
                            </select>
            <select class="input-header otros-inputs" name="region" onchange="carga_comuna();" id="region">
                <option value="0">Seleccionar Región</option>
                 
                    <option value="15"  >Región de Arica y Parinacota</option>
                     
                    <option value="1"  >Región de Tarapacá</option>
                     
                    <option value="2"  >Región de Antofagasta</option>
                     
                    <option value="3"  >Región de Atacama</option>
                     
                    <option value="4"  >Región de Coquimbo</option>
                     
                    <option value="5"  >Región de Valparaíso</option>
                     
                    <option value="6"  >Región de O'Higgins</option>
                     
                    <option value="16"  >Región de Ñuble</option>
                     
                    <option value="7"  >Región del Maule</option>
                     
                    <option value="8"  >Región del Bio Bío</option>
                     
                    <option value="9"  >Región de La Araucanía</option>
                     
                    <option value="14"  >Región de Los Ríos</option>
                     
                    <option value="10"  >Región de Los Lagos</option>
                     
                    <option value="11"  >Región de Aysén</option>
                     
                    <option value="12"  >Región de Magallanes y La Antártica Chilena</option>
                     
                    <option value="13"  >Región Metropolitana</option>
                                </select>
            <select class="input-header otros-inputs" name="comuna" id="comuna">
                <option value="0" selected="">Seleccionar Comuna</option>
            </select>
        </div>
        <div class="sellos-header">
            <div class="selloq check">
                <label class="check">
                    <input type="checkbox" value="q" name="selloq" >
                    Con Sello de Calidad <span>Turística</span>
                </label>
            </div>
            <div class="sellos check">
                <label class="check2">
                    <input type="checkbox" value="s" name="sellos" >
                    Con Sello de Sustentabilidad <span>Turística</span>
                </label>
            </div>
          <div class="sellos check">
            <label class="check4">
              <input type="checkbox" value="p" name="sellobp">
              <b></b>Compromiso Buenas Prácticas
            </label>
          </div>
        </div>
        <div class="centrar">
            <input name="nombre" class="nombre"  placeholder="Busca un servicio por su nombre" onFocus="if (this.placeholder=='Busca un servicio por su nombre') this.placeholder='';" value="">
            <button class="buscar">Buscar</button>
        </div>
        <p class="num-header">Tenemos  servicios registrados en SERNATUR<p>
        </form>
    </div>
</header>
<body>
    <div id="content">

	<a href="index.php"><h1 id="logo"></h1></a>
	<div id="perfil">
					<div id="sellos">
							</div>

										<a class="ampliar2" id="single_image" href="http://serviciosturisticos.sernatur.cl/folder/empresas/emp_18096007/inscripcion_56662/phpqZTAn8.jpg" ></a>
				<img src="https://serviciosturisticos.sernatur.cl/folder/empresas/emp_18096007/inscripcion_56662/phpqZTAn8.jpg">
			
			<div class="detalle detalle_int" id="contenidoperfil">
				<h4 class="nombre tituloperfil">Alberto Avila Espinoza</h4>
								<p><i class="fas fa-map-marker"></i> Comuna: Renca<p>
										<p><i class="fas fa-map-marker"></i> Localidad: Metropolitana</p>
					<p><i class="fas fa-location-arrow"></i> Región: Región Metropolitana</p>
					<p><i class="fas fa-phone"></i> (56) 972539882</p>
					<p style="text-transform: lowercase;"><i class="fas fa-envelope-open"></i> Alberto_avila@live.com</p>
										<p><i class="fas fa-clipboard-list"></i> General</p>
										
					
															<table>
						<tr>
							<td>
								<div id="inspeccion2">
									<p class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i> REGISTRO VIGENTE</p>
								</div>
								
									<div class=logo-caja-cert>
										
																			<div class="sello-bp-detalle"></div>
										
																																		</td>
						</tr>
						<tr>
							<td>
								<!-- COVID ??? -->
							</td>
						</tr>
					</table>
				</div>
										<div class="servicios_cercanos">
				<h2>OTROS SERVICIOS CERCANOS QUE TE PUEDEN INTERESAR</h2>
				<div class='svc_cerca1'>						<p class="clase-detalle">General</p>
					
											<a href="65863-victor-fuentes"><img class="foto_cercanos" src="https://serviciosturisticos.sernatur.cl/images/noguias.jpg"></a>

					
					<div class="detalle_cercanos">
						<a href="65863-victor-fuentes">Victor Fuentes</a>
						<p class="comuna_cercanos">Renca</p>
					</div>
					</div>
			<div class='svc_cerca2'>						<p class="clase-detalle">Receptivo</p>
					
											<a href="57142-dazocar"><img class="foto_cercanos" src="https://serviciosturisticos.sernatur.cl/images/noalojamiento.jpg"></a>
					
					<div class="detalle_cercanos">
						<a href="57142-dazocar">Dazocar</a>
						<p class="comuna_cercanos">Renca</p>
					</div>
					</div>
			<div class='svc_cerca3'>						<p class="clase-detalle">Receptivo y emisivo</p>
					
											<a href="56714-transportes-y-turismo-las-lunas"><img class="foto_cercanos" src="https://serviciosturisticos.sernatur.cl/images/noalojamiento.jpg"></a>
					
					<div class="detalle_cercanos">
						<a href="56714-transportes-y-turismo-las-lunas">Transportes y turismo las lunas</a>
						<p class="comuna_cercanos">Renca</p>
					</div>
					</div>
					</div>
	</div>
</div>
<script type="text/javascript">
	var input = document.querySelectorAll("label.check input,label.check2 input");
	if(input !== null) {
		[].forEach.call(input, function(el) {
			if(el.checked) {
				el.parentNode.classList.add('c_on');
			}
			el.addEventListener("click", function(event) {
				el.parentNode.classList.toggle('c_on');
			}, false);
		});
	}

	function carga_clase_servicio(){
		var ser = $("#servicio option:selected").val();
		$("#clase").html("");
		$.ajax({
			url: 'logica/carga_clase_servicio.php',
			type: 'POST',
			data: {'servicio':ser},
			success: function( respuesta ) {
				if(respuesta=='none'){
					$("#clase").hide();
				}else{
					$("#clase").show();
					$("#clase").html(respuesta);
				}
			}
		});
	}

	function carga_comuna(){
		var region = $("#region option:selected").val();
		$("#comuna").html('');
		$.ajax({
			url: 'logica/carga_comuna.php',
			type: 'POST',
			data: {'region':region},
			success: function( respuesta ) {
				$("#comuna").html(respuesta);
			}
		});
	}

</script>
<div class="colophon">
	
	<div style="text-align: justify;" class="conoce-sellos">
		<div class="col-02 sellos-footer">
			<h4>CONOCE LOS SELLOS</h4>
			<a href="https://portalserviciosturisticos.sernatur.cl/diferenciate/calidad-turistica/sello-q/" target="_blank"><img alt="Sello de Calidad Turística" src="/img/sello_q2.png"></a><br>
			<a href="https://portalserviciosturisticos.sernatur.cl/diferenciate/sustentabilidad-turistica/sello-s/" target="_blank"><img alt="Sello de Sustentabilidad Turística" src="/img/sello_s2.png"></a><br>
		</div>
		<div style="width:435px;" class="col-02">
			<h4>INSPECCIÓN</h4>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-cumple-inspeccion"><i class="far fa-check-square fa-2x"></i> CUMPLE INSPECCIÓN</p>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-no-inspeccionado"><i class="far fa-minus-square fa-2x"></i></i> NO INSPECCIONADO</p>
			<p style="display:inline-flex" class="servicio-no-cumple-inspeccion"><i class="far fa-file-excel fa-2x"></i> NO CUMPLE INSPECCIÓN</p>
			<p>La etiqueta indica el resultado del proceso de inspección obligatorio para los servicios de alojamiento y turismo aventura.<br>
			Su objetivo es determinar el cumplimiento de lo establecido en la ley de turismo y su reglamento (Decreto N° 19 del 12 de abril de 2018 del ministerio de Economía, Fomento y Turismo).</p>		
		</div>
		<div style="width:319px;" class="col-02">
			<h4>ESTADO DE LA DOCUMENTACIÓN</h4>
			<p style="display:inline-flex;margin-right: 5px;" class="servicio-cumple-patente"><i class="far fa-check-square fa-2x"></i>  REGISTRO VIGENTE</p>
			<p style="display:inline-flex" class="servicio-no-cumple-inspeccion"><i class="far fa-file-excel fa-2x"></i>  REGISTRO NO VIGENTE</p>
			<p>Cada servicio registrado debe mantener actualizada la documentación que fue aprobada en el proceso de registro.<br>
				De acuerdo a lo establecido en el decreto Nº 19 de 2018, el cual establece los requisitos para el registro de cada tipo de servicio, la documentación puede corresponder a la patente comercial temporal o definitiva, certificado de primeros auxilios, certificados de exención, permiso de autoridad competente u otra. <a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/">https://portalserviciosturisticos.sernatur.cl/</a></p>
			</div>
			<div style="" class="col-02 footer-covid">
				<img style="float: left;margin: 0 30px 30px 0;" width="100" src="/img/sello-bp2.png">
				<p>El Compromiso de Turismo Sustentable es un reconocimiento para aquellos prestadores de servicios turísticos que decidan iniciar un camino hacia la sustentabilidad y aumentar su competitividad, a través de la puesta en práctica de acciones concretas que además de reducir los impactos de su operación, ayuden a realizar una contribución positiva hacia su negocio, el entorno y las comunidades locales.</p>
			</div>
		</div>

	</div>
	<div style="clear:both;"></div>
<div id="footer">
	<div class="colophon">
		<div style="float:left; margin-left:10px;" class="col-01">
			<img style="height: 105px!important" src="/img/logo-sernatur.svg" alt="Logo Sernatur">
			<img style="margin:10px 0 0 10px;" alt="Registro" src="/img/logo_r.png">
		</div>
		<div class="col-01 redes-sociales">
		<h3>REDES SOCIALES</h3>
			<a class="facebook" href="https://www.facebook.com/pages/Sernatur/168094326555905" target="_blank"><i class="fab fa-facebook-f"></i></a>
			<a class="twitter" href="https://twitter.com/sernatur" target="_blank"><i class="fab fa-twitter"></i></a>
			<a class="flickr" href="http://www.flickr.com/photos/sernatur/" target="_blank"><i class="fab fa-flickr"></i></a>
			<a class="youtube" href="https://www.youtube.com/user/sernaturcl/" target="_blank"><i class="fab fa-youtube"></i></a>
			
		</div>
		<div class="col-01">
			<h3>SOBRE SERNATUR</h3>
			<ul>
				<li><a target="_blank" href="https://www.sernatur.cl/">Sernatur.cl</a></li>
				<li><a target="_blank" href="https://www.sernatur.cl/estructura-y-organizacion/">Estructura y organización</a></li>
				<li><a target="_blank" href="https://www.sernatur.cl/oficinas-informacion/">Oficinas de Información Turistica (OIT)</a></li>
				<li><a target="_blank" href="https://biblioteca.sernatur.cl/">Biblioteca</a></li>
				
			</ul>
		</div>
		<div class="col-01">
			<h3>DESTACADOS</h3>
			<ul>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/">Registro de Servicios Turísticos</a></li>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/diferenciate/calidad-turistica/sello-q/">Sello de Calidad Turística</a></li>
				<li><a target="_blank" href="https://portalserviciosturisticos.sernatur.cl/diferenciate/sustentabilidad-turistica/sello-s/">Sello de Sustentablidad Turística</a></li>
			</ul>
		</div>
		<div class="col-01">
			<h3>ENLACES</h3>
			<ul>
				<li><a target="_blank" href="http://www.chileestuyo.cl/">Chile Es Tuyo</a></li>
				<li><a target="_blank" href="http://chile.travel/">Chile Travel</a></li>
			</ul>
		</div>
		<div style="clear: both;text-align: center;">
			<img class="wta" src="img/sellos_wta_small.png">
		</div>
		
		
		<p class="copyright">Servicio Nacional de Turismo - Av. Condell #679, Providencia - Santiago - Teléfono: 600 600 60 66</p>
	</div>
	
</div></body>
</html>



----




Con eso, necesito obtener el mail de todos los guias! ayudame a hacer un scrape en python con bs

```


---
---
---




## Prompt to cursor

```
A ver, primero pensemos en los pasos pa’ llevar a cabo el scraping. Ya cachamos que hay una página principal con resultados paginados, que por cada “Ver más” lleva a una URL donde está el detalle del guía, incluyendo su mail. La idea es iterar por todas las páginas, cachar la URL detallada de cada guía, ir a esa página y extraer el mail. Además, hay hartos tipos de servicios, regiones, etc. Lo que haremos es un loop por todas las combinaciones que queramos filtrar y luego iteramos por las páginas que devuelvan resultados.

A modo de ejemplo, te muestro un código Python que use requests y BeautifulSoup. Esto no es la implementación full final (porque habría que integrarla con el resto de la lógica de scraping de todos los tipos y regiones), pero es un ejemplo pa’ que cachis la idea:

import requests
from bs4 import BeautifulSoup
import time
import csv

# Esta URL base cambia según el tipo de servicio, región, clase, etc.
# Aquí voy a partir con el ejemplo que diste: 
# Guías de Turismo en la RM
# page=1&tipo_servicio=16&region=13
base_url = "https://serviciosturisticos.sernatur.cl/nueva_busqueda.php"
detail_base_url = "https://serviciosturisticos.sernatur.cl"

# Parámetros iniciales para el request
params = {
    'page': 1,
    'tipo_servicio': 16,   # Guías de turismo
    'clase_servicio': 0,
    'region': 13,          # Región Metropolitana
    'comuna': 0,
    'nombre': '',
    'selloq': '',
    'sellos': '',
    'sellop': '',
    'sellobp': ''
}

all_guides = []

# Iterar sobre las páginas. Habría que cachar cuantas páginas hay en total
# Por ahora un loop grande y nos detenemos cuando no hay más páginas
while True:
    print(f"Obteniendo página {params['page']}...")
    r = requests.get(base_url, params=params)
    soup = BeautifulSoup(r.text, "html.parser")

    # Encontrar la sección con las cajas (class main_caja)
    cajas = soup.select('.main_caja')

    if not cajas:
        # No hay resultados en esta página, salimos
        break

    for caja in cajas:
        # Cada caja tiene un link "Ver más" que lleva al detalle
        detail_link = caja.select_one('a.sig')
        if not detail_link:
            continue

        detail_url = detail_base_url + detail_link['href']
        
        # Ahora vamos al detalle pa' sacar el mail
        detail_resp = requests.get(detail_url)
        detail_soup = BeautifulSoup(detail_resp.text, "html.parser")

        # El mail está dentro de un párrafo con icono fas fa-envelope-open
        # según el HTML, algo como: <p style="text-transform: lowercase;"><i class="fas fa-envelope-open"></i> Alberto_avila@live.com</p>
        mail_p = detail_soup.find('p', text=lambda t: t and '@' in t)
        # ojo que el mail podría tener mayúsculas, en el HTML se ve que ponen style="text-transform: lowercase;"
        # igual podemos sacar el texto directamente
        if mail_p:
            email = mail_p.text.strip().split()[-1]  # Tomar la última palabra, que sería el mail
        else:
            email = None

        # También podemos sacar otros datos, por ejemplo el nombre del guía:
        name_tag = detail_soup.select_one('h4.nombre.tituloperfil')
        name = name_tag.get_text(strip=True) if name_tag else None

        # Podemos guardar en una lista:
        all_guides.append({
            'name': name,
            'email': email,
            'detail_url': detail_url
        })

        time.sleep(0.5)  # Un pequeño sleep pa' no ser tan agresivos con el server

    # Buscar el contenedor de paginación pa' cachar si hay más páginas
    paginacion = soup.select_one('#paginacion')
    if not paginacion:
        # No hay paginación, salimos
        break

    # Fijarnos si hay un link a la siguiente página
    current_page = params['page']
    next_page_link = paginacion.find('a', href=True, text=str(current_page+1))
    if next_page_link:
        params['page'] += 1
    else:
        # No hay siguiente página
        break

# Finalmente guardamos en un csv (opcional)
with open('guias.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'email', 'detail_url'])
    writer.writeheader()
    for guide in all_guides:
        writer.writerow(guide)

print("Scraping completo. Encontrados:", len(all_guides))

Explicación cortita:
	1.	Partimos desde la página principal con las opciones seleccionadas (guías en la RM).
	2.	Obtenemos el HTML, parseamos con BeautifulSoup, encontramos cada caja (div.main_caja).
	3.	Por cada caja, encontramos el link de “Ver más”.
	4.	Accedemos a esa URL de detalle, la parseamos con BeautifulSoup, buscamos el párrafo que contiene el email (basta con buscar un <p> con un “@” en el texto).
	5.	Guardamos el nombre y el email.
	6.	Avanzamos a la siguiente página si existe.
	7.	Al final, guardamos los datos en un CSV.

Con este approach adaptamos al resto de servicios, regiones, etc. Hay que ir cambiando params o iterar sobre ellos. Igual, si Sernatur tiene protecciones o cookies necesarias, podría ser que tengamos que armar sessions, headers u otros detalles, pero esta es la lógica base pa’ scraping.

----
Haz eso
```

