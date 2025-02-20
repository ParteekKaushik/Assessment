function toggleSelection(selectedOption, price, showSelections) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('active');
        let selections = option.querySelector('.selections');
        if (selections) selections.style.display = 'none';
    });

    selectedOption.classList.add('active');
    let selections = selectedOption.querySelector('.selections');
    if (showSelections && selections) selections.style.display = 'flex';

    document.querySelector('.total').textContent = "Total: $" + price.toFixed(2) + " USD";
}