const detomiDev = "calculadora"
const assets = [
    "/index.html",
    "/scripts.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(detomiDev).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})