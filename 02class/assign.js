// let num = 57
// let char = "ch"
// console.log(num + char)
// console.log(num + 5)
// console.log(num + 'so')
// console.log(char * 5)
// console.log(5 * char)
// console.log('so' * 6)

// let num = 34
// let num1 = 365
// console.log(num + num1)
// console.log(num - num1)
// console.log(num * num1)
// console.log(num % num1)

// let arr1 = [34,5,32,44,32]
// let arr2 = [32,43,34,22,34]
// console.log(arr1 + arr2)
// console.log(arr1[3] + arr1[2] + arr2[0] + arr2[1])
// console.log(arr1[4] - arr2[1])
// console.log(arr1[1] * arr2[0])
// console.log(arr1[3] % arr2[1])

// let cal = {'age':39,'month':7}
// let cal1 = {'age':19,'month':12}
// console.log(cal['age'] + cal1['age'])
// console.log(cal['age'] - cal1['age'])
// console.log(cal['age'] * cal1['age'])
// console.log(cal['age'] / cal1['age'])
// const arr = [true,234,{"name":"ayush",age:[2,4,5]}]
// console.log(arr[2]["age"][1])
// let arr1 = {
//     "items":
//     {
//         "item":
//             [
//                 {
//                     "id": "0001",
//                     "type": "donut",
//                     "name": "Cake",
//                     "ppu": 0.55,
//                     "batters":
//                     {
//                         "batter":
//                             [
//                                 { "id": "1001", "type": "Regular" },
//                                 { "id": "1002", "type": "Chocolate" },
//                                 { "id": "1003", "type": "Blueberry" },
//                                 { "id": "1004", "type": "Devil's Food" }
//                             ]
//                     },
//                     "topping":
//                         [
//                             { "id": "5001", "type": "None" },
//                             { "id": "5002", "type": "Glazed" },
//                             { "id": "5005", "type": "Sugar" },
//                             { "id": "5007", "type": "Powdered Sugar" },
//                             { "id": "5006", "type": "Chocolate with Sprinkles" },
//                             { "id": "5003", "type": "Chocolate" },
//                             { "id": "5004", "type": "Maple" }
//                         ]
//                 },
//             ]
//     }
// }
// console.log(arr1["items"]["item"][0]["batters"]["batter"][3]["type"])

let arr = [
    {
        "label_id": 1,
        "label_name": "Category",
        "label": "Category",
        "type": "list",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 332,
                "display_name": "Sarees",
                "payload": "eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzMyIn0=",
                "image_url": "https://images.meesho.com/images/marketing/70de1d83-b84c-41ba-98e6-dfcf9a818959.png",
                "selected": false
            }
        ]
    },
    {
        "label_id": 9,
        "label_name": "Gender",
        "label": "Gender",
        "type": "pill",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 443,
                "display_name": "Women",
                "payload": "eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0=",
                "image_url": "https://images.meesho.com/images/marketing/1598808287970.png",
                "selected": false
            }
        ]
    },
    {
        "label_id": 4,
        "label_name": "Color",
        "label": "Color",
        "type": "pill",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 2322,
                "display_name": "Beige",
                "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjMyMiJ9",
                "selected": false
            },
            {
                "label_value_id": 29,
                "display_name": "Black",
                "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjkifQ==",
                "image_url": "https://images.meesho.com/images/marketing/c39647e6-d742-4e4e-bee8-f53c4fe3cad0.png",
                "selected": false
            },
        ]
    }
]
console.log(arr[2]["values"][1]["image_url"])