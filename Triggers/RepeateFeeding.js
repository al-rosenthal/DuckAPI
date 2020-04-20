/*

  Trigger added to Mongo DB for dealing with repeat duck feeding.
  This trigger is configured to run once a day at 5 AM, collects all documents where repeatFeeding == true
  Then duplicates the item, updates the date for today and keeps the same time, then saves it back to the collection

*/
exports = function () {
	const newFeeds = [];
	// Instantiate MongoDB collection handles
	const collection = context.services
		.get('WFRP')
		.db('duck')
		.collection('feedings');
	return collection
		.find({ repeatFeeding: { $eq: true } })
		.toArray()
		.then((items) => {
			items.forEach((item) => {
				let copy = item;
				copy.repeatFeeding = false;
				copy.feedingTime = convertDate(item.feedingTime);
				delete copy._id;
				newFeeds.push(copy);
			});

			return collection
				.insertMany(newFeeds)
				.then((result) => {
					console.log(
						`Successfully inserted ${result.insertedIds.length} items!`
					);
					return result;
				})
				.catch((err) => console.error(`Failed to insert documents: ${err}`));
		});
};

function convertDate(oldDate) {
	let newDate;
	const today = new Date();
	oldDate = new Date(oldDate);
	// I want to keep the original feeding time but update the date when this runs
	newDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
		oldDate.getHours(),
		oldDate.getMinutes(),
		oldDate.getSeconds()
	);
	return newDate;
}
