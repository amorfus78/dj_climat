const baseUrl =
  "https://en-roads.climateinteractive.org/scenario.html?v=23.6.1";

const energyProgressiveChange = "&p23=25&p16=-0.05&p30=-0.07&p35=2";
const energySurprisingChange = "&p1=100&p7=85&p10=5&p57=-10";
const energyAudaciousChange =
  "&p211=100&p4=10&p212=100&p213=100&p27=2031&p313=100&p39=250";
const energyDisruptiveChange =
  "&p196=100&p198=100&p200=100&p42=100&p306=1&p307=100&p308=2030&p310=90&p315=2030";

const energy = {
  0: "",
  15: energyProgressiveChange,
  50: energyProgressiveChange + energySurprisingChange,
  70: energyProgressiveChange + energySurprisingChange + energyAudaciousChange,
  90:
    energyProgressiveChange +
    energySurprisingChange +
    energyAudaciousChange +
    energyDisruptiveChange,
};

const productionPeopleChange = "&p63=9.9";
const productionMinimalistChange = "&p50=5&p373=50&p306=1&p287=10&p305=10";
const productionEmergeantChange = "&p47=5&p375=50";
const productionEvolutiveChange = "&p49=20&p55=0&p59=-100";
const productionRevolutionaryChange =
  "&p53=0&p261=20&p258=0&p209=1&p60=100&p61=100&p62=2040&p235=0.5&p64=1.7&p236=50";

const production = {
  0: "",
  5: productionPeopleChange,
  15: productionMinimalistChange,
  40: productionMinimalistChange + productionEmergeantChange,
  70:
    productionMinimalistChange +
    productionEmergeantChange +
    productionEvolutiveChange,
  90:
    productionMinimalistChange +
    productionEmergeantChange +
    productionEvolutiveChange +
    productionRevolutionaryChange,
};

const carbonFondametalChange = "&p65=100";
const carbonCreativeChange = "&p218=5&p208=2&p74=100";
const carbonInnovativeChange = "&p208=2&p70=100&p72=100&p76=100";

const carbon = {
  0: "",
  20: carbonFondametalChange,
  50: carbonFondametalChange + carbonCreativeChange,
  85: carbonFondametalChange + carbonCreativeChange + carbonInnovativeChange,
};

const setUrl = (energyValue, productionValue, carbonValue) => {
  let energyChanges = "";
  Object.keys(energy).forEach((element) => {
    if (energyValue >= element) {
      energyChanges = energy[element];
    }
  });

  let productionChanges = "";
  Object.keys(production).forEach((element) => {
    if (productionValue >= element) {
      productionChanges = production[element];
    }
  });

  let carbonChanges = "";
  Object.keys(carbon).forEach((element) => {
    if (carbonValue >= element) {
      carbonChanges = carbon[element];
    }
  });

  const changes = energyChanges + productionChanges + carbonChanges;
  return baseUrl + changes;
};

export const getEnRoadsService =
  ({ api }) =>
  async (energyValue, productionValue, carbonValue, graph) => {
    const changes = setUrl(energyValue, productionValue, carbonValue);

    // console.log(changes);
    // const newurl = changes.replace("&", "And");
    // console.log(newurl);
    try {
      const result = await api.get(
        `/en-roads?url=${encodeURIComponent(changes)}&graph=${graph}`
      );
      return [null, result.data];
    } catch (err) {
      return [err, null];
    }
  };
