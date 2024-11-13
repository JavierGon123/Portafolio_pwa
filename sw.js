//Asignar nombre y version de la cache
//Constante

const CACHE_NAME ="v1_cache_PWA"


var urlsToCache = [
'./',
'./static/css/Javier Gonzalez_cv.pdf',
'/img/16x16.ico',
'/img/18x18.ico',
'/img/32x32.ico',
'/img/64x64.ico',
'/img/96x96.ico',
'/img/128x128.ico',
'/img/192x192.ico',
'/img/256x256.ico',
'/img/384x384.png',
'/img/512x512.png',
'/img/1024x1024.png',
'/img/Captura de pantalla 2023-03-14 114607.png',
'./img/foto.png',
'img/iconos-de-la-ciencia.png',
'/img/OriginalLogo.png',
'/img/pexels-photomix-company-106344.jpg',
'/img/pexels-pixabay-50711.jpg',
'/img/pexels-thisisengineering-3862132.jpg',
'/img/project-1-img/about.jpg',
'/img/project-1-img/home-1.jpg',
'/img/project-1-img/home-2.jpg',
'/img/project-1-img/home-1.jpg',
'/img/project-1-img/project-1.jpg',
'/img/project-1-img/project-2.jpg',
'/img/project-1-img/project-2.jpg',
'/img/project-1-img/team-1.jpg',
'/img/project-1-img/team-2.jpg',
'/img/project-1-img/team-3.jpg',
'/img/project-1-img/team-4.jpg',
]

self.addEventListener('lnstall', e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>{
                return cache.addAll(urlsToCache)
                    .then(()=>{
                        self.skipWaiting();
                    })
                    .catch(err=>{
                        console.log('No se a cargado la cache', err);
                    })
            })
    )
})

//Evento Activate activa al sw y permite que trabaje offline 
self.addEventListener('activate', e =>{
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
            .then(cacheNames =>{
                return Promise.all(
                    cacheNames.map(cacheNames=>{
                        if(cacheWhiteList.indexOf(cacheNames)===-1){
                            //Borrar los elementos que ya no esten en la cache o no se 
                            return caches.delete(cacheNames);
                        }
                    })
                )
            }).then(()=>{

                self.clients.claim();
            })
    )
})

//Formato fetch
self.addEventListener('fetch',e=>{
    e. respondWith(
        caches.match (e.request)
              .then (res => {
                if(res){
                    return res;
                    return fetch(e.request);
                }
              })
    );
});