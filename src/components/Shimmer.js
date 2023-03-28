const Shimmer = () => {
  return (
    <section className="shimmer-cards">
      <section className="ml-10 mt-2 w-[1350px] h-5 bg-gray-200"></section>
      <section
        className="flex flex-wrap gap-3 ml-9 mt-7 "
        data-testid="shimmer"
      >
        {Array(15)
          .fill("")
          .map((e, index) => (
            <article className=" h-80 w-64 border-2  " key={index}>
              <div className="flex h-full w-full bg-gray-200 "></div>
              <h3></h3>
              <p></p>
            </article>
          ))}
      </section>
    </section>
  );
};
export default Shimmer;
