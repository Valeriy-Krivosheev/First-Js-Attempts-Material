function calculate() {
    const bill = document.querySelector('.input__bill');
    const billValue = Number(bill.value);
    const tipsPercent = document.querySelector('.input__tips');
    const tipsValue = Number(tipsPercent.value);
    const text = document.getElementById('text');
    const percent = tipsValue / 100;
    const tips = billValue * percent;
    const totalBill = tips + billValue;
    text.innerText = 'Всего придется заплатить ' + totalBill + ' рублей';
    tipsPercent = '';

}