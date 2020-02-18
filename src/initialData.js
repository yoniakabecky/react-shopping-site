import bag1 from "./images/bag1.jpeg";
import bag2 from "./images/bag2.jpeg";
import bag2Detail1 from "./images/bag2-detail1.jpeg";
import bag3 from "./images/bag3.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "shopping bag",
      path: "shopping-bag",
      category: "bag",
      price: 20,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      inCart: false,
      count: 0,
      total: 0,
      images: [
        {
          fields: {
            file: {
              url: bag1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "round bag",
      path: "round-bag",
      category: "bag",
      price: 40,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      inCart: false,
      count: 0,
      total: 0,
      images: [
        {
          fields: {
            file: {
              url: bag2
            }
          }
        },
        {
          fields: {
            file: {
              url: bag2Detail1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "basket bag",
      path: "basket-bag",
      category: "bag",
      price: 50,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      inCart: false,
      count: 0,
      total: 0,
      images: [
        {
          fields: {
            file: {
              url: bag3
            }
          }
        }
      ]
    }
  }
];
