export default class GalleryService {

    getPhotos = async() => {
        const res = await fetch("https://api.unsplash.com/photos", {
            method: "get",
            headers: {
                "Authorization": "Client-ID e08eb72107a92ce923e9ab3125406b4a1bfc022c74000202b6e54ae7e1f12a70"
            }
        })
        const result = await res.json();
        return result
    }

    getRandomPhotos = async() => {
        const res = await fetch("https://api.unsplash.com/random", {
            method: "get",
            headers: {
                "Authorization": "Client-ID e08eb72107a92ce923e9ab3125406b4a1bfc022c74000202b6e54ae7e1f12a70"
            }
        })
        const result = await res.json();
        return result
    }
}