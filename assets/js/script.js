function horaActual() {
    var hoy = new Date();
    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();

    if (minuto < 10) {
        minuto = "0" + minuto
    };
    if (segundo < 10) {
        segundo = "0" + segundo
    };
    //muesto la hora en el objeto establecido
    var tm = document.getElementById("time");
    tm.textContent = (hora + ":" + minuto + ":" + segundo);
    
    //genero control para setear valores predefinidos en input
    var contador = hoy.getMinutes();
    var minutosBreak = 30;
    var horaBreak = hoy.getHours();

    if (contador >30){
        minutosBreak =  contador -30;
        horaBreak = hoy.getHours()+1;
    }
    else {
        minutosBreak = minutosBreak + contador;
    };
    //seteo por defecto los input con valor de 30 mintos de break
    document.getElementById("hora").setAttribute("value", horaBreak);
    document.getElementById("minuto").setAttribute("value", minutosBreak);

    
    
   //Gatillo la alarma
    if (hora == this.horaD && minuto == this.minutoD && segundo == 00) {
        //inicializo una variable de audio
		var audio = new Audio("https://github.com/mauricioespinoza/break/raw/0309f65947f7c2062e915a4e7fbccb2a24e0ea5e/assets/others/alarm.mp3");
		audio.play();
        audio.addEventListener("ended", function(){
            desplegar();
          });
        
    }

  };
  
  function alerta(){
   //rescato valores de los indicadores
    this.horaD = parseInt(document.getElementById("hora").value);
    this.minutoD = parseInt(document.getElementById("minuto").value);
    console.log("Hora de retorno del break: "+horaD+":"+minutoD);

    //Despliego Alerta de inicio del proceso
    alert("Se ha iniciado el conteo de tiempo.\nHora de retorno del break: "+horaD+":"+minutoD);

    //muestro hora de termino del break
    var termino = document.getElementById("termino");
    termino.textContent = (horaD+":"+minutoD);
    //deshabilito input
    document.getElementById("hora").setAttribute("hidden", true);
    document.getElementById("minuto").setAttribute("hidden", true);
    document.getElementById("inicio").setAttribute("hidden", true);
    document.getElementById("lblHora").setAttribute("hidden", true);
    document.getElementById("lblMinuto").setAttribute("hidden", true); 
  };

  function desplegar(){
      //Activo atributos deshabilitados
      document.getElementById("hora").removeAttribute("hidden");
      document.getElementById("minuto").removeAttribute("hidden");
      document.getElementById("inicio").removeAttribute("hidden");
      document.getElementById("lblHora").removeAttribute("hidden");
      document.getElementById("lblMinuto").removeAttribute("hidden");
      //refresco la pagina para que setee los valores nuevamente
      location.reload();
  
    };
  //control de visibilidad en la animación del reloj, se actualiza cada 1 segundo el objeto
  setInterval(horaActual,1000);
  /* */
  
  // modos de abrir página fullscreen
  // https://www.w3schools.com/jsref/met_win_open.asp
