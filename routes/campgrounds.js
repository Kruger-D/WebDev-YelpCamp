const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const campgrounds = require("../controllers/campgrounds");
const { isLoggedIn, validateCampground, isAuthor } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

router
	.route("/")
	.get(catchAsync(campgrounds.index))
	.post(
		isLoggedIn,
		upload.array("image"),
		validateCampground,
		catchAsync(campgrounds.createCampground)
	);

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//id
router
	.route("/:id")
	.get(catchAsync(campgrounds.showCampground))
	.put(
		isLoggedIn,
		isAuthor,
		upload.array("image"),
		validateCampground,
		catchAsync(campgrounds.updateCampground)
	)
	.delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

//edit//
router.get(
	"/:id/edit",
	isLoggedIn,
	isAuthor,
	catchAsync(campgrounds.renderEditForm)
);
//do the editing

//delete campground

module.exports = router;
