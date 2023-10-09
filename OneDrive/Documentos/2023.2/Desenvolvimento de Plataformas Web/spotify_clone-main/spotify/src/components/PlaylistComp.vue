<template>
    <div class="columns-4">
        <div v-for="playlist in playlists" :key="playlist.id" class="pl-2 pb-2">
            <div class="block w-44 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 card-hover">
                <router-link to="/playlistdetail">
                    <img class="rounded-t-lg w-full h-44 object-cover"
                    :src= "getImageUrl(playlist.capa)" 
                    alt="Capa da playlist"/>
                </router-link>
                <div class="p-4">
                    <p class="text-lg font-normal leading-tight text-neutral-50">
                        {{ playlist.nome }}	
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .card-hover :hover{
        box-shadow: 0 30px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
    }
</style>

<script>
export default {
    data() {
        return {
            playlists: [
                {
                    id: 1,
                    nome: 'Lush Lofi',
                    capa: "lush-lofi-playlist_resized.png",
                    musicas: [
                        {
                            id: 10,
                            nomeMusica: 'Lofi Study',
                            localMusica: 'src/songs/lofi-study-112191.mp3'
                        },
                        {
                            id: 11,
                            nomeMusica: 'Good Night',
                            localMusica: 'src/songs/good-night-160166.mp3'
                        }
                    ]
                },
                {
                    id: 2,
                    nome: 'Chill Lofi Beats',
                    capa: "chill-lofi-beats_resized.png"
                },
                {
                    id: 3,
                    nome: 'Lofi Beats',
                    capa: "lofi-music.jpeg"
                },
                {
                    id: 4,
                    nome: 'Lofi',
                    capa: "lofi_resized.png"
                },
                {
                    id: 5,
                    nome: 'Chill Lofi Study',
                    capa: "study-beats-lofi_resized.png"
                },
                {
                    id: 6,
                    nome: 'Study Lofi',
                    capa: "study-lofi_resized.png"
                },
                {
                    id: 7,
                    nome: 'Lofi Rain',
                    capa: "R.jpeg"
                },
                {
                    id: 8,
                    nome: 'Relaxing Music',
                    capa: "capa-lofi.jpeg"
                },
            ]

        };
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../images/${name}`,import.meta.url).href
        }
    }
}
</script>
