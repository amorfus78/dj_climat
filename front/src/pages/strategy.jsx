import useAppContext from "@/hooks/useAppContext";
import Button from "@/web/components/Button";
import MySlider from "@/web/components/MySlider";
import { useCallback, useState } from "react";

const energyMarks = {
  values: [0, 15, 50, 70, 90],
  labels: ["Discret", "Progressif", "Surprenant", "Audacieux", "Disruptif"],
};

const productionMarks = {
  values: [0, 5, 15, 40, 70, 90],
  labels: [
    "Discret",
    "People",
    "Minimaliste",
    "Emergeant",
    "Evolutif",
    "Révolutionnaire",
  ],
};

const carbonMarks = {
  values: [0, 20, 50, 85],
  labels: ["Pause", "Fondamental", "Créatif", "Innovant"],
};

const Strategy = () => {
  const {
    actions: { getEnRoads },
  } = useAppContext();
  const [energyValue, setEnergyValue] = useState(0);
  const [productionValue, setProductionValue] = useState(0);
  const [carbonValue, setCarbonValue] = useState(0);
  const [images, setImages] = useState([]);
  const [tempIncrease, setteampIncrease] = useState(0);

  const handleSubmit = useCallback(async () => {
    const [error, data] = await getEnRoads(
      energyValue,
      productionValue,
      carbonValue,
      "greenhouse-gas-net-emmision"
    );
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    setImages([data.image]);
  });

  console.log(images);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-green-200 to-green-500">
      <div className="relative flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500 mt-14 mb-5">
          Elaborez votre stratégie
        </h1>
        <MySlider
          color="red"
          name="Changements structurels à la source (énergie et terres)"
          marks={energyMarks}
          setValue={setEnergyValue}
        />
        <MySlider
          color="blue"
          name="Changements dans la production et la consommation de biens et services"
          marks={productionMarks}
          setValue={setProductionValue}
        />
        <MySlider
          color="yellow"
          name="Bonus : élimination du carbone"
          marks={carbonMarks}
          setValue={setCarbonValue}
        />
        <Button
          onClick={handleSubmit}
          className="bg-blue-300 rounded-lg gap-2 py-1 px-2 my-2"
        >
          Valider ma stratégie
        </Button>
      </div>
      {images.length > 0 ? (
        <div className="relative flex flex-col items-center p-10 bg-white rounded-lg shadow-lg my-4">
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Strategy;
