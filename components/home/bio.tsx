import React from "react";

export default function Bio() {
  return (
    <section className="py-16 md:py-32 px-8 flex flex-col md:flex-row gap-y-8">
      <div className="flex-[30%] md:pl-16">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium">BIO</h2>
      </div>
      <div className="flex-[60%] sapce-y-4 md:space-y-6">
        <h3 className="text-2xl">Professional Consulting</h3>
        <p className="md:w-[80%] text-justify leading-relaxed text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          officia exercitationem ipsam facere blanditiis nostrum ut explicabo
          voluptatem, sequi ex ratione velit officiis eum, tempore non repellat
          ipsa quidem recusandae!
        </p>
      </div>
    </section>
  );
}
