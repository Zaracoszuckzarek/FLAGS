import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      flags: Model,
    },

    seeds(server) {
      server.create("flag", {
        img: "/src/assets/images/argentina.jpg",
        name: "Argentina",
        price: 15,
        description:
          "If Chicago-style hot dogs don't come to mind when you think of the Windy City, then you're definitely thinking of deep dish pizza. The most notable spots making this creation are Lou Malnati's Pizzeria and Giordano's, which both opened their first locations in the 1970s. The pie has high edges and a thick crust, and gets topped with cheese and then sauce.",
        country: "Argentina",
      });

      server.create("flag", {
        img: "/src/assets/images/australia.jpg",
        name: "Aussie",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Australia",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/israel.png",
        name: "Isrealis flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Isreal",
      });

            server.create("flag", {
              img: "/src/assets/images/british.png",
              name: "Britsh flag",
              price: 30,
              description:
                "Outside of Italian pizza, New York-style pizza might be the most popular style in",
              country: "UK",
            });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

            server.create("flag", {
              img: "/src/assets/images/british.png",
              name: "Britsh flag",
              price: 30,
              description:
                "Outside of Italian pizza, New York-style pizza might be the most popular style in",
              country: "UK",
            });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/australia.jpg",
        name: "Aussie",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Australia",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

            server.create("flag", {
              img: "/src/assets/images/british.png",
              name: "Britsh flag",
              price: 30,
              description:
                "Outside of Italian pizza, New York-style pizza might be the most popular style in",
              country: "UK",
            });

            server.create("flag", {
              img: "/src/assets/images/brazil.png",
              name: "Brazilian flag",
              price: 30,
              description:
                "Outside of Italian pizza, New York-style pizza might be the most popular style in",
              country: "Brazil",
            });

      server.create("flag", {
        img: "/src/assets/images/argentina.jpg",
        name: "Argentine flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "argentina",
      });

      server.create("flag", {
        img: "/src/assets/images/south-korea.png",
        name: "South-Korean flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "South-Korea",
      });

      server.create("flag", {
        img: "/src/assets/images/switzerland.png",
        name: "Swiss flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Switzerland",
      });


      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/guatemala.png",
        name: "Guatemalan flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Guatemala",
      });

      server.create("flag", {
        img: "/src/assets/images/kazakhstan.png",
        name: "Kazakhstan flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Kazakhstan",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "../src/assets/images/israel.png",
        name: "Isrealis",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Isreal",
      });

      server.create("flag", {
        img: "/src/assets/images/east-timor.png",
        name: "East-Timor flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "East-Timor",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/british.png",
        name: "Britsh flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "UK",
      });

      server.create("flag", {
        img: "/src/assets/images/switzerland.png",
        name: "Swiss flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Switzerland",
      });

      server.create("flag", {
        img: "/src/assets/images/argentina.jpg",
        name: "Argentine",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Argentina",
      });

      server.create("flag", {
        img: "/src/assets/images/puerto-rico.jpg",
        name: "Puerto-Rican flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Puerto-Rico",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/australia.jpg",
        name: "Aussie flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Australia",
      });

      server.create("flag", {
        img: "/src/assets/images/tunisia.png",
        name: "Tunisian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Tunisia",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/USA.png",
        name: "American flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "USA",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/mauritania.jpg",
        name: "Mauritanian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Mauritania",
      });

      server.create("flag", {
        img: "/src/assets/images/rwanda.png",
        name: "Rwandan flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Rwanda",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/argentina.jpg",
        name: "Argentine flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Argentina",
      });

      server.create("flag", {
        img: "/src/assets/images/puerto-rico.jpg",
        name: "Puerto-Rican flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Puerto-Rico",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuadorian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/australia.jpg",
        name: "Aussie flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Australia",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/tunisia.png",
        name: "Tunisian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Tunisia",
      });

      server.create("flag", {
        img: "/src/assets/images/mauritania.jpg",
        name: "Mauritanian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Mauritania",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/rwanda.png",
        name: "Rwanda flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Rwanda",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/puerto-rico.jpg",
        name: "Puerto-Rico",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Puerto-Rico",
      });

      server.create("flag", {
        img: "/src/assets/images/belgium.png",
        name: "Belgium flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Belgium",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/australia.jpg",
        name: "Aussies flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Australia",
      });

      server.create("flag", {
        img: "/src/assets/images/tunisia.png",
        name: "Tunisia flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Tunisia",
      });

      server.create("flag", {
        img: "/src/assets/images/ecuador.png",
        name: "Ecuador",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Ecuador",
      });


      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });

      server.create("flag", {
        img: "/src/assets/images/brazil.png",
        name: "Brazilian flag",
        price: 30,
        description:
          "Outside of Italian pizza, New York-style pizza might be the most popular style in",
        country: "Brazil",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/flags", (schema) => {
        return schema.flags.all();
      });

      this.get("/flags/:id", (schema, request) => {
        const id = request.params.id;
        return schema.flags.find(id);
      });
    },
  });
  return server;
}
