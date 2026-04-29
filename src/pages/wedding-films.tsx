import { motion } from 'framer-motion';

const weddingFilmLinks = [
  'https://youtu.be/zQBn6EJSKNI?si=https://youtu.be/zQBn6EJSKNI?si=SqA94gQfsDQm4i3r',
  'https://youtu.be/OiQJGiFqj7A?si=jEre234vUu36xg0k',
  'https://youtu.be/5GKMismSKpI?si=8Ld6JQyKI1HEwZIh',
  'https://youtu.be/Iuutqhrpd-A?si=mOoD_vMlCtz2irxw',
  'https://youtu.be/RToNRUs_sU0?si=rr62WYiWifIQtVpQ',
  'https://www.youtube.com/watch?v=FBpFD3vQkLU',
  'https://youtu.be/SCLkNwGytvY?si=tn9ACClyqlBTx4lK',
  'https://youtu.be/fHTX4r_vUBs?si=zWUA2OhhQR5UVwAS',
];

const getYouTubeId = (link: string): string | null => {
  const match = link.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/
  );
  return match?.[1] ?? null;
};

const weddingFilms = weddingFilmLinks
  .map((link, index) => {
    const youTubeId = getYouTubeId(link);
    if (!youTubeId) return null;
    return {
      id: `yt-${youTubeId}-${index}`,
      title: `Wedding Film ${index + 1}`,
      embedSrc: `https://www.youtube-nocookie.com/embed/${youTubeId}`,
    };
  })
  .filter((film): film is { id: string; title: string; embedSrc: string } => film !== null);

export default function WeddingFilmsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: 'clamp(80px, 15vw, 117px)' }}>
      <title>Wedding Films | HEAVENLY WEDS</title>
      <meta name="description" content="Wedding films by Heavenly Weds." />

      <section style={{ padding: 'clamp(60px, 10vw, 110px) 0' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: '1320px',
            padding: '0 clamp(16px, 5vw, 60px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <p
              className="mb-4 uppercase tracking-widest"
              style={{
                fontSize: 'clamp(10px, 2vw, 11px)',
                letterSpacing: 'clamp(2px, 1vw, 3px)',
                color: '#9A9A9A',
              }}
            >
              Wedding Films
            </p>
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(34px, 8vw, 56px)',
                lineHeight: '1.15',
                color: '#C9A7A0',
                fontWeight: 400,
              }}
            >
              Wedding Films
            </h1>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {weddingFilms.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="overflow-hidden rounded-lg"
                style={{ border: '1px solid #ECECEC', backgroundColor: '#FFFFFF' }}
              >
                <div className="w-full aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={film.embedSrc}
                    title={film.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p
                    className="uppercase"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '2px',
                      color: '#7A7A7A',
                    }}
                  >
                    {film.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
