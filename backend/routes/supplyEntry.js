var express = require("express");
var router = express.Router();
const supplyEntryCtrl = require("../controller/supplyEntry.ctrl");

router.post("/", (req, res) => {
  supplyEntryCtrl.createSupplyEntry(req, res);
}); // Create supplyEntry

router.get("/", (req, res) => {
  supplyEntryCtrl.getAllSupplyEntrys(req, res);
});

router.get("/:id", (req, res) => {
  supplyEntryCtrl.getSupplyEntryById(req, res);
});

router.put("/:id", (req, res) => {
  supplyEntryCtrl.updateSupplyEntry(req, res);
});

router.delete("/:id", (req, res) => {
  supplyEntryCtrl.deleteSupplyEntry(req, res);
});

module.exports = router;
