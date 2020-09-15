//  objects : key - value pair

const myself = {
    name: "karan",
    hobby: ["coding", "chess", "cooking", "gaming"],
    address: {
        country: "India",
        state: "Uttarakhand",
        city: "Dehradun",
        district: "Doiwala",
        "post office": "jollygrant",
        village: "kaluwala"
    }
};

//    MAP : keys - value pair

console.log(myself.address.city  )

myself.hobby.forEach(element => {
    console.log(`${element} is my hobby`)
});

const fellow = new Map()

fellow.set("nik", {
    fullName: "nikhil",
    hobby: "full-stack Dev"
})

console.log(fellow.get("nik"))

fellow.set("sudi", {
    fullName: "sudhanshu",
    hobby: "Bug bounty hunter"
})

console.log(fellow.keys())

console.log(fellow.values())

fellow.delete("nik")

console.log(fellow.get("sudi"))

fellow.clear()

console.log(fellow.keys())

