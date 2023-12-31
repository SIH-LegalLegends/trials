import React from "react";

const Card = () => {
  return (
    <>
    {/** 
      <section id="categories" className="pt-1 justify-between p-20 lg:pt-[100px] pb-8 lg:pb-16 h-full bg-[#F3F4F6]">
    <div className="text-center text-5xl text-[#2e34d2]"><p>𝐂𝐚𝐬𝐞 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬</p></div>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          <SingleCard
            image="https://t3.ftcdn.net/jpg/02/01/85/16/360_F_201851665_Sq1AxtGX4YhtUY8T0xXV7pWnz0ppHdbZ.jpg"
            CardTitle="Recent Cases"
            titleHref="/#home"
            btnHref="/#"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard className
            image="https://gumlet.assettype.com/barandbench%2F2022-01%2Ff68ec081-f6e7-46e6-b82c-07fb30e85c43%2F17.jpg?format=auto"
            CardTitle="Active Cases"
            titleHref="/#home"
            btnHref="/#home"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://gumlet.assettype.com/barandbench%2Fimport%2F2019%2F02%2FPENDING-CASES-3.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6"
            CardTitle="Pending Cases"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </section>
    */}
     <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" 
          src="https://t3.ftcdn.net/jpg/02/01/85/16/360_F_201851665_Sq1AxtGX4YhtUY8T0xXV7pWnz0ppHdbZ.jpg"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full"
           src="https://gumlet.assettype.com/barandbench%2F2022-01%2Ff68ec081-f6e7-46e6-b82c-07fb30e85c43%2F17.jpg?format=auto"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" 
          src="https://gumlet.assettype.com/barandbench%2Fimport%2F2019%2F02%2FPENDING-CASES-3.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Card;

{/** 
const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      
      <div className="overflow-hidden bg-white rounded-lg ">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed mb-7 text-body-color">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};



*/}
