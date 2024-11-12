//Service Wworker
if('serviceWorker' in navigator){
    console.log('si tiene sw')

navigator.serviceWorker.register('/templates/sw.js')
                        .then(res=> console.log('serviceWorker cargando correctaente', res))
                        .catch(err=> console.log('serviceWorker no se pudo registrar', err));
}else{
    console.log('no se puede');
}
