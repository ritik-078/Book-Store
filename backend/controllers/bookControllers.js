const express = require('express')
const Book = require('../models/bookModel.js')

const addBook = async (request,response) => {
    try{
        if(!request.body.title || !request.body.author  || !request.body.publishYear)
        {
            return response.status(400).send({
                error:'Missing fields'
            })
        }   

        const newBook = {
            title: request.body.title,
            author : request.body.author ,
            publishYear: request.body.publishYear
        }

        const book = await Book.create(newBook)

        return response.status(200).send(book)
    }

    catch(err){
        console.log(err);
        response.status(400).end({
            message: err.message
        })
    }
}

const getAllBooks = async (request,response) => {
    try{
        const books = await Book.find({})

        return response.status(200).send({
            totalBooks: books.length,
            data: books
        })
    }

    catch(err){
        console.log(err);
        response.status(400).send({
            message: err.message
        })
    }
}

const getBookByID = async (request,response) => {
    try{
        const {id} = request.params
        const book = await Book.findById(id)
        if(!book)
        {
            return response.status(404).send({message : "Book not found"})
        }
        return response.status(200).send(book)
    }

    catch(err){
        console.log(err);
        response.status(400).send({
            message: err.message
        })
    }
}

const updateBookByID = async (request,response) => {
    try{
        if(!request.body.title || !request.body.author  || !request.body.publishYear)
        {
            return response.status(400).send({
                error:'Missing fields'
            })
        } 

        const {id} = request.params 
        const booktoUpdate = await Book.findByIdAndUpdate(id,request.body);

        if(!booktoUpdate)
        {
            return response.status(400).send({
                error: 'Book not found'
            })
        }
        return response.status(200).send(booktoUpdate)
    }

    catch(err){
        console.log(err);
        response.status(400).send({
            message: err.message
        })
    }
}

const DeleteBookByID = async (request,response) => {
    try{
        const {id} = request.params 
        const booktoDelete = await Book.findByIdAndDelete(id,request.body);

        if(!booktoDelete )
        {
            return response.status(400).send({
                error: 'Book not found'
            }) 
        }
        return response.status(200).send({message : "Book Deleted"})
    }

    catch(err){
        console.log(err);
        response.status(400).send({
            message: err.message
        })
    }
}

module.exports = {
    addBook, getAllBooks, getBookByID, updateBookByID, DeleteBookByID
}