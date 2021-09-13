/*
    Core logic/payment flow comes from stripe.com/docs/payments/accept-a-payment
    CSS comes from stripe.com/docs/stripe-js
*/

var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();

var style = {
    base: {
        color: '#000',
        fontWeight: '500',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
            color: '#aab7c4',
        },
    },
    invalid: {
        iconColor: '#dc3545',
        color: '#dc3545',
    },
};

var card = elements.create('card', {style: style});
card.mount('#card-element');