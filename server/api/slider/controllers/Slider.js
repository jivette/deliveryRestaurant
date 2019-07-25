'use strict';

/**
 * Slider.js controller
 *
 * @description: A set of functions called "actions" for managing `Slider`.
 */

module.exports = {

  /**
   * Retrieve slider records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.slider.search(ctx.query);
    } else {
      return strapi.services.slider.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a slider record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.slider.fetch(ctx.params);
  },

  /**
   * Count slider records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.slider.count(ctx.query, populate);
  },

  /**
   * Create a/an slider record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.slider.add(ctx.request.body);
  },

  /**
   * Update a/an slider record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.slider.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an slider record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.slider.remove(ctx.params);
  }
};
