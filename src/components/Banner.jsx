import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?shopping)' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-white font-bold bg-black/50 px-6 py-3 rounded-xl"
      >
        Welcome to ShopEase
      </motion.h1>
    </section>
  );
};

export default Banner;
