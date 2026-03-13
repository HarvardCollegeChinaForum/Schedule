type MapEmbedProps = {
  query: string;
  title: string;
};

export function MapEmbed({ query, title }: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mapFrame">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
