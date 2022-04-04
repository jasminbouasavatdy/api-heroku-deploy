const router = require('express').Router();
const { Location, Traveller, Trip } = require('../models');

router.get('/api/travellers', async (req, res) => {
  const travellerData = await Traveller.findAll({});

  res.json({ travellerData });
})

router.post('/api/travellers', async (req, res) => {
  const travellerData = await Traveller.create({
    traveller_name: req.body.traveller_name
  });

  res.json({ travellerData });
})

router.get('/api/travellers/:id', async (req, res) => {
  const travellerData = await Traveller.findByPk(req.params.id, {
    // include: [{ model: Location }, { model: Trip }]
  });

  res.json({ travellerData });
})

router.delete('/api/travellers/:id', async (req, res) => {
  const travellerData = await Traveller.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.json({ travellerData });
})


router.get('/api/locations', async (req, res) => {
  const locationData = await Location.findAll({});

  res.json({locationData});
})

router.post('/api/locations', async (req, res) => {
  const locationData = await Location.create({
    location_name: req.body.location_name
  });
  res.json({locationData});
})

router.get('/api/locations/:id', async (req, res) => {
  const locationData = await Location.findByPk(req.params.id,{
    // include: [{ model: Location}, {model: Trip}],
  });
  res.json({locationData});
})

router.delete('/api/locations/:id', async (req, res) => {
  const locationData = await Location.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({locationData});
})
router.get('/api/trips', async (req, res) => {
  const tripData = await Trip.findAll({});
    res.json({tripData});
  })

router.post('/api/trips', async (req, res) => {
const tripData = await Trip.create({
  trip_budget: req.body.trip_budget,
  traveller_amount: req.body.traveller_amount,
});
  res.json({tripData});
})

router.delete('/api/trips', async  (req, res) => {
  const tripData = await Trip.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.json({tripData});
})

module.exports = router;
