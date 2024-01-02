import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
export async function deleteListing(req, res, next) {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
}

export async function updateListing(req, res, next) {
  const listing = await Listing.findById(req.params.id);
  console.log(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "listing not found"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
}

export async function getListing(req, res, next) {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "listing not found"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
}

export async function getListings(req, res, next) {
  // getting info from query and have a limit for query
  try {
    // this means if there is a limit in the query, uses it, otherwise use 9
    const limit = parseInt(req.query.limit) || 9;
    // This is the same thing as above.
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer; // this can be true or false or undefined
    // this will be undefined if users use search bar for looking up listings
    if (offer === undefined || offer === "false") {
      // this means search in the database for both true and false
      offer = { $in: [false, true] };
    }
    // the same thing will happen to furnished
    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      // look for both true and false in database
      furnished = { $in: [false, true] };
    }
    // handling parking quer
    let parking = req.query.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    // these are all the default behavior if there is no input for these three queries
    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const listings = await Listing.find({
      // options i => don't care about uppercase or lowercase
      name: { $regex: searchTerm, $options: "i" }, // using regex and options i to look for listing that match user's search preference
      offer,
      furnished,
      parking,
      type,
    })
      .sort({
        // sorting behavior will be by the time the listings were created for default
        [sort]: order,
      })
      .limit(limit)
      .skip(startIndex);
    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
}
