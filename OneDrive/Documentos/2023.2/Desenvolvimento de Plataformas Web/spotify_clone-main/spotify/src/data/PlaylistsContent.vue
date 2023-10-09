<script>
import Vue from '@vitejs/plugin-vue'
import reactive from "vue"

const playlistsContent = reactive([
        {
            id: 1,
            nome: 'Lush Lofi',
            capa: "lush-lofi-playlist.jpg",
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
    ])

export default ({
    plugins: [Vue()],
    setup() {
        return {
            playlistsContent
        }
    }
})
</script>
