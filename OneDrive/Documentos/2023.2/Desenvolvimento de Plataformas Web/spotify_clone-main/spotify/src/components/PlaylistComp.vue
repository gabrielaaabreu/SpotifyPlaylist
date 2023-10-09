<template>
    <router-link to="/playlistdetail">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="playlist in playlists" :key="playlist.id">
            <img :src= "getImageUrl(playlist.capa)" alt="Capa da playlist" />
        </div>
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            playlists: [
                {
                    id: 1,
                    nome: 'Lush Lofi',
                    capa: "lush-lofi-playlist.jpg",
                    musicas: [
                        {
                            id: 10,
                            nomeMusica: 'Lofi Study',
                            localMusica: 'src\songs\lofi-study-112191.mp3'
                        },
                        {
                            id: 11,
                            nomeMusica: 'Good Night',
                            localMusica: 'src\songs\good-night-160166.mp3'
                        }
                    ]
                },
                {
                    id: 2,
                    nome: 'Chill Lofi Beats',
                    capa: "chill-lofi-beats.jpg"
                },
                {
                    id: 3,
                    nome: 'Lofi Beats',
                    capa: "lofi-beats.jpg"
                },
                {
                    id: 4,
                    nome: 'Lofi',
                    capa: "lofi.jpg"
                },
                {
                    id: 5,
                    nome: 'Chill Lofi Study Beats',
                    capa: "study-beats-lofi.jpg"
                },
                {
                    id: 6,
                    nome: 'Study Lofi',
                    capa: "study-lofi.jpg"
                }
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
