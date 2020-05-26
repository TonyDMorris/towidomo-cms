"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: (ctx) => {
    return strapi.query("restaurant").find(ctx.query, [
      {
        path: "menu_categories",
        populate: {
          path: "food_items",
        },
      },
      {
        path: "menu_deals",
        populate: {
          path: "menu_deal_options",
        },
      },
    ]);
  },
};
