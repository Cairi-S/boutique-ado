from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51JZELMJPt6gs7S5Rcr7bcve8cFw8NA7oZGGTYmP6futAdvxnHJkHxEnj1a66j50mwqWkPYjwc4B4XO1gKr03Erzz00kCQRT43a',
        'client_secret': 'test client secret',
    }

    return render(request, template, context)
