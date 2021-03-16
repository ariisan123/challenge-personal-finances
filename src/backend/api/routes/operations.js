const router = require('express').Router();

router.route('/operations').get();

router.route('operations/:id').post().put();
