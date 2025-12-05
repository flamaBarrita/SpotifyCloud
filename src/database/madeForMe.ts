// NOTA: Si TypeScript se queja de "audioSrc", no te preocupes,
// lo arreglaremos en el siguiente paso modificando la interfaz.

// @ts-ignore  <-- Agrega esto si te da error de tipo temporalmente
const madeForMe = [
  {
    id: 1,
    urlImage: '/Frame1.png',
    title: `Mi Video Híbrido (AWS+OCI)`,
    description: 'Streaming desde la Nube',
    // ¡AQUÍ ESTÁ LA MAGIA!
    audioSrc: 'https://d3dzx21eajwj7z.cloudfront.net/exaaudio.mp4', // Tu URL de CloudFront
  },
  {
    id: 2,
    urlImage: '/Frame2.png',
    title: `Lenny's Talk`,
    description: 'Lenny',
    audioSrc: 'https://d3dzx21eajwj7z.cloudfront.net/c1.mp3', // Los demás pueden estar vacíos por ahora
  },
  {
    id: 3,
    urlImage: '/Frame3.png',
    title: `The Morgan Ep.03`,
    description: 'Morgan Housel',
    audioSrc: 'https://d3dzx21eajwj7z.cloudfront.net/c2.mp3',
  },
  {
    id: 4,
    urlImage: '/Frame4.png',
    title: `Yasheng Ep.173`,
    description: 'Yasheng & CIA',
    audioSrc: 'https://d3dzx21eajwj7z.cloudfront.net/c3.mp3',
  },
  {
    id: 5,
    urlImage: '/Frame5.png',
    title: `The Desi PodCast 03`,
    description: 'Desi',
    audioSrc: 'https://d3dzx21eajwj7z.cloudfront.net/c4.mp3',
  },
]

export { madeForMe }