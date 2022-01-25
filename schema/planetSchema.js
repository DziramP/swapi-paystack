export const planets = {
  name: "Yavin IV",
  rotation_period: "24",
  orbital_period: "4818",
  diameter: "10200",
  climate: "temperate, tropical",
  gravity: "1 standard",
  terrain: "jungle, rainforests",
  surface_water: "8",
  population: "1000",
  residents: [],
  films: ["https://swapi.dev/api/films/1/"],
  created: "2014-12-10T11:37:19.144000Z",
  edited: "2014-12-20T20:58:18.421000Z",
  url: "https://swapi.dev/api/planets/3/",
};

export const planetSchema = {
  title: "Planet Schema",
  type: "object",
  required: [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
    "residents",
    "films",
    "created",
    "edited",
    "url",
  ],
  properties: {
    name: {
      type: "string",
    },
    rotation_period: {
      type: "string",
    },
    orbital_period: {
      type: "string",
    },
    diameter: {
      type: "string",
    },
    climate: {
      type: "string",
    },
    gravity: {
      type: "string",
    },
    terrain: {
      type: "string",
    },
    surface_water: {
      type: "string",
    },
    population: {
      type: "string",
    },
    residents: {
      type: "array",
      items: {
        type: "string",
      },
    },
    films: {
      type: "array",
      items: {
        type: "string",
      },
    },
    created: {
      type: "string",
    },
    edited: {
      type: "string",
    },
    url: {
      type: "string",
    },
  },
};
