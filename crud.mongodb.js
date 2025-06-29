use("learning")
// db.tutorial.insertMany(
//    [
//   {
//     "name": "arjun",
//     "age": 21,
//     "assignment": "pending",
//     "attendance": 85
//   },
//   {
//     "name": "meera",
//     "age": 19,
//     "assignment": "submitted",
//     "attendance": 92
//   },
//   {
//     "name": "rahul",
//     "age": 22,
//     "assignment": "not submitted",
//     "attendance": 76
//   },
//   {
//     "name": "isha",
//     "age": 20,
//     "assignment": "submitted",
//     "attendance": 88
//   },
//   {
//     "name": "karan",
//     "age": 21,
//     "assignment": "pending",
//     "attendance": 80
//   },
//   {
//     "name": "neha",
//     "age": 20,
//     "assignment": "submitted",
//     "attendance": 94
//   },
//   {
//     "name": "vijay",
//     "age": 23,
//     "assignment": "not submitted",
//     "attendance": 70
//   },
//   {
//     "name": "priya",
//     "age": 19,
//     "assignment": "submitted",
//     "attendance": 96
//   },
//   {
//     "name": "amit",
//     "age": 22,
//     "assignment": "pending",
//     "attendance": 83
//   }
// ]

// )
// let a = db.tutorial.find({assignment:"submitted"})
// console.log(a.count())
// let a = db.tutorial.findOne({assignment:"submitted"})
// console.log(a)
// db.tutorial.updateOne({assignment:"pending"},{$set:{assignment:"submitted"}})
// db.tutorial.deleteMany({"attendance": {$lt:80}})