const MapSection = () => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg mt-40">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.734612920506!2d46.65698760946778!3d24.724405352580316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d001748febf%3A0x869f828b20d16523!2zVHJhbnNpYSDYqtix2KzZhdipINmF2LnYqtmF2K_YqQ!5e0!3m2!1sar!2seg!4v1744848683398!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
