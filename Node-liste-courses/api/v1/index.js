const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const mongoose = require('mongoose');




router.get('/ping', (req, res) => {
	res.status(200).json({ msg: 'pong', date: new Date()});
});//localhost:3500/ping



router.get('/food',(req, res) => {
	Food.find()
	.sort({'createdOn': -1})
	.exec()
	.then(food =>res.status(200).json(food))
    .catch(err=> res.status(500).json({
		message:'food not found:(',
		error: err
	}));
});  

router.post('/food', (req, res) => {
	console.log('req.body', req.body);
	const food = new Food(req.body);
	food.save((err, food)=>{
		if (err) {
			return res.status(500).json(err);
		}
		res.status(201).json(food);

	});

});

router.get('/food/:id', (req, res) => {
	 const id = req.params.id;
	 Food.findById(id)
	 .then(food => res.status(200).json(food))
	.catch(err => res.status(500).json({
		message:`food with id ${id} not found`,
		error: err
	}));
	})


router.delete('/food/:id', (req, res) => {
	const id = req.params.id;
	Food.findByIdAndDelete(id, (err, food) =>{
		if (err) {
			return res.status(500).json(err);
		}
		res.status(202).json({msg:`food with id ${Food._id} deleted` })

	})
});



router.delete('/food', (req, res) => {
	// retrieves the query parameter: http://localhost:3000/api/v1/blog-posts?ids=5c1133b8225e420884687048,5c1133b6225e420884687047
	const ids = req.query.ids;
	console.log('query ids', ids);
	const allIds = ids.split(',').map(id => {
		// casting as a mongoose ObjectId	
		if (id.match(/^[0-9a-fA-F]{24}$/)) {
			return mongoose.Types.ObjectId((id));	  	 
		}else {
			console.log('id is not valid', id);
			
		}
	});
	const condition = { _id: { $in: allIds} };
	Food.deleteMany(condition, (err, result) => {
		if (err) {
			return res.status(500).json(err);
		}
		res.status(202).json(result);
	});
});


router.put('/food/:id',(req,res) => {
	const id =req.params.id;
	const conditions = {_id: id};
	const food = {...req.body };
	const update = { $set: food};
	const options = {
		upsert : true,
		new: true
	};
	Food.findOneAndUpdate(conditions, update, options,(err, response) =>{
	if (err) return res.status(500).json({msg: 'update failed', error: err});

	
	res.status(200).json({ msg: `document with id ${id} updated`, response : response});

});
})





//passsport




module.exports = router;
