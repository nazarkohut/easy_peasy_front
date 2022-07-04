// export function getServerErrorText(errorValue: any): string {
//   console.log(errorValue);
//   if (typeof (errorValue) === 'string') {
//     return errorValue
//   } else if (typeof (errorValue) === 'object') {
//     return errorValue?.[0]
//   }
//   return String();
// }
let maximalNumberOfNestedObjects = 10;

function getServerErrorHelper(errorValue: any, numberOfIterations = 0): string {
  // console.log("here", typeof(errorValue))
  if (numberOfIterations >= maximalNumberOfNestedObjects) { // make this part normal
    return String();
  }
  if (typeof (errorValue) === 'string') {
    return errorValue;
  }
  if (typeof (errorValue) === 'object') {
    const values = Object.keys(errorValue).map(key => errorValue[key]);
    // console.log("values", values)
    let text: string = String();
    for (let value of values) {
      // console.log("value", value)
      text = getServerErrorHelper(value, numberOfIterations + 1);
      if (text) {
        return text;
      }
    }
    return text;
  }
  return String();

}

export function getServerErrorText(errorValue: any): string {
  // console.log(errorValue);
  // Obj
  if (typeof (errorValue) === 'string') {
    return errorValue;
  } else if (typeof (errorValue) === 'object') {
    return getServerErrorHelper(errorValue);
  }
  return String();
}

// // future tests
// let err_array = ['error'];
// console.log(getServerErrorText(err_array)) // error
//
// let custom_error_obj1 = {"first_error": ["here is a first error"], "second_error": [""]}
// console.log(getServerErrorText(custom_error_obj1)); // here is a first error
//
// let custom_error_obj2 = {"first_error": [], "second_error": ["here is a second error"]}
// console.log(getServerErrorText(custom_error_obj2)); // here is a second error
//
// let custom_error_obj3 = {
//   "first_error": [],
//   "second_error": ["here is a second error", "here is a another second error"]
// }
// console.log(getServerErrorText(custom_error_obj2)); // here is a second error
//
// let empty_error_obj = {};
// console.log(getServerErrorText(empty_error_obj)); // String()
//
// let required_field_error = [
//   "This field is required."
// ]
//
// console.log(getServerErrorText(required_field_error)) // "This field is required."
//
// let required_field_error_obj = {
//   "email": [
//     "This field is required."
//   ]
// }
//
// console.log(getServerErrorText(required_field_error_obj)) // This field is required.
//
//
// let not_found_error_obj = {
//   "non_field_errors": [
//     "User with given email does not exist."
//   ]
// }
//
// console.log(getServerErrorText(not_found_error_obj)) // "User with given email does not exist."
//
// let sixteenNestedObjects = {
//   first:
//     {
//       second:
//         {
//           third:
//             {
//               fourth:
//                 {
//                   fifth:
//                     {
//                       sixth:
//                         {
//                           seventh:
//                             {
//                               eighth:
//                                 {
//                                   ninth:
//                                     {
//                                       tenth:
//                                         {
//                                           eleventh:
//                                             {
//                                               twelve:
//                                                 {
//                                                   thirteenth:
//                                                     {
//                                                       fourteenth:
//                                                         {
//                                                           fifteenth:
//                                                             {
//                                                               sixteenth:
//                                                                 ["this error won't be found because there will be no such response"]
//                                                             }
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
// console.log(getServerErrorText(sixteenNestedObjects)) // ""
