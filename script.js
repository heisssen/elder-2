document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl)
    })
});
