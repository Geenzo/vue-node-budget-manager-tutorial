const passport = require('passport'),
    config = require('@config'),
    models = require('@BudgetManager/app/setup');

module.exports = (app) => {
    const api = app.BudgetManagerAPI.app.api.client;

    app.route('/app/v1/client')
        .post(passport.authenticate('jwt', config.session), api.store(models.User, models.Client, app.get('budgetsecret')))
        .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Client, app.get('budgetsecret')));
}