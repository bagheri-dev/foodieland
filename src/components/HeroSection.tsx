const HeroSection = () => {
  return (
    <section className="relative container mx-auto rounded-lg">
      <div className="bg-[#E7FAFE] flex justify-between items-center">
        <div className="p-12 space-y-10">
          <div>
            <button className="flex gap-x-2 bg-white rounded-full py-3 px-6">
              <img src="/images/icon/recipes.svg" alt="" />
              Hot Recipes
            </button>
          </div>
          <h1 className="text-6xl font-bold">Spicy delicious chicken wings</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className="flex gap-x-5">
            <button className="flex items-center gap-x-2 bg-black/5 py-2 px-3 rounded-full"><img src="/public/images/icon/Timer.svg" alt="" />30 Minutes</button>
            <button className="flex items-center gap-x-2 bg-black/5 py-2 px-3 rounded-full"><img src="/public/images/icon/ForkKnife.svg" alt="" />Chicken</button>
          </div>
          <div className="flex items-center justify-between mt-20">
            <div className="flex items-center gap-x-5">
                <img className="size-12 rounded-full" src="/public/images/men.png" alt="" />
                <div>
                    <p className="font-bold">John Smith</p>
                    <span className="text-slate-600">15 March 2022</span>
                </div>
            </div>
            <div>
                <button className="flex items-center gap-x-3 rounded-2xl bg-black text-white text-sm py-5 px-9">View Recipes <img src="/public/images/icon/PlayCircle.svg" alt="" /></button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full h-full"
            src="/public/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png"
            alt=""
          />
        </div>
        <div className="absolute top-5 left-1/3">
            <img className="size-36" src="/public/images/Badge.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
