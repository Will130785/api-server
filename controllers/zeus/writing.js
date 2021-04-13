const Writing = require('../../models/zeus/Writing')
const { DateTime } = require('luxon')

// GET ALL WRITING
module.exports.getAllWriting = async (req, res) => {
  try {
    Writing.find({}, (err, allWriting) => {
      if (!err) {
        console.log(allWriting)
        res.send(allWriting)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// CREATE NEW WRITING
module.exports.createNewWriting = async (req, res) => {
  // Get data from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  try {
    Writing.create(data, (err, newWriting) => {
      if (!err) {
        console.log(newWriting)
        res.send(newWriting)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// UPDATE WRITING
module.exports.updateWriting = async (req, res) => {
  // Get data and id from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  const id = await req.params.id
  try {
    Writing.findByIdAndUpdate(id, data, { new: true }, (err, updatedWriting) => {
      if (!err) {
        console.log(updatedWriting)
        res.send(updatedWriting)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// DELETE WRITING
module.exports.deleteWriting = async (req, res) => {
  // Get id from req
  const id = await req.params.id
  try {
    Writing.findByIdAndDelete(id, (err, deletedWriting) => {
      if (!err) {
        console.log(deletedWriting)
        res.send(deletedWriting)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
