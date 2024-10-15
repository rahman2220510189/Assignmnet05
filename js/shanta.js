
  let totalNavbarAmount = 5500;
 
  function handleDonation(inputId, amountSpanId, buttonId) {
      const inputField = document.getElementById(inputId);
      const donationButton = document.getElementById(amountSpanId);
      const donateNowButton = document.getElementById(buttonId);
      let currentAmount = 0;

      donateNowButton.addEventListener('click', function() {
          const enteredAmount = parseFloat(inputField.value) || 0; 

          if (enteredAmount > 0) {
              currentAmount += enteredAmount; 
              donationButton.textContent = `${currentAmount} BDT`; 

              totalNavbarAmount -= enteredAmount; 
              document.getElementById('navbar-amount').textContent = `${totalNavbarAmount} BDT`; 

             inputField.value = '';
          }
          const historyEntry = document.createElement('li');
          historyEntry.textContent = `You donated ${enteredAmount} BDT to ${cause}`;
          historyList.appendChild(historyEntry);
      });
  }

  handleDonation('donation-input-noakhali', 'donation-amount-noakhali', 'donate-now-noakhali');
  handleDonation('donation-input-feni', 'donation-amount-feni', 'donate-now-feni');
  handleDonation('donation-input-quota', 'donation-amount-quota', 'donate-now-quota');

