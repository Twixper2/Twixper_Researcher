var moment = require('moment');

function formatDate(dateToFormat, formation){
    return moment(new Date(dateToFormat)).format(formation);
}

module.exports = {
    formatDateFunc: formatDate
}