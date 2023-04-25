
paypal.Buttons({
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '$80' // Replace with the price of your event
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    // Capture the funds from the transaction
    return actions.order.capture().then(function(details) {
      // Show a success message to your buyer
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Handle post-payment actions, like event registration, on your website
    });
  }
}).render('#paypal-button-container');
