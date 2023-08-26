const AccessControl = require('accesscontrol');
let grantsObject = {
    admin: {},
    user: {}
}
const roles = new AccessControl(grantsObject);
module.exports = {roles}