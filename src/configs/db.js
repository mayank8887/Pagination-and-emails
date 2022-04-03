const mongoose=require('mongoose');

const connect=()=>{
    return mongoose.connect("mongodb+srv://mayank8887:8077520633@cluster0.vb0gn.mongodb.net/web15-pagination?retryWrites=true&w=majority")
}