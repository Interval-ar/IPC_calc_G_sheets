/**
* Obtiene el porcentaje de inflación (IPC) entre 2 períodos.
* @param {Fecha} desde La fecha de compra
* @param {Fecha} hasta La fecha a comparar
* @param {Numero decimal} valor El precio pagado en la fecha de compra
* @return Valor a la fecha de comparacion segun el IPC de los meses intermedios
* @customfunction
**/

function inflacion(valor, desde, hasta) {
 
  var today = new Date(desde);
  var until = new Date(hasta);
  today.setMonth(today.getMonth() - 1);
  var key = "148.3_INIVELNAL_DICI_M_26:percent_change"
  var url = "https://apis.datos.gob.ar/series/api/series/?start_date=";
  url = url.concat(formatDate(today), "&end_date=", formatDate(until), "&ids=", key, "&format=json&metadata=none");

  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  var valores = data.data;
  var inflacion = 1;
  str_valores = ""
  for (x in valores) {
    str_valores += String(valores[x][0] + ": " + valores[x][1] + "\n")
    inflacion = inflacion * (valores[x][1] + 1);
  }
  multiplier = (inflacion-1);

  valor = ( valor+(parseFloat(valor) * multiplier)).toLocaleString()

  return valor

}

function formatDate(fecha) {
  return Utilities.formatDate(fecha, "GMT -3", "yyyy-MM-dd");
}


function inflacion_debug(valor, desde, hasta) {

  var today = new Date(desde);
  var until = new Date(hasta);
  today.setMonth(today.getMonth() - 1);
  key = "148.3_INIVELNAL_DICI_M_26:percent_change"

  var url = "https://apis.datos.gob.ar/series/api/series/?start_date=";
  url = url.concat(formatDate(today), "&end_date=", formatDate(until), "&ids=", key, "&format=json&metadata=none");
  console.log(url)
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  var valores = data.data;
  var inflacion = 1;
  str_valores = ""
  for (x in valores) {
    str_valores += String(valores[x][0] + ": " + valores[x][1] + "\n")
    inflacion = inflacion * (valores[x][1] + 1);
    console.log(inflacion)
  }
  multiplier = (inflacion-1);
  
  valor = (valor+(parseFloat(valor) * multiplier)).toLocaleString()
  return "val: " + valor + "\n\n" + str_valores + "\nperc sum: " + multiplier
}


