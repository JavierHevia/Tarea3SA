# Tarea3SA

Arrancar:  npm run dev

Arrancará con el ESB el cual va a manejar todas las peticiones de los microservicios

El primer servicio que hay que arrancar es ESB:
  :::: npm run dev
  
  El recibirá las peticiónes del cliente y sabra a quien contestarle.
  
  
Arrancamos el restaurante, cliente y repartidor :

  :::: node .\restaurante.js
  
    ::::  node .\Cliente.js
    
      :::: node node .\Repartidor.js
      
      
 y tenemos nuestra pagina donde simulará hacer un pedido un cliente X.
 
 
 Mandará un post al puerto del ESB y este enviará un mensaje al restaurante para saber si puede atenderlo.
 
 
 Luego si el restaurante puede atenderlo enviara una repuestas el ESB para el repartido y un número de pedido al cliente,
 con esto esperamos que el repartidor acepte el envio y luego enviará la respuestas al ESB y concluye con un mensaje al cliente
 que su pedido.
 
 VIDEO: https://youtu.be/vIZweTPaXEc
 
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
 INTEGRACIÓN CI CON Jenkins
 
 Link del dominio de Jenkins
 
 Para ingresar el link de jenkins no vamos a Setting -> Webhooks y agregamos el link.
 Se configuró que para cada 15min revise el repositorio de git para saber si hubieron cambios o no.
 
 http://tareas.com:8080/github-webhook/ 
 El cual cada commit que se haga a la rama master o develop lo va a registrar en Jenkins para poder llevar un control de ella misma.
