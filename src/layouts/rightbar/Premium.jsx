import React from "react";
import Button from "../../components/Button";

const Premium = () => {
  return (
    <section className=" mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e0ea]">
      <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
      <p className="leading-5 text-[15px] font-bold">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <Button>Abone Ol</Button>
      </div>
    </section>
  );
};

export default Premium;
