const Musing = require('../../models/zeus/Musings')
const { DateTime } = require('luxon')

// GET ALL MUSINGS
module.exports.getAllMusings = async (req, res) => {
  try {
    Musing.find({}, (err, allMusings) => {
      if (!err) {
        console.log(allMusings)
        res.send(allMusings)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// CREATE NEW MUSING
module.exports.createMusing = async (req, res) => {
  // Get data from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  try {
    Musing.create(data, (err, newMusing) => {
      if (!err) {
        console.log(newMusing)
        res.send(newMusing)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// UPDATE MUSING
module.exports.updateMusing = async (req, res) => {
  // Get data and id from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  const id = await req.params.id
  try {
    Musing.findByIdAndUpdate(id, data, { new: true }, (err, updatedMusing) => {
      if (!err) {
        console.log(updatedMusing)
        res.send(updatedMusing)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// DELETE MUSING
module.exports.deleteMusing = async (req, res) => {
  // Get id from req
  const id = await req.params.id
  try {
    Musing.findByIdAndDelete(id, (err, deletedMusing) => {
      if (!err) {
        console.log(deletedMusing)
        res.send(deletedMusing)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
