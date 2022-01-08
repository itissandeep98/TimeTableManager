// firebase library id: 1hguuh4Zx72XVC1Zldm_vTtcUUKUA6iBUOoGnJUWLfqDWx5WlOJHqYkrt

var secret = 'xxxxxxxxxxxxxxxxxxxxxx' //Database Secret
var databaseUrl="xxxxxxxxxxxxxxxxxxxxx"

function getFirebaseUrl(jsonPath) {

  return (
    databaseUrl + jsonPath + '.json?auth=' +
    secret
  )
}

function updateDate(location){
  var options = {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(new Date().toDateString().slice(4))
  }
   var fireBaseUrl = getFirebaseUrl(location)

  UrlFetchApp.fetch(fireBaseUrl, options)
}

function syncMasterSheet(excelData,location) {

  var options = {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(excelData)
  }
  var fireBaseUrl = getFirebaseUrl(location)

  UrlFetchApp.fetch(fireBaseUrl, options)
  updateDate('extra/last_updated')
}

function syncInfo() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("info")
  var [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()]
  
  var data = sheet.getRange(2, 1, rows - 1, columns).getValues()

  data = data.map(t => {
    var link = t[5].match(/\bhttps?:\/\/\S+/gi)
    link = link ? link[0] : ""
    var desc = t[5].replace(link, "")
    return {
      id: t[3].replaceAll(/ /g,''),
      code: t[0],
      credits: t[4],
      link: link,
      desc: desc,
      inst: t[2],
      title: t[1]
    }
  })

  var result = {};
  for (var i = 0; i < data.length; i++) {
    result[data[i].id] = {...data[i],id:Math.random()};
  }
  Logger.log(Object.keys(result).length)


  syncMasterSheet(result,'info')
}

function syncSchedule() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("schedule")
  var [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()]
  var data = sheet.getRange(1, 1, rows , columns).getValues()

 
  
  data=[null,...data.map(t=>([null,...t.map(c=>c.replace(/ /g, '').split(","))]))]
  // Logger.log(data)
  

   syncMasterSheet(data,'schedule/monsoon')
}
