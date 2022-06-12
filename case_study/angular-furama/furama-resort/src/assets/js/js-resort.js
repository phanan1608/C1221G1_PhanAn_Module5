function threeDotForFacility(){
  document.querySelector('.card-all').onclick = ({
                                                   target
                                                 }) => {
    if (!target.classList.contains('more')) return;
    document.querySelectorAll('.dropout.active').forEach(
      (d) => d !== target.parentElement && d.classList.remove('active')
    );
    target.parentElement.classList.toggle('active');
  };
}
function threeDotForCustomer(){
  document.querySelector('.table').onclick = ({
                                                target
                                              }) => {
    if (!target.classList.contains('more')) return;
    document.querySelectorAll('.dropout.active').forEach(
      (d) => d !== target.parentElement && d.classList.remove('active')
    );
    target.parentElement.classList.toggle('active');
  };
}
