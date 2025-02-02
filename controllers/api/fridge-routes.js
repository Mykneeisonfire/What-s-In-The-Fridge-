const router = require('express').Router();
const { Fridge } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFridge = await Fridge.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFridge)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const fridgeData = await Fridge.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!fridgeData) {
      res.status(404).json({ message: 'Nothing found with this id!' });
      return;
    }

    res.status(200).json(fridgeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;