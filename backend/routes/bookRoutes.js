const express = require('express')
const router = express.Router() 
const {addBook, getAllBooks, getBookByID, updateBookByID, DeleteBookByID} = require('../controllers/bookControllers')
 
router.post('/', addBook)

router.get('/', getAllBooks)

router.get('/:id', getBookByID)

router.put('/:id', updateBookByID)

router.delete('/:id', DeleteBookByID)


module.exports.bookRouter = router