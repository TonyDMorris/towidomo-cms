"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: (ctx) => {
    return strapi.query("restaurant").find(ctx.query, ["menu_categories.food_items.food_item_options", "menu_categories.menu_deals.menu_deal_options.food_items"

    ]);
  },
};
