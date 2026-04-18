const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount } = JSON.parse(event.body);

    if (!amount || amount < 100) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid amount. Minimum donation is €1." }),
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Donation – The Grace Nolan Foundation",
              description: "Supporting HHT awareness in memory of Grace Nolan",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.URL}/donate-success`,
      cancel_url: `${process.env.URL}/donate`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("Stripe error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Payment session failed. Please try again." }),
    };
  }
};