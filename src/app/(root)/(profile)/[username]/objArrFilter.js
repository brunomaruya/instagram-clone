export const filterObjectsByIds = (objects, ids) => {
  if (ids) {
    // Filtra a lista de objetos para incluir apenas aqueles cujos IDs estão na lista de IDs fornecida
    console.log(ids);
    const filteredObjects = objects.filter((object) => ids.includes(object.id));
    return filteredObjects;
  }
};
