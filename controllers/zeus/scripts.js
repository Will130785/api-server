const Script = require('../../models/zeus/Scripts')
const { DateTime } = require('luxon')

// GET ALL SCRIPTS
module.exports.getAllScripts = async (req, res) => {
  try {
    Script.find({}, (err, allScripts) => {
      if (!err) {
        console.log(allScripts)
        res.send(allScripts)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// CREATE NEW SCRIPT
module.exports.createNewScript = async (req, res) => {
  // Get data from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  try {
    Script.create(data, (err, newScript) => {
      if (!err) {
        console.log(newScript)
        res.send(newScript)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// UPDATE SCRIPT
module.exports.updateScript = async (req, res) => {
  // Get data and id from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  const id = await req.params.id
  try {
    Script.findByIdAndUpdate(id, data, { new: true }, (err, updatedScript) => {
      if (!err) {
        console.log(updatedScript)
        res.send(updatedScript)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// DELETE SCRIPT
module.exports.deleteScript = async (req, res) => {
  // Get id from req
  const id = await req.params.id
  try {
    Script.findByIdAndDelete(id, (err, deletedScript) => {
      if (!err) {
        console.log(deletedScript)
        res.send(deletedScript)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
