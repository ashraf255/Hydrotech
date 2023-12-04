import { useEffect, useState } from "react";
import DiseasesCard from "./DiseaseCard";

export default function Disease() {
  const [diseases, setDiseases] = useState({ status: false });

  useEffect(() => {
    (async function () {
      const response = await fetch("/data.json");
      const result = await response.json();
      const data = await result.diseases;

      setDiseases({ ...diseases, status: true, data });
    })();
  }, []);
  console.log(diseases);
  return (
    <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {diseases.status
            ? diseases.data.map((d) => <DiseasesCard diseases={d} key={d.id} />)
            : "Loading..."}
        </div>
      </div>
    </section>
  );
}
