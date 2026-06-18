export default function ProfileCard() {
  return (
    <address className="flex flex-col items-center dark:text-off-white py-2.5 px-7">
      <img
        src="src/assets/caio_lucas_img.png"
        alt=""
        className="w-37.5 h-37.5 rounded-full object-cover object-[50%_30%]"
      />
      <h1 className="text-3xl font-extrabold md:text-5xl mb-2 ">Caio Lucas</h1>
      <p className="text-center text-base md:text-lg max-w-112.5 font-poppins">
        Dev Frontend construindo e colaborando em projetos que geram valor para
        outras pessoas.
      </p>
    </address>
  );
}
