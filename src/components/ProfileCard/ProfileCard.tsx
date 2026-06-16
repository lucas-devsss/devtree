export default function ProfileCard() {
  return (
    <address className="flex flex-col items-center dark:text-off-white dark:bg-black-base py-2.5 px-7">
      <img
        src="https://i.pinimg.com/736x/96/87/70/968770a730af56c3087cef058f3ffab2.jpg"
        alt=""
        className="max-w-37.5 max-h-37.5 rounded-full"
      />
      <h1 className="text-3xl font-extrabold md:text-5xl mb-2">Caio Lucas</h1>
      <p className="text-center text-xs md:text-lg max-w-112.5">
        Dev Frontend construindo e colaborando em projetos que gerem valor para
        outras pessoas.
      </p>
    </address>
  );
}
