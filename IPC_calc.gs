// values from IPC 9 provincias
json_values = [
  ["2007-01-01", 22.03],
  ["2007-02-01", 22.28],
  ["2007-03-01", 22.54],
  ["2007-04-01", 22.96],
  ["2007-05-01", 23.46],
  ["2007-06-01", 23.98],
  ["2007-07-01", 24.7],
  ["2007-08-01", 25.53],
  ["2007-09-01", 26.19],
  ["2007-10-01", 26.82],
  ["2007-11-01", 26.96],
  ["2007-12-01", 27.2],
  ["2008-01-01", 27.52],
  ["2008-02-01", 28.21],
  ["2008-03-01", 29.29],
  ["2008-04-01", 30.28],
  ["2008-05-01", 30.82],
  ["2008-06-01", 31.44],
  ["2008-07-01", 31.92],
  ["2008-08-01", 32.28],
  ["2008-09-01", 32.72],
  ["2008-10-01", 33.0],
  ["2008-11-01", 33.26],
  ["2008-12-01", 33.45],
  ["2009-01-01", 33.73],
  ["2009-02-01", 33.91],
  ["2009-03-01", 34.44],
  ["2009-04-01", 34.91],
  ["2009-05-01", 35.11],
  ["2009-06-01", 35.29],
  ["2009-07-01", 35.61],
  ["2009-08-01", 36.13],
  ["2009-09-01", 36.49],
  ["2009-10-01", 37.06],
  ["2009-11-01", 37.53],
  ["2009-12-01", 38.43],
  ["2010-01-01", 39.25],
  ["2010-02-01", 40.59],
  ["2010-03-01", 41.64],
  ["2010-04-01", 42.46],
  ["2010-05-01", 43.11],
  ["2010-06-01", 43.63],
  ["2010-07-01", 44.22],
  ["2010-08-01", 44.79],
  ["2010-09-01", 45.3],
  ["2010-10-01", 46.46],
  ["2010-11-01", 47.51],
  ["2010-12-01", 48.42],
  ["2011-01-01", 49.16],
  ["2011-02-01", 49.87],
  ["2011-03-01", 51.02],
  ["2011-04-01", 52.11],
  ["2011-05-01", 52.91],
  ["2011-06-01", 53.62],
  ["2011-07-01", 54.66],
  ["2011-08-01", 55.7],
  ["2011-09-01", 56.72],
  ["2011-10-01", 57.29],
  ["2011-11-01", 58.29],
  ["2011-12-01", 59.34],
  ["2012-01-01", 60.12],
  ["2012-02-01", 60.83],
  ["2012-03-01", 62.52],
  ["2012-04-01", 64.2],
  ["2012-05-01", 65.24],
  ["2012-06-01", 66.35],
  ["2012-07-01", 68.95],
  ["2012-08-01", 70.39],
  ["2012-09-01", 71.56],
  ["2012-10-01", 72.64],
  ["2012-11-01", 74.04],
  ["2012-12-01", 75.39],
  ["2013-01-01", 77.06],
  ["2013-02-01", 78.07],
  ["2013-03-01", 79.23],
  ["2013-04-01", 80.72],
  ["2013-05-01", 81.97],
  ["2013-06-01", 83.6],
  ["2013-07-01", 85.72],
  ["2013-08-01", 87.53],
  ["2013-09-01", 89.4],
  ["2013-10-01", 91.43],
  ["2013-11-01", 93.64],
  ["2013-12-01", 95.83],
  ["2014-01-01", 100.0],
  ["2014-02-01", 104.88],
  ["2014-03-01", 108.52],
  ["2014-04-01", 111.56],
  ["2014-05-01", 114.18],
  ["2014-06-01", 116.57],
  ["2014-07-01", 118.99],
  ["2014-08-01", 121.54],
  ["2014-09-01", 124.49],
  ["2014-10-01", 126.95],
  ["2014-11-01", 129.38],
  ["2014-12-01", 131.35],
  ["2015-01-01", 133.64],
  ["2015-02-01", 135.75],
  ["2015-03-01", 137.96],
  ["2015-04-01", 141.1],
  ["2015-05-01", 144.05],
  ["2015-06-01", 145.95],
  ["2015-07-01", 149.08],
  ["2015-08-01", 152.1],
  ["2015-09-01", 154.78],
  ["2015-10-01", 157.37],
  ["2015-11-01", 160.38],
  ["2015-12-01", 167.64],
  ["2016-01-01", 174.65],
  ["2016-02-01", 181.11],
  ["2016-03-01", 186.69],
  ["2016-04-01", 197.11],
  ["2016-05-01", 205.98],
  ["2016-06-01", 212.51],
  ["2016-07-01", 217.27],
  ["2016-08-01", 216.42],
  ["2016-09-01", 219.02],
  ["2016-10-01", 225.04],
  ["2016-11-01", 228.72],
  ["2016-12-01", 231.7],
];

// Transforma los valores JSON, aplicando una división sobre el segundo elemento del par
// Devuelve: Array<Array> - Un array de arrays con los valores transformados
json_values = json_values.map(function (item) {
  return [item[0], item[1] / 100 / 100];
});

const base_config = [
  [
    "Nombre\n(uso interno por el script)",
    "Pestaña primaria",
    "Titulo col fecha de transaccion",
    "Titulo col valor original",
    "",
    "Archivo de volcado",
    "Pestaña de volcado",
    "Titulo col ARS",
    "Titulo col USD",
    "Placeholder sin valor",
    "Titulo col ARS HOY",
    "Titulo col USD HOY",
  ],
  [
    "Opciones modificables",
    "Hoja 1",
    "Fecha emisión",
    "Importe Total ARS",
    "",
    "Dump_sheet",
    "dumpTab",
    "ARS Valor",
    "USD Valor",
    "n/a",
    "ARS Hoy",
    "USD Hoy",
  ],
  [
    "Defaults",
    "Hoja 1",
    "Fecha emisión",
    "Importe Total ARS",
    "",
    "Dump_sheet",
    "DumpTab",
    "ARS Valor",
    "USD valor",
    "n/a",
    "ARS Hoy",
    "USD Hoy",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Descripcion",
    "Pestaña de este archivo, de esta pestaña se van a sacar los datos originales.",
    "Columna de donde el script va a sacar la fecha de la transaccion",
    "Columna de donde el script va a sacar el monto de la transaccion",
    "",
    "Archivo donde se van a guardar los nuevos datos. Debe crearse manualmente",
    "Pestaña donde se van a guardar los nuevos datos. Debe crearse manualmente",
    "Columna del cambio de pesos a USD el dia de la transaccion",
    "Columna donde se va a guardar el valor en dolares al dia de hoy.",
    "Texto que se usara cuando la celda no contenga un valor.",
    "Columna del resultado de los pesos argentinos ajustados al IPC",
    "Columna donde se va a guardar el valor en dolares con respecto a la devaluacion.",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", ""],
  ["Script output", "", "", "", "", "", "", "", "", "", "", ""],
];

let usd_values = {};

function send_mail(email, subject, content) {
  MailApp.sendEmail(email, subject, content);
}

let error_output;
let hasError = false;
let errorMessage = "";

mail_debugger = "santiago.amerio@interval.ar";
let spreadsheetTitle = "Dump_sheet"; // Nombre del archivo dump
let dumpTabTitle = "dumpTab";
let primaryTabTitle = "Hoja 1";
let first_column_title = "ARS valor hoy";
let second_column_title = "USD valor dia de transaccion";
let third_column_title = "";
let fourth_column_title = "";
let transaction_date_column_title = "Fecha emisión";
let original_transaction_value = "Importe Total ARS";
let placeholderValue = "n/a";

main_data = false;

function executeMainProcess_debug() {
  fetchConfigData();
  fetchAndSortDollar();
  error_output.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  error_output.setValue("Ejecutando script... \n" + new Date());
  error_output.setBackground("green");
  // Reinicia la pestaña de volcado y obtiene la pestaña actualizada.
  const dump_sheet = resetDumpTab();

  // Verifica si la pestaña de volcado fue restablecida correctamente antes de proceder.
  if (dump_sheet) {
    // Establece los datos de inflación en la pestaña de volcado.
    processDumpData(dump_sheet);
  } else {
    // Registra un mensaje de error en la consola si la pestaña de volcado no pudo ser restablecida.
    console.error("Error: No se pudo restablecer la pestaña de volcado.");
  }

  displayErrors();
}

// Función principal que maneja la actualización de la pestaña de volcado e inserta los datos de inflación
function executeMainProcess() {
  try {
    fetchConfigData();
    fetchAndSortDollar();
    error_output.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
    error_output.setValue("Ejecutando script... \n" + new Date());
    error_output.setBackground("green");
    // Reinicia la pestaña de volcado y obtiene la pestaña actualizada.
    const dump_sheet = resetDumpTab();

    // Verifica si la pestaña de volcado fue restablecida correctamente antes de proceder.
    if (dump_sheet) {
      // Establece los datos de inflación en la pestaña de volcado.
      processDumpData(dump_sheet);
    } else {
      // Registra un mensaje de error en la consola si la pestaña de volcado no pudo ser restablecida.
      console.error("Error: No se pudo restablecer la pestaña de volcado.");
    }
  } catch (error) {
    console.error(error.stack);
    console.log(Object.getOwnPropertyNames(error));
    errorMessage += error.stack;
    hasError = true;
  }

  displayErrors();
}

function fetchAndSortDollar() {
  url = `https://api.argentinadatos.com/v1/cotizaciones/dolares/`;

  try {
    let response = UrlFetchApp.fetch(url);
    var data = JSON.parse(response.getContentText());
  } catch (error) {
    errorMessage += "ERROR USD";
    return "USD ERROR";
  }

  const result = {};

  for (let item of data) {
    if (item.casa != "blue") {
      continue;
    }
    result[item.fecha] = item.venta;
  }
  usd_values = result;
}

function displayErrors() {
  let subject = "";
  let message = "";
  if (hasError) {
    error_output.setBackground("orange");
    error_output.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
    error_output.setValue(errorMessage);
    subject = "Error en IPC APPSCRIPT";
    message = errorMessage;
  } else {
    error_output.setBackground("white");
    error_output.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

    error_output.setValue("Ultima ejecucion correcta. " + new Date());
    message = "Ultima ejecucion correcta. " + new Date();
    subject = "Ejecucion correcta IPC APPSCRIPT";
  }
  send_mail(mail_debugger, subject, message);
}
/** SPREADSHEET INTERACTION FUNCTIONS */

/**
 * Busca y abre la hoja de cálculo con el título dado en la misma carpeta que contiene el script que se está ejecutando.
 *
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet} Referencia a la hoja de cálculo encontrada, o null si no se encontró.
 */
function findDumpSheet() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // selects file running the script
  const parentFolder = DriveApp.getFileById(activeSpreadsheet.getId())
    .getParents()
    .next(); // selects folder where $activeSpreadsheet is
  const files = parentFolder.searchFiles(
    `title='${spreadsheetTitle}' and mimeType='${MimeType.GOOGLE_SHEETS}' and trashed=false`
  ); // list files in $parentFolder with name $spreadSheetTitle

  if (!files.hasNext()) {
    console.error(`No spreadsheet con el titulo '${spreadsheetTitle}'.`);
    errorMessage += `Crea el archivo con el titulo "${spreadsheetTitle}".`;
    hasError = true;
    return null;
  }
  const ss = SpreadsheetApp.open(files.next());
  ss_id = ss.getId(); // dump spreadsheet id
  return [ss, activeSpreadsheet];
}

/**
 * Reinicia la pestaña de volcado en la hoja de cálculo secundaria (dump). Copia la pestaña actual desde la hoja de cálculo
 * principal a la hoja de cálculo de volcado, elimina la vieja pestaña de volcado si existe y renombra la nueva pestaña copiada.
 *
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} La nueva pestaña de volcado con el contenido de la hoja de cálculo principal.
 */
function resetDumpTab() {
  // Obtiene la hoja de cálculo de volcado (secundaria) en donde se mostrará la información procesada.
  sheets = findDumpSheet();
  dump_sheet = sheets[0];
  primarySpreadsheet = sheets[1];
  primary_tab = primarySpreadsheet.getSheetByName(primaryTabTitle);

  try_tab = dump_sheet.getSheetByName(dumpTabTitle);
  if (!try_tab) {
    errorMessage += `Crea la pestaña "${dumpTabTitle}" en el archivo "${spreadsheetTitle}".`;
    hasError = true;
    return;
  }

  last_primary_row = primary_tab.getRange("G1:G").getValues();
  last_row_number = 2;
  for (value of last_primary_row) {
    if (value[0]) {
      last_row_number += 1;
    }
  }

  try_tab_range = try_tab.getRange(
    1,
    1,
    last_row_number,
    primary_tab.getLastColumn()
  );
  try_tab.getDataRange().clearContent();

  primary_tab_range = primary_tab
    .getRange(1, 1, last_row_number, primary_tab.getLastColumn())
    .getValues();
  try_tab_range.setValues(primary_tab_range);

  return try_tab;
}

/**
 * Obtiene los datos de la hoja de cálculo de volcado y llama a funciones auxiliares para calcular la inflación y actualizar los valores en la hoja de cálculo.
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} dump_sheet - La hoja de cálculo secundaria (de volcado) en la que se deben configurar los datos.
 */
function processDumpData(dump_sheet) {
  // Obtiene todos los datos de la hoja de cálculo de volcado en un array bidimensional.
  let sheet_data = dump_sheet.getDataRange().getValues();
  // Identifica la última fila con datos en la hoja de volcado.
  let last_row = dump_sheet.getLastRow();

  // Obtiene los índices de las columnas 'Fecha emisión' y 'Importe Total ARS' a partir de la primera fila con datos.
  let sheet_coords = findImporteAndEmisionIndices(sheet_data);

  // Calcula la columna en la que se insertarán los datos de inflación, que es dos posiciones a la derecha de la última columna con datos.
  let new_data_col = sheet_coords["last_col"] + 2;

  // Establece el rango en la hoja de cálculo de volcado donde se insertarán los datos ajustados por inflación.
  let dump_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    new_data_col,
    last_row - 1
  );
  let usd_dump_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    new_data_col + 1,
    last_row - 1
  );
  let ipc_dump_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    new_data_col + 2,
    last_row - 1
  );
  let ipc_usd_dump_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    new_data_col + 3,
    last_row - 1
  );

  calculateInflationAndValues(
    dump_range,
    usd_dump_range,
    ipc_dump_range,
    ipc_usd_dump_range,
    sheet_coords,
    dump_sheet
  );
}

/**
 * Calcula la inflación y los valores ajustados por inflación para cada importe y fecha en la hoja de cálculo de volcado.
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} dump_range - El rango donde se insertarán los valores ajustados por inflación.
 * @param {GoogleAppsScript.Spreadsheet.Range} usd_dump_range - El rango donde se insertarán los valores en USD.
 * @param {Object} sheet_coords - Los índices de las columnas y filas relevantes en la hoja de cálculo.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} dump_sheet - La hoja de cálculo secundaria (de volcado) en la que se deben configurar los datos.
 */
function calculateInflationAndValues(
  dump_range,
  usd_dump_range,
  ipc_dump_range,
  ipc_usd_dump_range,
  sheet_coords,
  dump_sheet
) {
  let dates_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    sheet_coords["Fecha emisión"],
    dump_sheet.getLastRow()
  );
  let dates = dates_range.getValues();
  let importes_range = dump_sheet.getRange(
    sheet_coords["starting_row"],
    sheet_coords["Importe Total ARS"],
    dump_sheet.getLastRow()
  );
  let importes = importes_range.getValues();

  let values_to_dump = [];
  let usd_values_to_dump = [];
  let ipc_values_to_dump = [];
  let usd_ipc_values_to_dump = [];
  for (let index = 0; index < dates.length - 1; index++) {
    if (index === 0) {
      values_to_dump.push([first_column_title]);
      usd_values_to_dump.push([second_column_title]);
      ipc_values_to_dump.push([third_column_title]);
      // usd_ipc_values_to_dump.push([fourth_column_title])
      continue;
    }
    const date = dates[index][0];
    let importe = importes[index][0];
    ret = processImporte(importe, date);
    let pesosF = ret[0];
    let usdF = ret[1];
    if (!importe || importe == 0) {
      values_to_dump.push([""]);
      usd_values_to_dump.push([""]);
      ipc_values_to_dump.push([""]);
      continue;
    }

    let infl = inflacion(pesosF, date);
    yesterday = new Date();
    yesterday = new Date(yesterday.setDate(yesterday.getDate() - 1));

    // let usdH = convert_usd(infl, yesterday)

    values_to_dump.push([pesosF]);
    usd_values_to_dump.push([usdF]);
    ipc_values_to_dump.push([infl]);
    // usd_ipc_values_to_dump.push([usdH])
  }

  updateRangeValues(dump_range, values_to_dump);
  updateRangeValues(usd_dump_range, usd_values_to_dump);
  updateRangeValues(ipc_dump_range, ipc_values_to_dump);
  // updateRangeValues(ipc_usd_dump_range, usd_ipc_values_to_dump)
}

/**
 * Procesa el importe para determinar si está en USD, lo convierte si es necesario y devuelve el valor y si está en USD.
 *
 * @param {String} importe - El valor del importe que se está procesando.
 * @param {Date} date - La fecha correspondiente al importe.
 * @returns {Object} - Un objeto que contiene el valor convertido y señala si el importe está en USD.
 */
function processImporte(importe, date) {
  let isUSD = false;
  let convertedValue = importe;
  let newDate = new Date(date);

  if (typeof importe !== "number" && importe.includes("USD")) {
    usdF = importe.replace("USD", "");
    pesosF = convert_usd(usdF, newDate);
  } else {
    pesosF = importe;
    usdF = convert_usd(importe, newDate, (usdToArs = true));
  }
  return [pesosF, usdF];
}

function createNewConfigTab(primarySpreadsheet) {
  new_config = primarySpreadsheet.insertSheet();
  config_tab = new_config.setName("configuracion");
  return config_tab;
}

/** CONFIGURATION FUNCTIONS */

function setDefaultConfigValues(config_tab) {
  config_range = config_tab.getRange(
    1,
    1,
    base_config.length,
    base_config[0].length
  );
  config_range.setValues(base_config);
  config_tab
    .getRange(2, 1, 1, config_tab.getLastColumn())
    .setBackground("black")
    .setFontColor("white");
  config_range.setHorizontalAlignment("center");
  descriptions = config_tab.getRange(5, 1, 1, config_tab.getLastColumn());

  descriptions.setVerticalAlignment("top").setHorizontalAlignment("left");
  descriptions.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
  config_tab.setFrozenColumns(1);
  for (let i = 1; i <= base_config[0].length; i++) {
    config_tab.autoResizeColumn(i);
  }
}

function check_primary_tab() {
  const primarySpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  primary_tab = primarySpreadsheet.getSheetByName(primaryTabTitle);
  if (!primary_tab) {
    firstTab = primarySpreadsheet.getSheets()[0];
    base_config[1][1] = firstTab.getName();
  }
}

function fetchConfigData() {
  const primarySpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  config_tab = primarySpreadsheet.getSheetByName("configuracion");
  check_primary_tab();
  if (config_tab == null) {
    config_tab = createNewConfigTab(primarySpreadsheet);
  }
  error_output = config_tab.getRange("B7");

  configuration = config_tab.getDataRange().getValues();

  if (configuration.length <= 1) {
    setDefaultConfigValues(config_tab);
    configuration = config_tab.getDataRange().getValues();
  }

  const titleToVariableMap = {
    "Pestaña primaria": (value) => (primaryTabTitle = value),
    "Titulo col fecha de transaccion": (value) =>
      (transaction_date_column_title = value),
    "Titulo col valor original": (value) =>
      (original_transaction_value = value),
    "Archivo de volcado": (value) => (spreadsheetTitle = value),
    "Pestaña de volcado": (value) => (dumpTabTitle = value),
    "Titulo col ARS": (value) => (first_column_title = value),
    "Titulo col USD": (value) => (second_column_title = value),
    "Placeholder sin valor": (value) => (placeholderValue = value),
    "Titulo col ARS HOY": (value) => (third_column_title = value),
    "Titulo col USD HOY": (value) => (fourth_column_title = value),
  };

  for (let index in configuration[0]) {
    let title = configuration[0][index];
    let value = configuration[1][index];

    if (title in titleToVariableMap) {
      titleToVariableMap[title](value);
    }
  }
}

/** HELPER FUNCTIONS */

/**
 * Actualiza un rango específico en la hoja de cálculo con un conjunto de valores proporcionados.
 * Esta operación es comúnmente usada para volcar datos calculados, como valores ajustados por inflación, en la hoja de cálculo.
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} dump_range      - El rango dentro de la hoja de cálculo donde se establecerán los valores.
 * @param {Array<Array<Number | String>>} values_to_dump       - Los valores a ser volcados en el rango especificado.
 */
function updateRangeValues(dump_range, values_to_dump) {
  // Establece los valores en el rango especificado.
  // setValues espera un array bidimensional donde cada subarray es una fila de valores.
  let values = dump_range.setValues(values_to_dump);
}

/**
 * Identifica las posiciones (índices) de las columnas 'Fecha emisión' y 'Importe Total ARS' en una matriz de datos de la hoja de cálculo.
 * La búsqueda se realiza fila por fila hasta encontrar una fila que contiene ambas cabeceras de columna.
 * Además, calcula la última columna con datos y la fila de inicio de los datos.
 *
 * @param {Array<Array<string>>} sheet_data - Matriz bidimensional con los datos de las hojas de cálculo, donde cada subarray es una fila.
 * @returns {{starting_row: number, last_col: number, [header: string]: number}} Un objeto que contiene la fila de inicio de los datos,
 *          la última columna con datos y un mapeo de los nombres de las columnas a sus respectivos índices (1-indexed).
 */
function findImporteAndEmisionIndices(sheet_data) {
  for (row_i in sheet_data) {
    // Intenta encontrar los índices de las columnas 'Fecha emisión' y 'Importe Total ARS' en la fila actual
    index_of_fecha = sheet_data[row_i].indexOf("Fecha emisión");
    index_of_importe = sheet_data[row_i].indexOf("Importe Total ARS");

    titles_obj = {};
    // Si se encuentran ambas columnas en la fila actual
    if (index_of_fecha != -1 && index_of_importe != -1) {
      titles_obj["starting_row"] = Number(row_i) + 1;
      for (title_index in sheet_data[row_i]) {
        title = sheet_data[row_i][title_index];

        titles_obj[title] = Number(title_index) + 1;
        titles_obj["last_col"] = Number(title_index);
      }
      row_index = row_i;
      return titles_obj;
    }
  }
}

/**
 * Obtiene una serie de valores de inflación de una API en línea filtrando los datos entre dos fechas.
 * La función también maneja el caché de datos previamente recuperados para evitar llamadas redundantes a la API.
 *
 * @param {string} desde - Fecha inicial en formato 'YYYY-MM-DD' para la cual se desean obtener los datos.
 * @param {string} hasta - Fecha final en formato 'YYYY-MM-DD' para la cual se desean obtener los datos.
 * @returns {Array<Array<string, number>>} Una matriz de pares [fecha, valor] que representa los valores de inflación
 *          para el rango de fechas desde 'desde' hasta 'hasta'.
 */
function get_data(desde, hasta) {
  // Asegura que la fecha 'desde' está formateada correctamente.
  desde = formatDate(desde);

  // Usa datos previamente recuperados (si existen) para reducir llamadas a la API.
  if (!main_data) {
    // Código de identificación de la serie de datos requerida por la API para recuperar los valores de inflación.
    let key = "148.3_INIVELNAL_DICI_M_26:percent_change";
    let url = "https://apis.datos.gob.ar/series/api/series/?start_date=";
    first_date = new Date();
    first_date.setFullYear(2000, 1, 1);
    first_date = formatDate(first_date);
    last_date = formatDate(new Date());
    url = url.concat(
      first_date,
      "&end_date=",
      last_date,
      "&ids=",
      key,
      "&format=json&metadata=none"
    );

    // Realice la solicitud a la API y almacene los datos recuperados en 'main_data'.
    let response = UrlFetchApp.fetch(url);
    data = JSON.parse(response.getContentText());
  } else {
    data = main_data;
  }
  let values = data.data;

  values = json_values.concat(values);
  is_value_in_range = false;
  inflationData = [];
  for (date_valor of values) {
    date = date_valor[0];
    valor = date_valor[1];
    if (date == desde) {
      is_value_in_range = true;
    }
    if (is_value_in_range) {
      inflationData.push([date, valor]);
    }
  }
  main_data = data;

  return inflationData;
}

// Calcula el valor ajustado por inflación de un importe desde una fecha dada
// Recibe: Number - Valor a ajustar, String - Fecha desde la cual calcular la inflación
// Devuelve: String - Valor ajustado por inflación y formateado localmente
function inflacion(valor, desde) {
  isUSD = false;
  let today = new Date(desde);
  today = new Date(today.getFullYear(), today.getMonth(), 1);

  data = get_data(today);
  let inflacion = 1;
  inflationValues = "";
  for (x in data) {
    inflationValues += String(data[x][0] + ": " + data[x][1] + "\n");
    inflacion = inflacion * (Number(data[x][1]) + 1);
  }
  multiplier = inflacion - 1;

  infl = valor + parseFloat(valor) * multiplier;

  if (valor == 606452) {
    console.log(valor, infl, multiplier, inflacion, inflationValues);
  }

  //  inflacion = inflacion * (Number(data[x][1]) + 1);
  // }
  // multiplier = (inflacion - 1);

  return infl;
}

function convert_usd(value, date, usdToArs = false) {
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  date = `${year}-${month}-${day}`;

  var usdF = usd_values[date];
  if (!usdF) {
    usdF = 4;
  }

  if (usdToArs) {
    value = value / usdF;
  } else {
    value = value * usdF;
  }
  return value;
}

// Formatea una fecha al estándar ISO 8601 en formato de año-mes-día
// Recibe: Date - Fecha a formatear
// Devuelve: String - Fecha formateada en el estandar ISO 8601
function formatDate(fecha) {
  return Utilities.formatDate(fecha, "GMT -3", "yyyy-MM-dd");
}
