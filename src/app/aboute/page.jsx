import ContactButton from "@/components/grouping/ContactButton";
import InspiredButton from "@/components/grouping/InspiredButton/indax";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-main-primary">
      <div className="p-4">
        <h1 className="text-3xl text-bold">Farel Nanda S</h1>
        <p className="text-md">As Creator Web</p>
        <div className="pt-4">
          <h3 className="text-2xl">Contact :</h3>
          <ContactButton />
        </div>
      </div>
      <div className="p-4">
        <div>
          <p>
            Web ini terinspirasi dari seorang influencer pemrograman atau
            content creator youtube yang bernama Dea Afrizal dengan sedikit
            memodifikasi dan menambah kan beberapa fitur tambahan kedalam web
            anime list ini.
          </p>
          <InspiredButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
