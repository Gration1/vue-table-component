const settings = {
    tableClass: '',
    theadClass: '',
    tbodyClass: '',
    headerClass: '',
    cellClass: '',
    filterInputClass: '',
    filterPlaceholder: 'Filter table…',
    filterNoResults: 'There are no matching rows',
    paginationUlClass: 'pagination justify-content-center',
    paginationLiFirstClass: 'page-item',
    paginationLiLastClass: 'page-item',
    paginationLiEllipsisClass: '',
    paginationLiPrevClass: '',
    paginationLiNextClass: '',
    paginationLiPageClass: 'page-item',
};

export function mergeSettings(newSettings) {
    for (const setting in newSettings) {
        settings[setting] = newSettings[setting];
    }
}

export default settings;
