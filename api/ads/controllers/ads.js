const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { location } = ctx.params;

    const entity = await strapi.services.ads.findOne({ location });
    return sanitizeEntity(entity, { model: strapi.models.ads });
  },
};