'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//Retreive items for order from Strapi through "http://localhost:1337/api/orders" to Stripe
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {
      //Retreive item information from backend(Strapi)
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          //Return object
          //Object structure from Stripe Docs - Prebuilt payment flow (stripe checkout page)
          //Retreive pricing from backend for security reason.
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          }
        })
      );

      //Create Stripe session, if success redirect to confirmation
      const session = await stripe.checkout.session.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000",
        line_items: lineItems,
      });

      //Create the item order in backend(Strapi)
      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      //Return the session id
      return { id: session.id }
    }
    catch (error) {
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the charge."} };
    }
  },
}));
