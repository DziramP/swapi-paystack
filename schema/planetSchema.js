const planetSchema = {
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

module.exports = { planetSchema };
